import { FunctionComponent } from "react";
import { card } from "@/tailwindvariant/Tailwindvariant";
import { useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import { Link } from "react-router-dom";

const Cart: FunctionComponent = () => {
  const { heading } = card();
  const data = useSelector((state: any) => state.cart.cartData);
  console.log(data);

  const getTotal = () => {
    let totalPrice = 0;
    data.forEach((item: any) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <>
      <div className="text-center mt-4">
        <h1 className={heading()}>Welcome To The Cart Page.</h1>
      </div>
      <div className="mx-[5%] py-20 flex">
        <CartItem />
        <div className="w-1/3 h-[300px] bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] pb-6 border-b-gray-400">
            <h2 className="text-2xl font-medium">Cart Total</h2>

            <p className="flex items-center gap-4 text-base">
              Shippng
              <span className="font-titleFont font-bold text-lg">
                Koteshwor-32 , Kathmandu
              </span>
            </p>
            <p className="flex justify-between item-center mt-6 text-base">
              Total Price{" "}
              <span className="font-titleFont font-bold text-lg">
                $ {getTotal()}
              </span>
            </p>
          </div>
          <Link to={"/payment"}>
            <button className="w-[340px] mt-4 h-[32px] bg-black hover:bg-slate-700 hover:text-slate-950 text-white">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
