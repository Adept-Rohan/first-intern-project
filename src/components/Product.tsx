import {FunctionComponent} from 'react'
import { queryHook } from '@/api/queryHook'
import { card } from '@/tailwindvariant/Tailwindvariant'
import ProductListing from './ProductListing'

const Product : FunctionComponent = () =>{
   
    const {heading} = card()

    const data = queryHook()
    console.log(data.data)

    return(
        <div>
            <div className='mt-8 text-center'>
                <h1 className={heading()}>Check Out Our New Arrivals Product</h1>
                <div className='mx-[5%] py-10 grid grid-cols-3 gap-10'>
                    {
                        data.data?.map((product:any) =>{
                            return(
                                <>
                                <ProductListing key={product.id} item={product} />
                                </>
                            )
                        })
                    }

                </div>
            </div>
          
         </div>
    )
}

export default Product






   
