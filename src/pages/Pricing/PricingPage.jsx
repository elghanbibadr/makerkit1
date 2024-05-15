import PricingPlansList from "../../ui/PricingPlansList";
const PricingPage = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-white">Pricing</h1>
        <h3 className="text-white text-xl font-normal">
          Our pricing is designed to scale with your business. Get started for
          free, then grow with us
        </h3>
      </div>
      <PricingPlansList />
    </div>
  );
};

export default PricingPage;
