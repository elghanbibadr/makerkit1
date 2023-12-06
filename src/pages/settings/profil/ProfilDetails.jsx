import Button from "../../../ui/Button";

const ProfilDetails = () => {
  return (
    <div className="text-white text-xl">
      <h3>My Details</h3>
      <p className="text-gray-400 text-lg font-normal">
        Manage your profile details
      </p>
      <div className="mt-4">
        <label className="small-title " htmlFor="name">
          Name
        </label>
        <input
          className="input block w-full "
          id="name"
          name="name"
          type="text"
        />
      </div>
      <div className="mt-2">
        <label className="small-title " htmlFor="photo">
          Your Photo
        </label>
        <input
          className="input block w-full "
          id="photo"
          name="photo"
          type="file"
        />
      </div>
      <div className="mt-6">
        <label className="small-title " htmlFor="email">
          Email Address
        </label>
        <input
          className="input block w-full "
          id="email"
          placeholder="bghanbi50@gmail.com"
          name="email"
          type="email"
          disabled
        />
        <Button className="text-xs mt-3 mb-6">Update Email Address</Button>
      </div>
      <Button className="bg-darkPink  p-2 rounded-md text-sm">
        Update profil
      </Button>
    </div>
  );
};

export default ProfilDetails;
