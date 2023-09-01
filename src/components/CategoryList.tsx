import { FC } from "react";
import { card } from "@/tailwindvariant/Tailwindvariant";
import { queryHook } from "@/api/queryHook";


const CategoryList : FC = ({ filterItem, setItem, menuItems })=>{

   const data = queryHook()

   const {text , button} = card()

    return (
        <>
        <div >
            <h1 className={text()}>Filter By Category</h1>
            <ul className="flex flex-col gap-5 mt-6">
            {menuItems.map((Val:any, id:number) => {
          return (
            <>
           
            <button
              className={button()}
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
            </>
          );
        })}
        <button
          className={button()}
          onClick={() => setItem(data?.data)}
        >
          All
        </button>
            </ul>
        </div>
        </>
    )
}

export default CategoryList