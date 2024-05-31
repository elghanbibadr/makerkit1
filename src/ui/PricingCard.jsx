import Button from "./Button";
import checkmark from "../assets/checkmark.svg";
import proplanicon from "../assets/proplanicon.svg";
import { Link } from "react-router-dom";
import {PurpleButton} from "../ui/PurpleButton"
import { ButtonTransparent } from "./Button-transparent";

const PricingCard = ({
  id,
  title,
  description,
  features,
  cta,
  selectedPlan,
  yearlyBilling,
  monthlybilling,
}) => {
  return (
    <div
    data-aos={`${id === 0 ? "zoom-in-right": id===1 ?  "zoom-in-down":"zoom-in-left"}`}
      className={`text-left mt-10 ${
        title === "Pro" ? "border-darkPink" : "border-accent1"
      }  border-[2px] rounded-xl  p-5 sm:w-[70%] sm:mx-auto md:w-full`}
    >
      <div className="flex items-center gap-6">
        <h3 className="text-white">{title}</h3>
        {title !== "Premium" && (
          <div
            className={`rounded-md flex items-center gap-1 py-1 px-3 text-sm w-fit font-medium  ${
              title === "Pro"
                ? "bg-darkPink text-white"
                : "bg-gray-50 text-gray-800"
            }    `}
          >
            {title === "Pro" && (
              <img className="h-4" src={proplanicon} alt="pro plan icon" />
            )}
            <span c> {description}</span>
          </div>
        )}
      </div>
      <span className="text-small-gray inline-block my-3">
        Description of your {title} plan
      </span>
      { (
        <div className="my-3">
          <span className="text-2xl text-white font-bold lg:text-3xl xl:text-4xl">
            {console.log(yearlyBilling, monthlybilling)}
            {selectedPlan !== "Monthly" ? yearlyBilling : monthlybilling}
          </span>
          { title!=="Premium" && <span className="text-lg lowercase text-gray-500 dark:text-gray-400">
            <span>/{selectedPlan === "Monthly" ? "Monthly" : "Yearly"}</span>
          </span>}
        </div>
      ) }
      <ul className={`text-gray-300  font-medium text-[.93rem]   `}> 
      
        {features.map((feature, index) => (
          <li key={index} className="flex my-1 items-center gap-2">
            <img className="h-5" src={checkmark} alt="check mark icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link  to="/dashboard">
       
         {  title === "Pro" ? <PurpleButton text={cta} className="w-full mt-6" /> :
         <ButtonTransparent  text={cta} className="w-full mt-6" />
         }
          
      </Link>
    </div>
  );
};

export default PricingCard;
