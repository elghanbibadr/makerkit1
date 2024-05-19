import CtaCard from "../componenet/Home/CtaCard";
import PricingPlansList from "./PricingPlansList";

const Pricing = () => {
  return (
    <div className="mt-40 text-center">
      <CtaCard>
        Get started for free. No credit card required. Cancel anytime.
      </CtaCard>
      <h2 className="mt-10 text-white">
        Ready to take your SaaS business to the next level?
      </h2>
      <h3 className="gradient-text  my-3">
        Get started on our free plan and upgrade when you are ready.
      </h3>
      <PricingPlansList />
    </div>
  );
};

export default Pricing;
