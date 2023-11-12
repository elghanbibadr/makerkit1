import CtaCard from "./CtaCard";
import checkmark from "../assets/checkmark.svg";
import Button from "../ui/Button";
import PricingCard from "../ui/PricingCard";
import { useState } from "react";
const pricingData = [
  {
    name: "Basic",
    description: "Up to 20 users",
    monthlybilling: "$9",
    yearlyBilling: "$29",
    features: [
      "Basic Reporting",
      "Up to 20 users",
      "1GB for each user",
      "Chat Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    description: "Most Popular",
    monthlybilling: "$29",
    yearlyBilling: "$200",
    features: [
      "Advanced Reporting",
      "Up to 50 users",
      "5GB for each user",
      "Chat and Phone Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",

    price: "Contact us",
    features: [
      "Advanced Reporting",
      "Unlimited users",
      "50GB for each user",
      "Account Manager",
    ],
    cta: "Contact us",
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("Monthly");

  const handlePlanSelected = (e) => {
    setSelectedPlan(e.currentTarget.id);
  };
  return (
    <div className="mt-40 text-center">
      <CtaCard>
        Get started for free. No credit card required. Cancel anytime.
      </CtaCard>
      <h2 className="mt-10">
        Ready to take your SaaS business to the next level?
      </h2>
      <span className="gradientParagraph inline-block my-3">
        Get started on our free plan and upgrade when you are ready.
      </span>
      <div className="flex justify-center mt-10 text-md ">
        <button
          onClick={handlePlanSelected}
          id="Monthly"
          className={`text-white ${
            selectedPlan === "Monthly" ? "border-darkPink" : "border-accent1"
          }  w-[110px] justify-center items-center rounded-s-md flex gap-2  border-[2px] py-2   px-3`}
        >
          {selectedPlan === "Monthly" && (
            <img className="h-5" src={checkmark} alt="check mark icon" />
          )}
          <span>Monthly</span>
        </button>
        <button
          onClick={handlePlanSelected}
          id="Yearly"
          className={`text-white w-[110px] justify-center items-center border-[2px] rounded-e-md flex gap-2 ${
            selectedPlan === "Yearly" ? "  border-darkPink" : "border-accent1"
          }  border-[1px] py-2   px-3`}
        >
          {selectedPlan === "Yearly" && (
            <img className="h-5" src={checkmark} alt="check mark icon" />
          )}
          <span>Yearly</span>
        </button>
      </div>
      {/* pricing Card */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        {pricingData.map(
          (
            {
              name,
              description,
              monthlybilling,
              yearlyBilling,
              price,
              features,
              cta,
            },
            index
          ) => (
            <PricingCard
              key={index}
              title={name}
              description={description}
              monthlybilling={monthlybilling}
              yearlyBilling={yearlyBilling}
              price={price}
              features={features}
              cta={cta}
              selectedPlan={selectedPlan}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Pricing;
