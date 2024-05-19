import Button from "../../../ui/Button";
import supabase from "../../../../public/supabase/Supabase";
import { useContext, useState } from "react";
import { AppContext } from "../../../store/AppContext";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import { useUser } from "../../../hook/useUser";
import toast from "react-hot-toast";
import { useUpdateEmail } from "../../../hook/useUpdateEmail";
import { PurpleButton } from "../../../ui/PurpleButton";

const ProfilEmailPage = () => {
  const { user } = useUser();
  const userEmail = user?.data.user.email;
  const { updateUserEmail, isUpdating } = useUpdateEmail();
  const [email, setEmail] = useState("");
  const [repeatedEmail, setRepeatedEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== repeatedEmail) {
      return toast.error("oops emails are not matched ");
    }

    if (email === userEmail) {
      return toast.error("email did not changed !");
    }

    updateUserEmail(email);
  };

  return (
    <div className="text-white">
      <h3>Email</h3>
      <p className="text-gray-400 text-lg font-normal">
        Update your email address
      </p>
      <form onSubmit={handleSubmit}>
        <Label labelfor="newemail">Your New Email</Label>
        <Input
          className="input block w-full "
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
        <Input
          className="input block w-full "
          id="repeatedemail"
          name="repeatedemail"
          type="email"
          value={repeatedEmail}
          disabled={isUpdating}
          onChange={(e) => setRepeatedEmail(e.target.value)}
          required
        />

        <PurpleButton
          text="update email adress"
          isLoading={isUpdating}
          disabled={isUpdating}
        />
      </form>
    </div>
  );
};

export default ProfilEmailPage;
