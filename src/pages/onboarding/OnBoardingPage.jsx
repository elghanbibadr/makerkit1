import { useEffect, useRef, useState } from "react";
import Logo from "../../ui/Logo";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hook/useUser";
import LoadingSpinner from "../../ui/LoadingSpinner";
import checkMarkGreenIcon from "../../assets/greenCircleCheckMark.svg";
import { PurpleButton } from "../../ui/PurpleButton";
import { ButtonTransparent } from "../../ui/Button-transparent";
import { useCreateWorkflow } from "../../hook/useCreateWorkflow";

const OnBoardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orgName, setOrgName] = useState("");
  const [isSettingUpOrganization, setIsSettingUpOrganization] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();
  const form = useRef();

  const { createWorkflow, isCreatingWorkflow }=useCreateWorkflow()




  // useEffect(() => {
  //   // MAKE THE USER CLICK ON THE DO TO DASHBOARD BUTTON IF HE FINISH HE"IS ORG DETAILS
  //   if (currentStep === 3) return;

  //   // REDIRECT TO THE DASHBOARD IF THERE IS ALREADY AN ORGANIZATION
  //   if (
  //     !isGettingOrganizationDetails &&
  //     organizationDetails?.organizations.length !== 0
  //   ) {
  //     navigate("/dashboard");
  //   }
  // }, [organizationDetails, isGettingOrganizationDetails, currentStep]);

  const handleOrgCompletionSetUp = async () => {
    // CREATE AN ORGANIZATION WITH THAT USER DETAILS
    createWorkflow({
      name: orgName,    
      workflowId: user?.data.user.id,
    });


 

    setIsSettingUpOrganization(false);
  };

  const handleFinishingAddingOrgDetails = () => {
    setCurrentStep(2);
    setIsSettingUpOrganization(true);

    setTimeout(() => {
      handleOrgCompletionSetUp();
    }, 2000);
  };

  return (
    <div>
      <Logo className="mx-auto mt-3" />
      <div className="mt-20  w-fit md:mx-auto">
        <div className="flex   gap-2 md:gap-6 md:gap-2 mb-12">
          {/* tab 1 */}
          <div
            className={`text-[13px] w-full font-medium border-t-[3px] md:w-[220px] pt-2 ${
              currentStep === 1
                ? "text-white border-darkPink"
                : "text-gray-500 border-accent1"
            }`}
          >
            <span>1. </span>
            <span>Details</span>
          </div>
        
          {/* tab 3 */}
          <div
            className={`text-[13px] font-medium border-t-[3px] w-full md:w-[220px] pt-2 ${
              currentStep === 2
                ? "text-white border-darkPink"
                : "text-gray-500 border-accent1"
            }`}
          >
            <span>2. </span>
            <span>Complete</span>
          </div>
        </div>

        {/*  */}
        {/* tab 1 */}
        {currentStep === 1 && (
          <div className="">
            <h2 className="text-white  mb-2">Create Workflow</h2>
            <h4 className="text-gray-400 text-xl font-normal">
              Welcome! First, let's setup your Workflow
            </h4>

            <fieldset className="mt-16">
              <Label labelfor="organizationName">Workflow name</Label>
              <Input
                id="organizationName"
                onChange={(e) => setOrgName(e.target.value)}
                value={orgName}
                placeholder="Ex.Acme Inc."
              />
              <PurpleButton
                onClick={handleFinishingAddingOrgDetails}
                className="w-full"
                text="continue"
              />
            </fieldset>
          </div>
        )}

   

        {/* tab 3 */}
        {currentStep === 2 && (
          <div className="text-center">
            {isSettingUpOrganization && (
              <div>
                <LoadingSpinner className="h-6" />
                <h4 className="text-white text-center mt-6">
                  We're Setting up your organization please wait
                </h4>
              </div>
            )}

            {!isSettingUpOrganization && (
              <div>
                <img
                  className="h-12 w-12  mx-auto bg-green-500 p-1 text-white rounded-full ring-8 ring-green-500/30 dark:ring-green-500/50"
                  src={checkMarkGreenIcon}
                  alt="check mark  cirlce icon"
                />
                <h3 className="text-white my-6 ">
                  You're all set! You can now start using the app.🎉
                </h3>
                <Link to="/workflow">
                  <ButtonTransparent text="Go to your workflow" className="mx-auto" />
                </Link>
              </div>
            )}
          </div>
        )}

        {/* you are all set */}
      </div>
    </div>
  );
};

export default OnBoardingPage;
