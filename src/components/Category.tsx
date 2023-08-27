import  { FunctionComponent } from "react"; // Import React
import data from '../db.json';
import {motion} from 'framer-motion'
import {card} from '../tailwindvariant/Tailwindvariant'

const Category: FunctionComponent = () => {
    const {heading} = card()
    return (
        <>
        <div className="flex flex-col items-center justify-between">
        <div className="mt-8">
                <h1 className={heading()}>Shop Our Top Pick Category</h1>
            </div>
            <div className="flex w-full">
                {data.map((category) => (
                    <div className="relative mx-[25px] py-10 flex gap-10" key={category.id}>
                        <div  className="w-[194px] h-[250px] cursor-pointer overflow-hidden">
                            <motion.img whileTap={{ scale: 0.8 }} className="w-full h-full object-cover group-hover:scale-110 duration-500" src={category.image} alt={category.text} />
                        </div>
                        <div className="absolute left-0 top-12 w-full px-2 py-4">
                            <h2 className="text-2xl text-white text-center  font-semibold">{category.text}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
           
        </>
    );
};

export default Category;
