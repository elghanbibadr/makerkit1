import Button from "../../../ui/Button";
const OrganizationGeneralPage = () => {
  return (
    <div>
      <div className="text-white">
        <h3> General </h3>
        <p className="text-gray-400 text-lg font-normal">
          General Manage your Organization
        </p>
      </div>
      <div className="mt-4">
        <label className="small-title " htmlFor="organizationName">
          Organization Name
        </label>
        <input
          className="input block w-full "
          id="organizationName"
          name="organizationName"
          type="text"
        />
      </div>

      <div className="mt-6">
        <label className="small-title " htmlFor="organizationlogo">
          Organization Logo
        </label>
        <input
          className="input block w-full "
          id="organizationlogo"
          name="organizationlogo"
          type="file"
        />
      </div>
      <Button className="bg-darkPink mt-5 text-white p-3 rounded-md text-sm">
        Update Organization
      </Button>
    </div>
  );
};

export default OrganizationGeneralPage;
