import { useState } from "react";
import { PurpleButton } from "../../../ui/PurpleButton";
import ProfilItemCard from "./ProfilItemCard";
import Label from "../../../ui/Label";
import toast from "react-hot-toast";
import { useUpdateEmail } from "../../../hook/useUpdateEmail";

const EmailUpdateCard = () => {
  const { updateUserEmail, isUpdating } = useUpdateEmail();
  const [email, setEmail] = useState("");
  const [repeatedEmail, setRepeatedEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== repeatedEmail) {
      return toast.error(" Emails are not matched ");
    }

    updateUserEmail(email);
  };

  return (
    <ProfilItemCard
      title="Update your Email"
      desc="Update your email address you use to login to your account"
    >
      <form onSubmit={handleSubmit}>
        <Label labelfor="newemail">Your New Email</Label>
        <input
          id="newemail"
          name="newemail"
          type="email"
          value={email}
          disabled={isUpdating}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Label className="small-title " labelfor="repeatedemail">
          Repeat Email
        </Label>
        <input
          id="repeatedemail"
          name="repeatedemail"
          type="email"
          value={repeatedEmail}
          disabled={isUpdating}
          onChange={(e) => setRepeatedEmail(e.target.value)}
          required
        />

        <PurpleButton
          text="Update Email Address"
          isLoading={isUpdating}
          disabled={isUpdating}
        />
      </form>
    </ProfilItemCard>
  );
};

export default EmailUpdateCard;
