import Button from "../../../ui/Button";

const ProfilAuth = () => {
  return (
    <div className="text-white ">
      <div>
        <h3 className="text-white"> Multi-Factor Authentication</h3>
        <p className="text-gray-400 text-lg font-normal">
          Set up a MFA method to secure your account
        </p>
      </div>
      <div className="border border-[#0ea5e9] my-6 p-3 rounded-md ">
        <p className="text-[#0ea5e9] font-medium text-base">
          Secure your account with Multi-Factor Authentication Enable
          Multi-Factor Authentication to verify your identity for an extra layer
          of security to your account in case your password is stolen. In
          addition to entering your password, it requires you confirm your
          identity via SMS.
        </p>
      </div>
      <Button className="bg-darkPink  p-3 rounded-md text-sm">
        Setup a new Factor
      </Button>
    </div>
  );
};

export default ProfilAuth;
