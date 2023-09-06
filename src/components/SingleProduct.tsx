import { FunctionComponent, useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/CartReducer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Items } from "./List";
import ReactLoading from "react-loading";

type myDetails = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
};

const SingleProduct: FunctionComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [details, setDetails] = useState<myDetails | null>(null);

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get<Items>(
          `https://fakestoreapi.com/products/${id}`
        );
        setDetails(res.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [id]);

  if (details === null) {
    return (
      <div className="h-[200px] flex items-center justify-center">
        <ReactLoading type="spokes" color="#0000FF" height={100} width={50} />
      </div>
    );
  }

  return (
    <>
      <div>
        <div>
          <div className=" mx-[5%] my-10 flex gap-10">
            <div className="w-2/5 relative">
              <img
                className="w-full h-[550px] object-contain"
                src={details.image}
                alt="Product Image"
              />
            </div>
            <div className="w-3/5 flex flex-col justify-center gap-12">
              <div>
                <h2 className="text-4xl font-semibold">{details.title}</h2>
                <div className="flex items-center gap-4 mt-3">
                  <p className="font-semibold"> $ {details.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-base">
                <div className="flex">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <p className="text-xs text-gray-500">(1 Customer Review)</p>
              </div>
              <p className="text-base text-gray-500 mt-3">
                {details.description}
              </p>
              <div className="flex gap-4">
                {disabled ? (
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: details.id,
                          title: details.title,
                          image: details.image,
                          price: details.price,
                          quantity: 1,
                          description: details.description,
                        })
                      ) &&
                      toast.success("Added To The Cart", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      })
                    }
                    className="bg-slate-500 text-white py-3 px-6 active:bg-gray-800 "
                    disabled={disabled}
                  >
                    added to Cart
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: details.id,
                          title: details.title,
                          image: details.image,
                          price: details.price,
                          quantity: 1,
                          description: details.description,
                        })
                      ) &&
                      toast.success("Added To The Cart", {
                        position: "top-left",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      }) &&
                      setDisabled(true)
                    }
                    className="bg-black text-white py-3 px-6 active:bg-gray-800 "
                  >
                    add to Cart
                  </button>
                )}
              </div>
              <p className="text-base text-gray-500">
                Category :{" "}
                <span className="font-medium capitalize">
                  {details.category}
                </span>{" "}
              </p>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
