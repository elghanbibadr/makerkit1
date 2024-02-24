import CtaCard from "./CtaCard";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import dashboardImg from "../../assets/dashboard-dark.webp";

const Hero = () => {
  return (
    <div className="mt-20 p-2 text-center flex flex-col items-center justify-center">
      <CtaCard>
        {" "}
        Get started for free. No credit card required. Cancel anytime.
      </CtaCard>
      <h1 className="text-center text-4xl mt-10 text-gray-600 text-white dark:text-white md:text-5xl flex flex-col font-heading font-medium xl:text-7xl 2xl:text-[5.2rem]">
        The SaaS Solution for
        <span className="gr bg-clip-text text-transparent from-primary-400 to-primary-700 leading-[1.2]">
          developers and founders
        </span>
      </h1>
      <p className="gradientParagraph my-6 lg:w-[80%]">
        Here you can write a short description of your SaaS This subheading is
        usually laid out on multiple lines Impress your customers, straight to
        the point.
      </p>
      <Button
        className="bg-darkPink rounded-full   text-white   py-5 px-6 "
        withArrow={true}
      >
        <Link to="auth/signup">
          <span>Get Started</span>
        </Link>
      </Button>
      <p className=" text-xs mt-3 text-gray-500 dark:text-gray-400">
        Free plan. No credit card required.
      </p>
      <div className="mt-20   py-12 max-w-5xl mx-auto ">
        <img
          className="rounded-md shadow-pinkBoxShadow2"
          src={dashboardImg}
          alt="dashboard image"
        />
      </div>
    </div>
  );
};

export default Hero;
