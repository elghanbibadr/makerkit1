import Button from "../ui/Button";
import signin from "../assets/sign-in.webp";
import darkdashboard from "../assets/dashboard.webp";
const WhatWeProvide = () => {
  return (
    <div className="mt-28 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center lg:gap-x-20">
      <div>
        <h2>Authentication</h2>
        <span className="gradientParagraph inline-block my-3">
          Secure and Easy-to-Use Authentication for Your SaaS Website and API
        </span>
        <p className="text-white my-4">
          Our authentication system is built on top of the industry-leading PaaS
          such as Supabase and Firebase. It is secure, easy-to-use, and fully
          customizable. It supports email/password, social logins, and more.
        </p>
        <Button className="text-white button-transparent rounded-full">
          <span>get started</span>
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
      </div>
      {/* col */}
      <div className="mt-10">
        <img className="" src={signin} alt="sign in image" />
      </div>

      <div className="mt-10">
        <img className="" src={darkdashboard} alt="sign in image" />
      </div>
      {/* col */}
      <div className="">
        <h2>Authentication</h2>
        <span className="gradientParagraph inline-block my-3">
          Secure and Easy-to-Use Authentication for Your SaaS Website and API
        </span>
        <p className="text-white my-4">
          Our authentication system is built on top of the industry-leading PaaS
          such as Supabase and Firebase. It is secure, easy-to-use, and fully
          customizable. It supports email/password, social logins, and more.
        </p>
        <Button className="text-white button-transparent rounded-full">
          <span>get started</span>
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
      </div>
      {/* col */}
    </div>
  );
};

export default WhatWeProvide;
