import CtaCard from "../componenet/CtaCard";
import Button from "../ui/Button";
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
      <Button className="bg-darkPink rounded-full   text-white   py-5 px-6 ">
        <span>Get Started</span>
        <svg
          className="ml-3 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="h-4 animate-in fade-in slide-in-from-left-8 delay-1000 fill-mode-both duration-1000 zoom-in"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </Button>
      <p className=" text-xs mt-3 text-gray-500 dark:text-gray-400">
        Free plan. No credit card required.
      </p>
    </div>
  );
};

export default Hero;
