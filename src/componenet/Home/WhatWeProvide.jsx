import Button from "../../ui/Button";
import signin from "../../assets/sign-in.webp";
import darkdashboard from "../../assets/dashboard.webp";
import WhatWeProvideDesc from "../../ui/WhatWeProvideDesc";

const WhatWeProvide = () => {
  return (
    <div className="mt-28 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center lg:gap-x-20">
      <WhatWeProvideDesc />

      <div className="mt-10">
        <img className="" src={signin} alt="sign in image" />
      </div>

      <div className="mt-10">
        <img className="" src={darkdashboard} alt="sign in image" />
      </div>
      <WhatWeProvideDesc />
    </div>
  );
};

export default WhatWeProvide;
