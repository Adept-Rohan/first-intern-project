import { FC, useState  } from "react";
import { card } from "@/tailwindvariant/Tailwindvariant";
import CategoryList from "@/components/CategoryList";
import CategoryData from "@/components/CategoryData";
import { queryHook } from "@/api/queryHook";

const CategoryFilter : FC = ()=>{
  
  const data = queryHook()
  console.log(data.data)  
  const {heading} = card()

  const [item , setItem] = useState(data.data)


  const menuItems = [...new Set(data?.data?.map((pro:any) => pro.category))];

  const filterItem = (curcat:string) => {
    const newItem = data?.data?.filter((newVal:any) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  console.log(menuItems)

    return (
        <>
          <div className="text-center mt-4">
            <h1 className={heading()}>This is Category Page</h1>
          </div>
          <div className="flex justify-between px-8">
                <CategoryList filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems} />
                <CategoryData item={item}/>
          </div>
        </>
    )
}

export default CategoryFilter