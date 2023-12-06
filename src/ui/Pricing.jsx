import CtaCard from "../componenet/Home/CtaCard";
import PricingPlansList from "./PricingPlansList";

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
      <PricingPlansList />
    </div>
  );
};

export default Pricing;
