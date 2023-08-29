import { FunctionComponent } from "react";
import { queryHook } from "@/api/queryHook";

interface FilterData {
    id : number
    title: string
    text: string
}

interface Item {
   id: number
   title: string
   image: string
}

const List : FunctionComponent = (input)=>{
   

    const inputData = input
    console.log(inputData)

    const data = queryHook()
    console.log(data.data)
    
    //    const filterData = data.data.filter((el : FilterData)=>{
    //       if(inputData === ''){
    //           return el
    //       }
    //       else{
    //           return el.text.toLowerCase().includes(inputData)
    //       }
    //    })
    
    

    //     console.log(filterData)

    return(
      <>
      <div className="w-[450px] absolute top-14 h-auto bg-black">
          <ul className="z-100 flex flex-col items-center justify-between">
             {/* {
                inputData !== '' && (

                    filterData.map((item:Item) => (
                        <li className="cursor-pointer text-white" key={item.id}>{item.title}</li>
                    ))

                )
            }     */}
 <li className="cursor-pointer text-white">Hello</li>
<li className="cursor-pointer text-white">World</li>  
          </ul>
      </div>
      
      
      </>
    )
}

export default List