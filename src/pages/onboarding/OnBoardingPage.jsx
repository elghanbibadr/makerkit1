import { useEffect, useRef, useState } from "react";
import Logo from "../../ui/Logo";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hook/useUser";
import emailjs from "@emailjs/browser";
import { useInviteMembre } from "../../hook/useInviteMembre";
import { useCreateOrganization } from "../../hook/useCreateOrganization";
import toast from "react-hot-toast";
import LoadingSpinner from "../../ui/LoadingSpinner";
import checkMarkGreenIcon from "../../assets/greenCircleCheckMark.svg";
import { useGetOrganization } from "../../hook/useGetOrganization";
import { PurpleButton } from "../../ui/PurpleButton";
import { ButtonTransparent } from "../../ui/Button-transparent";
import Select from "../../ui/Select";

const OnBoardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orgName, setOrgName] = useState("");
  const [memberEmail, setOrgEmail] = useState("");
  const [memberRole, setMemberRole] = useState("membre");
  const [isSettingUpOrganization, setIsSettingUpOrganization] = useState(false);
  const { user } = useUser();
  const { inviteMembre, isLoading: isInvitingMember } = useInviteMembre(false);
  const { createOrganization, isCreatingOrganization } =
    useCreateOrganization(false);
  const {
    organizationDetails,
    error,
    isLoading: isGettingOrganizationDetails,
  } = useGetOrganization(user?.data.user.id);
  const navigate = useNavigate();
  const form = useRef();

  console.log("isgetting org", isGettingOrganizationDetails);
  console.log("org details", organizationDetails?.organizations);

  const handleStepOneCompletion = () => {
    setCurrentStep(2);
  };

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
    createOrganization({
      organizationName: orgName,
      organizationLogoUrl: "",
      orgId: user?.data.user.id,
    });

    // CREATE A NEW INVITE IF THE USER CHOSE TO INVITE A MEMBRE
    const invitedMembre = {
      memberRole,
      memberEmail,
      orgId: user?.data.user.id,
    };

    if (memberEmail !== "") {
      inviteMembre(invitedMembre);

      // SEND AN EMAIL TO JOIN TO THAT INVITED MEMBER
      // PREVENT SENDING AN EMAIL IF THE INVITE STILL PROCESSED
      if (isInvitingMember) return;

      emailjs
        .sendForm("service_klj723p", "template_uw0pu1c", form.current, {
          publicKey: "IglxKjApNUagHGcdh",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("error", error);
            toast.error("there was an error sending email to this membre");
          }
        );
    }

    setIsSettingUpOrganization(false);
  };

  const handleFinishingAddingOrgDetails = () => {
    setCurrentStep(3);
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
          {/* tab 2 */}
          <div
            className={`text-[13px] font-medium border-t-[3px] w-full md:w-[220px] pt-2 ${
              currentStep === 2
                ? "text-white border-darkPink"
                : "text-gray-500 border-accent1"
            }`}
          >
            <span>2. </span>
            <span>Invites</span>
          </div>
          {/* tab 3 */}
          <div
            className={`text-[13px] font-medium border-t-[3px] w-full md:w-[220px] pt-2 ${
              currentStep === 3
                ? "text-white border-darkPink"
                : "text-gray-500 border-accent1"
            }`}
          >
            <span>3. </span>
            <span>Complete</span>
          </div>
        </div>

        {/*  */}
        {/* tab 1 */}
        {currentStep === 1 && (
          <div className="text-center">
            <h2 className="text-white  mb-2">Create Workflow</h2>
            <h4 className="text-gray-400 text-xl font-normal">
              Welcome! First, let's setup your Workflow
            </h4>

            <fieldset className="mt-16">
              <Label labelfor="organizationName">Organization name</Label>
              <Input
                id="organizationName"
                onChange={(e) => setOrgName(e.target.value)}
                value={orgName}
                placeholder="Ex.Acme Inc."
              />
              <PurpleButton
                onClick={handleStepOneCompletion}
                className="w-full"
                text="continue"
              />
            </fieldset>
          </div>
        )}

        {/* tab 2 */}
        {currentStep === 2 && (
          <div className="text-center">
            <h2 className="text-white mb-2">Invite members</h2>
            <h4 className="text-gray-400 text-xl font-normal">
              Invite your team members to join your organization.
            </h4>
            <form ref={form} className="mt-16">
              <div className="flex items-center  gap-2">
                <input
                  value={memberEmail}
                  className="relative top-2"
                  onChange={(e) => setOrgEmail(e.target.value)}
                  type="email"
                  placeholder="membre@email.com"
                />
                {/* <select
                  id=""
                  className="h-fit relative top-4"
                  value={memberRole}
                  onChange={(e) => setMemberRole(e.target.value)}
                >
                  <option value="member">member</option>
                  <option value="admin">admin</option>
                </select> */}
                   
          <Select  name="memberRole"
           value={memberRole}
           onChange={(e) => setMemberRole(e.target.value) }  />
              </div>
              {/* <Button onClick={handleFinishingAddingOrgDetails} className="bg-darkPink w-full  text-white   py-2 rounded-md ">Continue</Button> */}
              <PurpleButton
                onClick={handleFinishingAddingOrgDetails}
                className="w-full"
                text="continue"
              />
              <ButtonTransparent
                onClick={handleFinishingAddingOrgDetails}
                text="skip"
                className="w-full"
              />
            </form>
          </div>
        )}

        {/* tab 3 */}
        {currentStep === 3 && (
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
                <Link to="/dashboard">
                  <ButtonTransparent text="Go to your dashboard" className="mx-auto" />
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
