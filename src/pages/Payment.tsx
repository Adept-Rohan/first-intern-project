import { FC, useState } from "react";
import { card } from "@/tailwindvariant/Tailwindvariant";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopUp from "@/components/PopUp";
// import { useNavigate } from "react-router-dom";

const Payment: FC = () => {
  const { heading, button } = card();

  const [popOpen, setPopOpen] = useState(false);

  const cartData = useSelector((state: any) => state.cart.cartData);
  console.log("CartData", cartData);

  const userData = useSelector((state: any) => state.user.user);

  const email = userData.email;
  const result = email.substring(0, email.indexOf("@"));

  const addressData = useSelector((state: any) => state.address.address);
  console.log("MyAd", addressData);

  // const navigate = useNavigate();

  const getTotal = () => {
    let totalPrice = 0;
    cartData?.forEach((item: any) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const handlePayment = () => {
    // navigate("/");
    toast.success("Your Order Has Been Confirmed", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <div className="text-center pt-8 ">
        <h1 className={heading()}>Welcome To The Payment Gateaway.</h1>
      </div>
      <div className="flex w-full gap-4">
        <div className="flex w-full flex-col">
          <div className="w-[70%] flex flex-col gap-4 mt-8 h-auto rounded-xl bg-[#F4F4F4] mx-10 p-4">
            <p className="flex items-center gap-4">
              Deliver To : {result ? <p>{result}</p> : null}{" "}
            </p>
            <p>
              Billing Address :{" "}
              <button
                onClick={() => setPopOpen(!popOpen)}
                className="hover-underline text-blue-800 px-2"
              >
                {addressData ? (
                  <div>{addressData.address}</div>
                ) : (
                  <div>Edit</div>
                )}
              </button>
              {popOpen ? (
                <PopUp handleClick={() => setPopOpen(!popOpen)} />
              ) : null}
            </p>
            <p className="flex items-center gap-4">
              Email Address:{" "}
              {userData ? <div>{userData.email}</div> : <div></div>}{" "}
            </p>
          </div>
          <div className="w-[70%] flex flex-col gap-4 mt-8 h-auto rounded-xl bg-[#F4F4F4] mx-10 p-4">
            <p>Your Items</p>
            {cartData &&
              cartData?.map((product: any) => {
                return (
                  <>
                    <div
                      key={product.id}
                      className="flex items-center justify-between"
                    >
                      <img className="w-4" src={product.image} alt="" />
                      <p className="flex gap-4">
                        {product.title.substring(0, 20)}
                      </p>
                      <p>$ {product.price}</p>
                      <p>{product.quantity}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <div className="w-[620px] flex flex-col gap-4 mt-8 h-80 rounded-xl bg-[#F4F4F4] mx-10 p-4">
          <h1 className="text-center">Order Summary</h1>
          <p>
            Total Price : <span className="text-green-400">$ {getTotal()}</span>
          </p>
          <div className="mt-4 relative flex flex-col gap-6">
            <h1 className="text-center">Payment Partner</h1>
            <div
              className="flex items-center justify-between
              mt-4"
            >
              <img
                className="w-12 cursor-pointer"
                src="src/img/mastercard.png"
                alt=""
              />
              <img
                className="w-12 cursor-pointer"
                src="src/img/e-sewa.png"
                alt=""
              />
              <img
                className="w-12 cursor-pointer"
                src="src/img/imepay.png"
                alt=""
              />
              <img
                className="w-12 cursor-pointer"
                src="src/img/khalti.png"
                alt=""
              />
            </div>
            <button
              onClick={handlePayment}
              className={button({
                className: "h-8 bg-green-600 text-white ",
              })}
            >
              Place Your Order
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
