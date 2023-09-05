import { AiOutlineClose } from "react-icons/ai";
import { card } from "@/tailwindvariant/Tailwindvariant";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type ButtonProps = {
  handleClick: () => void;
};

const PopUp = (props: ButtonProps) => {
  const { text } = card();

  return (
    <>
      <div className=" fixed w-[100%] h-[100%] top-0 right-0 left-0 bottom-0 bg-black/40">
        <div className="z-100  absolute left-[30%] top-[30%] right-[40%] bottom-[30%] text-center m-auto bg-white rounded-2xl border-black">
          <h1
            className={text({
              className: "pt-2",
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
          <div className="pt-6 ">
            <TextField
              id="outlined-basic"
              label="Billing Address"
              variant="outlined"
            />
          </div>
          <div className="mt-6">
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
