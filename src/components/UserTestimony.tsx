import {FunctionComponent } from 'react'
import {card} from '../tailwindvariant/Tailwindvariant'
import data from '../data/testomonial.json'

const UserTestimony : FunctionComponent = ()=>{
    const {heading} = card()



    return (
        <>
        <div className='text-center mt-6'>
            <h1 className={heading()} >Check Out Our User Testimony</h1>
        </div >
        <div className='grid mb-8 lg:mb-12 lg:grid-cols-2 mt-6 '>
        {
            data.map((testomony)=>{
                return(
                    <>
                    <div key={testomony.id}  >
                     <figure  className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <p className="my-4">{testomony.content}</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img className="w-9 h-9 rounded-full" src={testomony.image} alt="profile picture"/>
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>{testomony.author}</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">{testomony.location}</div>
                  </div>
              </figcaption>    
          </figure>
          </div>
          
                      
                    </>
                )
            })
        }
        </div>
        
       
       
        
      
        </>
    )
}

export default UserTestimony