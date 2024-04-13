import { useState } from "react";
import Logo from "../../ui/Logo";
import Label from "../../ui/Label"
import Input from "../../ui/Input"
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import supabase from "../../../public/supabase/Supabase";
import { useUser } from "../../hook/useUser";

const OnBoardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orgName,setOrgName]=useState('')
  const [membreEmail,setOrgEmail]=useState('')
  const [membreRole,setMembreRole]=useState('membre')
  const {user}=useUser()
  const navigate=useNavigate()
  // Getting the org name
  const handleStepOneCompletion=()=>{
    setCurrentStep(2)
  console.log('org name')
    
  }


  const handleOrgCompletionSetUp=async ()=>{
    // register the user org and its members 
    

     const {error}= await supabase
    .from('organizations')
    .insert([
      {organizationName:orgName,organizationLogoUrl:'',orgId:user?.data.user.id },
    ])
    .select()
  
      await supabase
    .from('organizationsMembers')
    .insert([
      {memberRole:membreRole,organizationId:user?.data.user.id,memberEmail:membreEmail },
    ])
    .select()
    
    console.log('error1',error)
    //navigate to the dashboard
   navigate('/dashboard')
  }


  const handleOptionChange = (event) => {
    setMembreRole(event.target.value);
    console.log(e.target.value)
  };
  console.log(orgName)
  return (
    <div>
      <Logo />
<div className="mt-20  w-fit md:mx-auto">
  
        <div className="flex gap-1 mb-12">
          {/* tab 1 */}
          <div className={`text-[13px] font-medium border-t-[3px] w-[220px] pt-2 ${
            currentStep === 1 ? 'text-white border-darkPink' : 'text-gray-500 border-accent1'
          }`}>
            <span>1. </span>
            <span>Details</span>
          </div>
          {/* tab 2 */}
          <div className={`text-[13px] font-medium border-t-[3px] w-[220px] pt-2 ${
            currentStep === 2 ? 'text-white border-darkPink' : 'text-gray-500 border-accent1'
          }`}>
            <span>2. </span>
            <span>Invites</span>
          </div>
          {/* tab 3 */}
          <div className={`text-[13px] font-medium border-t-[3px] w-[220px] pt-2 ${
            currentStep === 3 ? 'text-white border-darkPink' : 'text-gray-500 border-accent1'
          }`}>
            <span>3. </span>
            <span>Complete</span>
          </div>
        </div>
  
        {/*  */}
        {/* tab 1 */}
       { currentStep===1 && <div>
          <h2 className="text-white mb-2">Setup Organization</h2>
          <h4 className="text-gray-400 text-xl font-normal">Welcome! First, let's setup your organization.
</h4>
  

    <fieldset className="mt-16">
      <Label labelfor="organizationName">
      Organization name
      </Label>
      <Input  id="organizationName" onChange={(e) => setOrgName(e.target.value)} value={orgName} placeholder="Ex.Acme Inc." />
      <Button onClick={handleStepOneCompletion} className="bg-darkPink w-full  text-white   py-2 rounded-md ">Continue</Button>
    </fieldset>
        </div>}
        {/* tab 2 */} 
    { currentStep===2 &&   <div>
          <h2 className="text-white mb-2">Invite members</h2>
          <h4 className="text-gray-400 text-xl font-normal">Invite your team members to join your organization.</h4>
    <form className="mt-16">
   <div className="flex  gap-2">
     
        <Input  value={membreEmail} onChange={(e)=>setOrgEmail(e.target.value)} type='email' placeholder="membre@email.com" />
        <select  id="" className="h-fit relative top-4" value={membreRole} onChange={(e)=> setMembreRole(e.target.value)}>
          <option value="member">member</option>
          <option value="admin">admin</option>
        </select>
   </div>
      <Button onClick={() => setCurrentStep(3)} className="bg-darkPink w-full  text-white   py-2 rounded-md ">Continue</Button>
      <Button onClick={() => setCurrentStep(3)} className=" w-full  text-white hover:bg-[#17182A]   py-2 rounded-md mt-4">Skip</Button>
    </form>
        </div>}
         {/* tab 3 */} 
         {currentStep ===3 && <div>
          <Button onClick={handleOrgCompletionSetUp} className="bg-darkPink w-full  text-white   py-2 rounded-md ">Continue</Button>

          </div>}
</div>
    </div>
  );
};

export default OnBoardingPage;
