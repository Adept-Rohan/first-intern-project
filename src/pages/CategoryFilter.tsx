import { FC } from "react";
import { card } from "@/tailwindvariant/Tailwindvariant";
import CategoryList from "@/components/CategoryList";
import CategoryData from "@/components/CategoryData";

const CategoryFilter : FC = ()=>{

  const {heading} = card()

    return (
        <>
          <div className="text-center mt-4">
            <h1 className={heading()}>This is Category Page</h1>
          </div>
          <div className="flex items-center justify-between px-8">
                <CategoryList/>
                <CategoryData/>
          </div>
        </>
    )
}

export default CategoryFilter