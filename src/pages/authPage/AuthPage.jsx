import { useContext, useState } from "react";
import logo from "../../assets/logo.svg";
import Button from "../../ui/Button";
import googlelogo from "../../assets/googlelogo.webp";
import supabase from "../../../public/supabase/Supabase";
import { AppContext } from "../../store/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SignUp } from "../../services/apiAuth";
import toast from "react-hot-toast";
// import input from "../../ui/input";
import Label from "../../ui/Label";
import Logo from "../../ui/Logo";

const AuthPage = ({ isSignUp = true }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (isSignUp) {
      if (data.repeatedpassword !== data.password) {
        return toast.error("passwords are not matched");
      }
      await SignUp(data.email, data.password);
    } else {
      await Login(data.email, data.password);
    }

    // Reset the form values
    reset();
  };

  async function Login(email, password) {
    const { data,error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });


    console.log("sign in data",data)
    if (error) return toast.error(error.message);
    navigate("/dashboard");
  }

  // SIGN UP FUNCTION
  async function SignUp(email, password) {
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (!error){
      console.log("data",data)
      // create a new row inside the organization tables for this user
 
    }
    if (error) return toast.error(error.message);
    navigate("/onboarding");
  }
  const handleGoogleSignIn = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      return toast.error(error.message);
    }
    if (!error) navigate("/dashboard");
  };
  return (
    <div className="flex  flex-col justify-center items-center ">
      <div className= "w-[400px]">
        <Link to="/">
          {/* <img className="mx-auto" src={logo} alt="makerkit logo" /> */}
          <Logo className="mx-auto" />
        </Link>
        <div className="border border-accent1 shadow-pinkBoxShadow2 p-6 rounded-xl mt-10">
          <h5 className="scroll-m-20 font-heading text-lg font-medium text-white text-center">
            {isSignUp ? "Create account" : "Sign in to your account"}
          </h5>
          <Button
            onClick={handleGoogleSignIn}
            className="button-transparent mt-6 w-full flex justify-between rounded-md p-4"
          >
            <img className="h-6" src={googlelogo} alt="google logo image" />
            <span className="text-center w-full  text-white">
              Sign {isSignUp ? "up" : "in"} with Google
            </span>
          </Button>
          <span className="text-[.8rem] mt-4 font-medium flex items-center justify-center text-gray-400">
            or continue with email
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-6">
              <Label  labelfor="email">
                Email Address
              </Label>
              <input
                className=" input block w-full "
                id="email"
                placeholder="your@email"
                name="email"
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm font-semibold">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mt-4">
              <Label  labelfor="password">
                Password
              </Label>
              <input
                className=" input block  w-full "
                id="password"
                name="password"
                type="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-600 text-sm font-semibold">
                  {errors.password.message}
                </p>
              )}
              {!isSignUp && (
                <span className="text-[.79rem] cursor-pointer inline-block mt-4 hover:underline font-medium  text-gray-400">
                  Password forgotten?
                </span>
              )}
            </div>
            {isSignUp && (
              <div className="mt-4">
                <Label  labelfor="repeatpassword">
                  RepeatPassword
                </Label>
                <input
                  className=" input block  w-full "
                  id="repeatpassword"
                  name="repeatpassword"
                  type="password"
                  {...register("repeatedpassword", {
                    required: "Repeated Password is required",
                  })}
                />
                {errors.repeatedpassword && (
                  <p className="text-red-600 text-sm font-semibold">
                    {errors.repeatedpassword.message}
                  </p>
                )}
              </div>
            )}

            {isSignUp && (
              <Button className="button-pink text-white w-full mt-6 rounded-md">
                Sign up
              </Button>
            )}

            {!isSignUp && (
              <Button className="button-pink text-white w-full mt-6 rounded-md">
                Sign in
              </Button>
            )}
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
