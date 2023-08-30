import { FC } from "react";
import { queryHook } from "@/api/queryHook";


const CategoryList : FC = ()=>{

   const data = queryHook()
   console.log(data.data)

    return (
        <>
        <div>
            <ul className="flex flex-col items-center">
                   {
                     data?.data?.map((product:any , i:number)=> {
                        
                         <li className="text-black" key={i}>{product.category}</li>
                         console.log(product.category)
                     })
                   }
            </ul>
        </div>
        </>
    )
}

export default CategoryList