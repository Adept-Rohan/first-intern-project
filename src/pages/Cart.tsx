import { FunctionComponent } from "react";
import { card } from "@/tailwindvariant/Tailwindvariant";
import { useSelector } from "react-redux";

const Cart : FunctionComponent = () =>{
    const {heading} = card()
    // const data = useSelector((state:any)=> state.cart.cartProduct)
    // console.log(data)
    
    return(
<>
<div className="text-center mt-4">
<h1 className={heading()}>Welcome To The Cart Page.</h1>
</div>
<div>

</div>


</>
    )
}

export default Cart