import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";

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
        <Label className="small-title " labelfor="organizationName">
          Organization Name
        </Label>
        <Input
        
          id="organizationName"
          name="organizationName"
          type="text"
        />
      </div>

      <div className="mt-6">
        <Label className="small-title " labelfor="organizationlogo" >
          Organization Logo
        </Label>
        <Input
         
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
