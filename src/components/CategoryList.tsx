import { FC } from "react";
import { card } from "@/tailwindvariant/Tailwindvariant";
import { queryHook } from "@/api/queryHook";

interface Props {
  filterItem: (Val: any) => any,
  setItem: React.Dispatch<any>,
 menuItems: any 

}


const CategoryList : FC<Props> = ({ filterItem, setItem, menuItems })=>{

   const data = queryHook()

   const {text , button} = card()

    return (
        <>
        <div className="w-1/4" >
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