import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUserWithEmailAndPassword, AuthErrorCodes } from "@firebase/auth";
import { auth } from "../firebase/firebase";
import { card } from "../tailwindvariant/Tailwindvariant";

interface FormData {
  email: string;
  password: string;
  name: string;
}

const Register: FunctionComponent = () => {
  const { input, search, label, heading, error } = card();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
    name: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const handleData = async (data: any) => {
    console.log(data);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(userCredential.user);
      reset();
    } catch (err: any) {
      if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
        const field = "password";
        const message = "The password is too weak.";
        reset({ ...data, [field]: "" });
        errors[field] = { type: "manual", message };
      } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
        const field = "email";
        const message = "The email address is already in use.";
        errors[field] = { type: "manual", message };
      } else {
        console.log(err.code);
        alert(err.code);
      }
    }
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center mt-12">
        <div className="h-[600px] w-[788px] flex border-2 border-gray-400 rounded-xl">
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img
                  className="w-24 h-8 mr-2 mt-2"
                  src="src/img/logo.svg"
                  alt="logo"
                />
              </div>
              <div className="w-full h-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-2 md:space-y-2 sm:p-4">
                  <h1 className={heading()}>Create Your New Account</h1>
                  <form
                    onSubmit={handleSubmit(handleData)}
                    className="space-y-1 md:space-y-6"
                  >
                    <div>
                      <label className={label()} htmlFor="">
                        Your Full Name
                      </label>
                      <input
                        {...register("name")}
                        className={input()}
                        type="text"
                        placeholder="Enter Your Full Name"
                      />
                      <p className={error()}>{errors?.name?.message}</p>
                    </div>
                    <div>
                      <label htmlFor="email" className={label()}>
                        Your email
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        name="email"
                        className={input()}
                        placeholder="name@company.com"
                      />
                      <p className={error()}>{errors?.email?.message}</p>
                    </div>
                    <div>
                      <label htmlFor="password" className={label()}>
                        Password
                      </label>
                      <input
                        {...register("password")}
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        className={input()}
                      />
                      <p className={error()}>{errors?.password?.message}</p>
                    </div>

                    <button type="submit" className={search()}>
                      Sign in
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <span className="text-green-600 cursor-pointer text-sm">
                        Register Now
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section>
            <img className="h-full w-full" src="src/img/bg1.jpg" alt="" />
          </section>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Register;
