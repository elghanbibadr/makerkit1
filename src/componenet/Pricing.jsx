import CtaCard from "./CtaCard";
import checkmark from "../assets/checkmark.svg";
import Button from "../ui/Button";
import PricingCard from "../ui/PricingCard";
const pricingData = [
  {
    name: "Basic",
    description: "Up to 20 users",
    price: "$90",
    billing: "/yearly",
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
    price: "$200",
    billing: "/yearly",
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
        <button className="text-white border-darkPink w-[110px] justify-center items-center rounded-s-md flex gap-2  border-[2px] py-2   px-3">
          <img className="h-5" src={checkmark} alt="check mark icon" />
          <span>Monthly</span>
        </button>
        <button className="text-white w-[110px] justify-center items-center rounded-e-md flex gap-2 border-accent1 border-[1px] py-2   px-3">
          <img className="h-5" src={checkmark} alt="check mark icon" />
          <span>Yearly</span>
        </button>
      </div>
      {/* pricing Card */}
      {pricingData.map(
        ({ name, description, billing, price, features, cta }, index) => (
          <PricingCard
            key={index}
            title={name}
            description={description}
            billing={billing}
            price={price}
            features={features}
            cta={cta}
          />
        )
      )}
    </div>
  );
};

export default Pricing;
