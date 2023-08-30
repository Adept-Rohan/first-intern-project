import {tv} from 'tailwind-variants'

export const card = tv({
    slots:{
        input : "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",

        search : "w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",

        text: "font-light text-gray-500 dark:text-gray-400",

        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",

        heading : " text-xl font-bold leading-tight tracking-tight text-green-600 md:text-2xl dark:text-white",

        link : "px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base",

        error: 'text-sm text-red-600',

        button : 'border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black',

        footer_par: 'cursor-pointer hover:text-gray-500',
        
        footer_heading : 'mb-5 font-bodyFont',

      
    }
})