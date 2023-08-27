import Advertisement from "@/components/Advertisement";
import Category from "@/components/Category";
import Product from "@/components/Product";
import { FunctionComponent } from "react";

const Home : FunctionComponent = () =>{
    return (
     <>
       <Advertisement/>
       <Category/>
       <Product/>
     </>
    )
}


export default Home