import Button from "../../../ui/Button";

const ProfilEmailPage = () => {
  return (
    <div className="text-white">
      <h3>Email</h3>
      <p className="text-gray-400 text-lg font-normal">
        Update your email address
      </p>
      <div className="mt-4">
        <label className="small-title " htmlFor="newemail">
          Your New Email
        </label>
        <input
          className="input block w-full "
          id="newemail"
          name="newemail"
          type="email"
        />
      </div>

      <div className="mt-6">
        <label className="small-title " htmlFor="repeatedemail">
          Repeat Email
        </label>
        <input
          className="input block w-full "
          id="repeatedemail"
          name="repeatedemail"
          type="email"
        />
      </div>
      <Button className="bg-darkPink mt-5  p-2 rounded-md text-sm">
        Update Email Address
      </Button>
    </div>
  );
};

export default ProfilEmailPage;
