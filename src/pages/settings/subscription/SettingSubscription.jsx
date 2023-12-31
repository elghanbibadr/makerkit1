import PricingPlansList from "../../../ui/PricingPlansList";
const SettingSubscription = () => {
  return (
    <div className="">
      <div className="text-white">
        <h3> Subscription </h3>
        <p className="text-gray-400 text-lg font-normal">
          Manage your Subscription and Billing
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <PricingPlansList />
      </div>
    </div>
  );
};

export default SettingSubscription;
