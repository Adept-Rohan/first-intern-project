import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "@/redux/CartReducer";
import { AiOutlineArrowRight } from "react-icons/ai";

const CategoryData = ({ item }: { item: any }) => {
  const dispatch = useDispatch();
  console.log(item);

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="w-3/4 grid grid-cols-2 px-4 gap-4">
        {item?.map((product: any) => {
          return (
            <>
              <div>
                <div className="group relative">
                  <div
                    key={item.id}
                    onClick={() => handleClick(product.id)}
                    className=" mt-4 w-full h-24 cursor-pointer overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-contain group-hover:scale-110 duration-500"
                      src={product.image}
                      alt=""
                    />
                    {product.id}
                  </div>
                  <div className="w-full border-[1px] cursor-pointer px-2 py-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="font-titleFont font-bold text-base">
                          {product.title.substring(0, 10)}
                        </h2>
                        <p className="text-base">{product.category}</p>
                      </div>
                      <div className="flex gap-2 justify-end relative overflow-hidden w-28 text-sm">
                        <div className="flex gap-2 z-30 transform  group-hover:translate-x-24 transition-transform duration-500">
                          <p className="font-semibold">$ {product.price}</p>
                        </div>
                        <p
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: product.id,
                                title: product.title,
                                image: product.image,
                                price: product.price,
                                quantity: 1,
                                description: product.description,
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
                          className="absolute z-20 w-[300px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform-translate-x-40  group-hover:translate-x-48 transition-transform duration-500 cursor-pointer"
                        >
                          add to Cart <ToastContainer />
                          <span>
                            <AiOutlineArrowRight />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CategoryData;
