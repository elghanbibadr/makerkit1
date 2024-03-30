import React, { useState } from "react";
import checkmark from "../assets/checkmark.svg";
import PricingCard from "./PricingCard";
import { pricingData } from "../utils/Utils";

const PricingPlansList = () => {
  const [selectedPlan, setSelectedPlan] = useState("Monthly");

  const handlePlanSelected = (e) => {
    setSelectedPlan(e.currentTarget.id);
  };
  return (
    <div>
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
      <div className="md:grid md:grid-cols-3 md:gap-2">
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

export default PricingPlansList;
