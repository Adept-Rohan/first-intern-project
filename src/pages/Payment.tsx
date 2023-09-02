import { FC } from "react";
import { card } from "@/tailwindvariant/Tailwindvariant";

const Payment: FC = () => {
  const { heading, text } = card();

  return (
    <>
      <div className="text-center mt-8">
        <h1 className={heading()}>Welcome To The Payment Gateaway.</h1>
      </div>
      <div className="mt-4 p-5">
        <p className={text()}>
          This feature is only available for Production phase only.
        </p>
      </div>
    </>
  );
};

export default Payment;
