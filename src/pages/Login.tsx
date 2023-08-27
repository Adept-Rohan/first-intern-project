import { FunctionComponent, useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInWithEmailAndPassword } from '@firebase/auth';
import { getAuth } from "@firebase/auth";
import { app } from '../firebase/firebase';
import { card } from '../tailwindvariant/Tailwindvariant';
import { useDispatch } from "react-redux";
import { setDetail } from '../redux/UserReducer';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
    email: string;
    password: string;
}

const Login: FunctionComponent = () => {

    const [success , setSuccess] = useState(false)

    const firebaseAuth = getAuth(app);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { input, label, search, heading, error } = card();

   

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
        reset
    } = useForm<FormData>({ resolver: yupResolver(schema) });

    const handleData = (data: FormData) => {
        console.log(data);
        signInWithEmailAndPassword(firebaseAuth, data.email, data.password)
            .then((UserCredential) => {
                console.log(UserCredential);
                dispatch(setDetail(UserCredential.user));
                setSuccess(!success)
                toast.success("Looged In Succesfully" ,{
                    position : "top-center",
                    autoClose : 500,
                    hideProgressBar: false,
                    closeOnClick : true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme : 'colored'
                } )
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                toast.error("Looged In Failed" ,{
                    position : "top-center",
                    autoClose : 500,
                    hideProgressBar: false,
                    closeOnClick : true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme : 'colored'
                } )
            });
        reset();
    };

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center mt-2">
                <div className="h-[550px] w-[758px] flex border-2 border-gray-400 rounded-xl">
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img className="w-24 h-8 mr-2" src="src/img/logo.svg" alt="logo" />
                            </div>
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-2 md:space-y-2 sm:p-2">
                                    <h1 className={heading()}>
                                        Sign in to your account
                                    </h1>
                                    <form onSubmit={handleSubmit(handleData)} className="space-y-4 md:space-y-6">
                                        <div>
                                            <label htmlFor="email" className={label()}>Your email</label>
                                            <input {...register("email")} type="email" name="email" id="email" className={input()} placeholder="name@company.com" />
                                            <p className={error()}>{errors?.email?.message}</p>
                                        </div>
                                        <div>
                                            <label htmlFor="password" className={label()}>Password</label>
                                            <input {...register("password")} type="password" name="password" id="password" placeholder="••••••••" className={input()} />
                                            <p className={error()}>{errors?.password?.message}</p>
                                        </div>
                                        <button type="submit" onClick={()=>{
                                            toast.success("Looged In Succesfully" ,{
                                                position : "top-center",
                                                autoClose : 500,
                                                hideProgressBar: false,
                                                closeOnClick : true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                theme : 'colored'
                                            } )
                                        }} className={search()}>Sign Up </button>

                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Don’t have an account yet? <span className="text-green-600 cursor-pointer">Register Now</span>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img className="h-full w-full" src="src/img/bg2.jpeg" alt="" />
                    </section>
                </div>
                <div>
                </div>
            </div>
        </>
    );
}

export default Login;
