import { useState } from "react";
import logo from "../../assets/logo.svg";
import Button from "../../ui/Button";
import googlelogo from "../../assets/googlelogo.webp";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Login, SignUp } from "../../services/apiAuth";

const AuthPage = ({ isSignUp }) => {
  const { register, handleSubmit } = useForm();

  // const [email, setEmail] = useState();
  // const [password, setpassword] = useState("");
  const handleSignUp = () => {
    // SignUp("bghanbi0@gmail.com", "clandestino@1");
  };

  const onSubmit = (data) => {
    console.log(data);
    if (isSignUp) {
      SignUp(data.email, data.password);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <Link to="/">
          <img className="mx-auto" src={logo} alt="makerkit logo" />
        </Link>
        <div className="border border-accent1 shadow-pinkBoxShadow2 p-6 rounded-xl mt-10">
          <h5 className="scroll-m-20 font-heading text-lg font-medium text-white text-center">
            {isSignUp ? "Create account" : "Sign in to your account"}
          </h5>
          <Button className="button-transparent mt-6 w-full flex justify-between rounded-md p-4">
            <img className="h-6" src={googlelogo} alt="google logo image" />
            <span className="text-center w-full  text-white">
              Sign in with Google
            </span>
          </Button>
          <span className="text-[.8rem] mt-4 font-medium flex items-center justify-center text-gray-400">
            or continue with email
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-6">
              <label className="small-title " htmlFor="email">
                Email Address
              </label>
              <input
                className="input block w-[400px] "
                id="email"
                placeholder="your@email"
                name="email"
                type="email"
                {...register("email")}
              />
            </div>
            <div className="mt-4">
              <label className="small-title " htmlFor="password">
                Password
              </label>
              <input
                className="input block w-[400px]"
                id="password"
                name="password"
                type="password"
                {...register("password")}
              />
              {!isSignUp && (
                <span className="text-[.79rem] cursor-pointer inline-block mt-4 hover:underline font-medium  text-gray-400">
                  Password forgotten?
                </span>
              )}
            </div>
            {isSignUp && (
              <div className="mt-4">
                <label className="small-title " htmlFor="repeatpassword">
                  RepeatPassword
                </label>
                <input
                  className="input block w-[400px]"
                  id="repeatpassword"
                  name="repeatpassword"
                  type="password"
                  {...register("repeatedpassword")}
                />
                <span className="text-[.79rem] cursor-pointer inline-block mt-4 hover:underline font-medium  text-gray-400">
                  type your password again
                </span>
              </div>
            )}
            <Button
              onClick={handleSignUp}
              className="button-pink text-white w-full mt-6 rounded-md"
            >
              Sign up
            </Button>
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
