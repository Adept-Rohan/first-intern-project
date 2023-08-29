import Advertisement from "@/components/Advertisement";
import Category from "@/components/Category";
import Product from "@/components/Product";
import UserTestimony from "@/components/UserTestimony";
import { FunctionComponent } from "react";

const Home : FunctionComponent = () =>{
    return (
     <>
       <Advertisement/>
       <Category/>
       <Product/>
       <UserTestimony/>
     </>
    )
}


export default Home