import { useState } from "react";
import Logo from "../../ui/Logo";
import Label from "../../ui/Label"
import Input from "../../ui/Input"
import Button from "../../ui/Button";

const OnBoardingPage = () => {
  const [currentStep, setCurrentStep] = useState('1');

  return (
    <div>
      <Logo />
<div className="mt-20  w-fit md:mx-auto">
  
        <div className="flex gap-1 mb-12">
          {/* tab 1 */}
          <div className={`text-[13px] font-medium border-t-[3px] w-[220px] pt-2 ${
            currentStep === '1' ? 'text-white border-darkPink' : 'text-gray-500 border-accent1'
          }`}>
            <span>1. </span>
            <span>Details</span>
          </div>
          {/* tab 2 */}
          <div className={`text-[13px] font-medium border-t-[3px] w-[220px] pt-2 ${
            currentStep === '2' ? 'text-white border-darkPink' : 'text-gray-500 border-accent1'
          }`}>
            <span>2. </span>
            <span>Invites</span>
          </div>
          {/* tab 3 */}
          <div className={`text-[13px] font-medium border-t-[3px] w-[220px] pt-2 ${
            currentStep === '3' ? 'text-white border-darkPink' : 'text-gray-500 border-accent1'
          }`}>
            <span>3. </span>
            <span>Complete</span>
          </div>
        </div>
  
        {/*  */}
        {/* tab 1 */}
        {/* <div>
          <h2 className="text-white mb-2">Setup Organization</h2>
          <h4 className="text-gray-400 text-xl font-normal">Welcome! First, let's setup your organization.
</h4>
  

    <form className="mt-16">
      <Label labelfor="organizationName">
      Organization name
      </Label>
      <Input id="organizationName" placeholder="Ex.Acme Inc." />
      <Button className="bg-darkPink w-full  text-white   py-2 rounded-md ">Continue</Button>
    </form>
        </div> */}
        {/* tab 2 */}
        <div>
          <h2 className="text-white mb-2">Invite members</h2>
          <h4 className="text-gray-400 text-xl font-normal">Invite your team members to join your organization.</h4>
    <form className="mt-16">
   <div className="flex  gap-2">
     
        <Input id="organizationName" placeholder="membre@email.com" />
        <select  id="" className="h-fit relative top-4">
          <option value="member">member</option>
          <option value="member">admin</option>
        </select>
   </div>
      <Button className="bg-darkPink w-full  text-white   py-2 rounded-md ">Continue</Button>
      <Button className=" w-full  text-white hover:bg-[#17182A]   py-2 rounded-md mt-4">Skip</Button>
    </form>
        </div>
</div>
    </div>
  );
};

export default OnBoardingPage;
