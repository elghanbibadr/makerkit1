import React, { useRef } from "react";
import { useState } from "react";
import { useInviteMembre } from "../../../hook/useInviteMembre";
import arrow from "../../../assets/arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
// import { useGetMembres } from "../../../hook/useGetMembre";
import { useUser } from "../../../hook/useUser";
import { PurpleButton } from "../../../ui/PurpleButton";
import { ButtonTransparent } from "../../../ui/Button-transparent";
import Select from "../../../ui/Select";


const OrganizationInviteMembrePage = () => {
  const [memberEmail, setMembreEmail] = useState("");
  const [memberRole, setMembreRole] = useState("membre");
  const { isLoading: isGettingUser, user, isAuthenticated } = useUser();
  // const { orgMembres, isLoading: isGettingOrgMembers } = useGetMembres(
  //   user?.data.user.id || ""
  // );
  const { inviteMembre, isLoading: isInvitingMember } = useInviteMembre(true);
  const userEmail = user?.data.user.email;

  const navigate = useNavigate();

  const form = useRef();

  function inviteMembreHandler(e) {
    e.preventDefault();
    console.log("submited");
    //  getting the membre information
    const invitedMembre = {
      memberRole,
      memberEmail,
      orgId: user?.data.user.id,
    };

    if (isGettingOrgMembers) return;
    if (
      orgMembres.orgMembers.some(
        (item) => item.memberEmail === invitedMembre.memberEmail
      ) ||
      invitedMembre.memberEmail === userEmail
    ) {
      return toast.error("invite already exist !");
    }

    inviteMembre(invitedMembre);

    // Sending email to invited members

    console.log("form current", form.current);
    emailjs
      .sendForm("service_klj723p", "template_uw0pu1c", form.current, {
        publicKey: "IglxKjApNUagHGcdh",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          setMembreEmail("");
        },
        (error) => {
          console.log("error", error);
          toast.error("there was an error sending email to this membre");
        }
      );
  }

  return (
    <>
      <div className="text-white">
        <h3>Invite Members</h3>
        <p className="text-gray-400 text-sm md:text-base font-normal">
          Invite members to your organization
        </p>
      </div>
      <form ref={form} onSubmit={inviteMembreHandler} className="my-7">
        <div className="flex items-center   gap-2 ">
          <input
          className="my-0"
            name="memberEmail"
            value={memberEmail}
            onChange={(e) => setMembreEmail(e.target.value)}
            type="email"
            placeholder="membre@email.com"
            required
          />
          
          <Select name="memberRole"
           value={memberRole}
           onChange={(e) => setMembreRole(e.target.value) }  />
        </div>

        <PurpleButton text="invite member" isLoading={isInvitingMember} />
      </form>

      <Link
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <ButtonTransparent text="Go back to members" icon={arrow} />
      </Link>
    </>
  );
};

export default OrganizationInviteMembrePage;
