import  { ReactNode } from "react";
import { queryHook } from "@/api/queryHook";
import { card } from "@/tailwindvariant/Tailwindvariant";
import { useNavigate } from "react-router-dom";

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

const List= ({input}:{input:string}):ReactNode=>{
   
    const {link} = card()

    const navigate = useNavigate()

    const inputData = input
    console.log(inputData)

    const data = queryHook()
    console.log(data.data)
    
        const filterData = data?.data?.filter((el : FilterData)=>{
           if(inputData === ''){
               return false
           }
           else{
               return el?.title?.toLowerCase().includes(inputData)
           }
        })
    
    console.log()

        console.log(filterData)

       

    return(
      <>
      <div className=" absolute top-14    p-3  shadow-xl rounded-lg flex flex-col right-5">
          <ul className="z-100 flex flex-col items-center justify-between">
             {
                
                inputData !== '' && (

                    filterData?.map((item:Item) => (
                        <div className="bg-gray-50 w-[450px] z-50 h-auto flex items-center justify-between hover:bg-slate-100 transition-all duration-100 ease-in-out cursor-pointer" >
<li className={link()} key={item.id}>{item.title}</li>
<img className="w-8 h-6 rounded-3xl object-contain" src={item.image} alt="" />
                        </div>
                        
                    ))

                )
            }     

          </ul>
      </div>
      
      
      </>
    )
}

export default List