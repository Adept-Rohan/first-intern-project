import React, { useEffect, useState } from "react";
import { card } from "@/tailwindvariant/Tailwindvariant";
import { queryHook } from "@/api/queryHook";
// import { useNavigate } from "react-router-dom";

interface FilterData {
  id: number;
  title: string;
  text: string;
}

interface ItemFiltered {
  id: number;
  title: string;
  image: string;
}

interface Items {
  id: number;
  title: string;
  price: number;
  description: string;
}

interface Props {
  input: string;
  item: any;
}

const List: React.FC<Props> = ({ input, item }) => {
  const { link } = card();

  const [filtreredData, setFileredData] = useState<ItemFiltered[] | null>(null);
  // const navigate = useNavigate()

  const inputData = input;
  console.log(inputData);

  console.log(item);

  // const idString = (input: string) => {
  //   return input.toLowerCase().split(" ").join("");
  // };

  // const rootId = idString(myId.myId);

  // function handleClick() {
  //   navigate(`/product/${rootId}`);
  // }

  const data = queryHook();
  useEffect(() => {
    const filteredValue = data?.data?.filter((el: FilterData) => {
      if (inputData === "") {
        return false;
      } else {
        return el?.title?.toLowerCase().includes(inputData);
      }
    });

    console.log("FILTERD ", filteredValue);
    setFileredData(filteredValue);
  }, [inputData]);

  return (
    <>
      <div className=" absolute p-3   flex flex-col right-5">
        <ul className="z-100 flex flex-col items-center justify-between">
          {inputData !== "" &&
            filtreredData &&
            filtreredData?.map((item: ItemFiltered) => (
              <div className="bg-gray-50 w-[450px] z-50 h-auto flex items-center justify-between hover:bg-slate-100 transition-all duration-100 ease-in-out cursor-pointer">
                <li className={link()} key={item.id}>
                  {item.title}
                </li>
                <img
                  className="w-8 h-6 rounded-3xl object-contain"
                  src={item.image}
                  alt=""
                />
              </div>
            ))}
        </ul>
      </div>
    </>
  );
};

export default List;
