import { useContext, useEffect, useState } from "react";
import googlelogo from "../../assets/googlelogo.webp";
import supabase from "../../../public/supabase/Supabase";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Label from "../../ui/Label";
import { PurpleButton } from "../../ui/PurpleButton";
import { ButtonTransparent } from "../../ui/Button-transparent";
import Logo from "../../ui/Logo";
import { useUser } from "../../hook/useUser";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useQueryClient } from "react-query";
import { useSignUp } from "../../services/useSignUp";
import { useLogin } from "../../hook/useLogin";
import getUser  from "../../services/apiUser";
import { AppContext } from "../../store/AppContext";
import InvalidInputErrorMessage from "../../ui/InvalideInputErrorMessage";


const AuthPage = ({ isSignUp = true }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { session } = useContext(AppContext);


  console.log("sessions",session)
  const { SignUp, isSigninUp }=useSignUp()
  const { login, isLoading:isLogin }=useLogin()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user,isLoading:isGettingCurrentUser } = useUser();





  const onSubmit = async (data) => {
      setIsLoading(true);

      if (isSignUp) {
        if (data.repeatedpassword !== data.password) {
          return toast.error("passwords are not matched");
        }
        SignUp({email:data.email,password: data.password});
      } else {
         login({email:data.email,password: data.password});
      }
   
      // Reset the form values
      // reset();
      setIsLoading(false)
    }




  const handleGoogleSignIn = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
      redirectTo:"http://localhost:5173/dashboard"
      },
    });

    if (error) {
      return toast.error(error.message);
    }
  
  };

  // REDIREC USER  TO DASHBOARD IF HE IS ALREADY AUTHENTICATED

  useEffect( () => {
    if(session)navigate('/dashboard')
  },[]);
  // 

  // if(isGettingCurrentUser)return <LoadingSpinner className="h-screen" />

  return (
    <div data-aos="fade-up" className="flex   flex-col justify-center items-center ">
      <div className=" w-full md:w-[400px]">
        <Link to="/">
          <Logo className="mx-auto" />
        </Link>
        <div className="border border-accent1 shadow-pinkBoxShadow2 p-6 rounded-xl mt-10">
          <h5 className="scroll-m-20 font-heading mb-5 text-lg font-medium text-white text-center">
            {isSignUp ? "Create your account" : "Sign in to your account"}
          </h5>

          <ButtonTransparent
            onClick={handleGoogleSignIn}
            className="mx-auto"
            text="continue with google"
            icon={googlelogo}
            alt="google logo image"
          />
          <span className="text-[.8rem] mt-4 font-medium flex items-center justify-center text-gray-400">
            or continue with email
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-6">
              <Label labelfor="email">Email Address</Label>
              <input
                className={` block w-full mb-1 ${errors.email ? "border-red-600 outline-none focus:border-red-600":""}`}
                id="email"
                placeholder="your@email"
                name="email"
                type="email"
                {...register("email", { required: "Email is required" })}
              />
           
                    {errors.email && <InvalidInputErrorMessage errorMessage={errors.email.message} />}

            </div>
            <div className="mt-4">
              <Label labelfor="password">Password</Label>
              <input
                className={` block w-full mb-1 ${errors.password ? "border-red-600 outline-none focus:border-red-600":""}`}
                id="password"
                name="password"
                type="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <InvalidInputErrorMessage errorMessage={errors.password.message} />}
              {!isSignUp && (
                <span className="text-[.79rem] cursor-pointer inline-block mt-4 hover:underline font-medium  text-gray-400">
                  Password forgotten?
                </span>
              )}
            </div>
            {isSignUp && (
              <div className="mt-4">
                <Label labelfor="repeatpassword">RepeatPassword</Label>
                <input
                className={` block w-full mb-1 ${errors.repeatedpassword ? "border-red-600 outline-none focus:border-red-600":""}`}
                id="repeatpassword"
                  name="repeatpassword"
                  type="password"
                  {...register("repeatedpassword", {
                    required: "Repeated Password is required",
                  })}
                />
                {errors.repeatedpassword &&   <InvalidInputErrorMessage errorMessage={errors.repeatedpassword.message} />}

              </div>
            )}

            <PurpleButton
              text={isSignUp ? "sign up" : "sign in"}
              className="w-full"
              isLoading={isLogin || isSigninUp}
            />
          </form>
          <div className="text-[.8rem] font-medium flex justify-center gap-1 items-center mt-4">
            <span className="text-white">
              {" "}
              {isSignUp
                ? "Already have an account"
                : "Do not have an account yet?"}
            </span>
            {
              <Link to={`${isSignUp ? "/auth/signin" : "/auth/signup"}`}>
                <span className="text-darkPink cursor-pointer hover:underline">
                  {isSignUp ? "Sign In" : "Sign Up"}
                </span>
              </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
