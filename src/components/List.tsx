import React, { useEffect, useState } from "react";
import { card } from "@/tailwindvariant/Tailwindvariant";
import { queryHook } from "@/api/queryHook";
import { useNavigate } from "react-router-dom";

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

export interface Items {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Props {
  input: string;
  setInputData: any;
}

const List: React.FC<Props> = ({ input, setInputData }) => {
  const { link } = card();

  const [filtreredData, setFileredData] = useState<ItemFiltered[] | null>(null);
  const navigate = useNavigate();

  const [searchStatus, setSearchStatus] = useState(true);

  let inputData = input;
  console.log(inputData);
  console.log("SET", setInputData);
  const data = queryHook();

  useEffect(() => {
    const filteredValue = data?.data?.filter((el: FilterData) => {
      if (inputData === "") {
        return false;
      } else {
        return el?.title?.toLowerCase().includes(inputData);
      }
    });

    setFileredData(filteredValue);
    setSearchStatus(!searchStatus);
  }, [inputData]);

  const handleNavigate = (id: number) => {
    setInputData("");
    navigate(`/product/${id}`);
    setSearchStatus(!searchStatus);
  };

  return (
    <>
      <div className=" absolute p-3   flex flex-col right-5">
        <ul className="z-100 flex flex-col items-center justify-between">
          {inputData !== "" &&
            filtreredData &&
            searchStatus &&
            filtreredData?.map((item: ItemFiltered) => (
              <div
                className="bg-gray-50 w-[450px] z-50 h-auto flex items-center justify-between hover:bg-slate-100 transition-all duration-100 ease-in-out cursor-pointer"
                onClick={() => {
                  handleNavigate(item.id);
                }}
              >
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
