import CtaCard from "./CtaCard";
import Button from "../../ui/Button";
import dashboardImg from "../../assets/dashboard-dark.webp";

const Hero = () => {
  return (
    <div className="mt-20 p-2 text-center flex flex-col items-center justify-center">
      <CtaCard>
        {" "}
        Get started for free. No credit card required. Cancel anytime.
      </CtaCard>
      <h1 className="text-center text-4xl mt-10 text-gray-600 dark:text-white md:text-5xl flex flex-col font-heading font-medium xl:text-7xl 2xl:text-[5.2rem]">
        The SaaS Solution for
        <span className="gr bg-clip-text text-transparent from-primary-400 to-primary-700 leading-[1.2]">
          developers and founders
        </span>
      </h1>
      <p className="gradientParagraph my-6">
        Here you can write a short description of your SaaS This subheading is
        usually laid out on multiple lines Impress your customers, straight to
        the point.
      </p>
      <Button
        className="bg-darkPink rounded-full   text-white   py-5 px-6 "
        withArrow={true}
      >
        <span>Get Started</span>
      </Button>
      <p className=" text-xs mt-3 text-gray-500 dark:text-gray-400">
        Free plan. No credit card required.
      </p>
      <div className="mt-20   py-12 max-w-5xl mx-auto ">
        {/* animate-in fade-in  duration-1000 slide-in-from-top-16 fill-mode-both delay-300 */}
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
