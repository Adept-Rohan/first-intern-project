import { AiOutlineClose } from "react-icons/ai";
import { card } from "@/tailwindvariant/Tailwindvariant";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setAdress } from "@/redux/AdressReducer";

type ButtonProps = {
  handleClick: () => void;
};

interface AdressData {
  address: string;
}

const PopUp = (props: ButtonProps) => {
  const { text, error } = card();

  const schema = yup.object().shape({
    address: yup.string().required(),
  });

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleData = (data: AdressData | null) => {
    console.log("MY-ADRESS", data);
    dispatch(setAdress(data));

    reset();
  };

  return (
    <>
      <div className=" fixed w-[100%] h-[100%] top-0 right-0 left-0 bottom-0 bg-black/40">
        <div className="z-100  absolute left-[30%] top-[30%] right-[40%] bottom-[30%] text-center m-auto bg-white rounded-2xl border-black">
          <h1
            className={text({
              className: "pt-6",
            })}
          >
            Please Enter Your Billing Address
          </h1>
          <button
            className="absolute right-2 top-2 text-red-600"
            onClick={props.handleClick}
          >
            <AiOutlineClose />
          </button>
          <form onSubmit={handleSubmit(handleData)}>
            <div className="pt-6 ">
              <TextField
                id="outlined-basic"
                label="Billing Address"
                variant="outlined"
                {...register("address")}
              />
              <p className={error()}>{errors?.address?.message}</p>
            </div>
            <div className="mt-6">
              <Button
                onClick={props.handleClick}
                type="submit"
                variant="outlined"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopUp;
