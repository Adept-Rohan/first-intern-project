import {FunctionComponent} from 'react'
import { queryHook } from '@/api/queryHook'
import { card } from '@/tailwindvariant/Tailwindvariant'




const Product : FunctionComponent = () =>{
   
    const {heading} = card()
    const data = queryHook()
    console.log(data.data)

    return(
        <div>
            <div className='mt-8 text-center'>
                <h1 className={heading()}>Check Out Our Awesome Product</h1>
            </div>
          
         </div>
    )
}

export default Product