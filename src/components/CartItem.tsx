
import { useSelector } from "react-redux"
import { MdOutlineClose } from "react-icons/md"
import {removeItem , incrementQuantity , decrementQuantity} from '../redux/CartReducer'
import { useDispatch } from "react-redux"

const CartItem = () =>{
    
    const productData = useSelector((state:any) => state.cart.cartData)
    const dispatch = useDispatch()
    return (
        <>
        <div className='w-2/3 pr-10'>
            <div className='w-full '>
                <h2 className='font-titleFont text-2xl'>Shooping Cart</h2>
            </div>
            <div>
                {
                    productData?.map((item:any) => (

                        <div key={item?.id} className='flex items-center justify-between gap-6 mt-6'>
                            <div className='flex items-center gap-2'>
                                <MdOutlineClose onClick={()=> dispatch(removeItem(item.id))}   className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                                <img className='w-32 h-32 object-cover' src={item.image} alt="Product Image" />
                            </div>
                            <h2 className='w-52'>{item.title}</h2>
                            <p className='w-10'> ${item.price}</p>
                            <div>
                                <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                                    <p className='text-sm'>Quantity</p>
                                    <div className='flex items-center gap-4 text-sm font-semibold'>
                                        <button onClick={() => dispatch(decrementQuantity(item.id))} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => dispatch(incrementQuantity(item.id))} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    )
                }
            </div>
        </div>
        </>
    )
}

export default CartItem