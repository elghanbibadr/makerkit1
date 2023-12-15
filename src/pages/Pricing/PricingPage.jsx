import PricingPlansList from "../../ui/PricingPlansList";
const PricingPage = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h2>Pricing</h2>
        <h3 className="text-gray-600 mt-4 text-2xl font-normal">
          Our pricing is designed to scale with your business. Get started for
          free, then grow with us
        </h3>
      </div>
      <PricingPlansList />
    </div>
  );
};

export default PricingPage;
