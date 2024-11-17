import { useState } from "react";
import ProfilItemCard from "./ProfilItemCard";
import { useUpdatePassword } from "../../../hook/useUpdatePassword";
import toast from "react-hot-toast";
import Label from "../../../ui/Label";
import { PurpleButton } from "../../../ui/PurpleButton";

const PasswordUpdateCard = () => {
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { updateUserPassword, isUpdating } = useUpdatePassword();
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (password.length < 8) {
        return toast.error("Password must be at least 8 characters long");
      }
    if (password !== repeatedPassword) {
      return toast.error("Passwords are not matched");
    }
     
  
  
    updateUserPassword(password);
    if (!isUpdating) {
      setPassword("");
      setRepeatedPassword("");
    }
  };
  
  return (
    <ProfilItemCard
      title="Update your Password"
      desc="Update your password to keep your account secure."
    >
      <form onSubmit={handleSubmit}>
        <Label labelfor="newpassword">Your New Password</Label>
        <input
          id="newpassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="newpassword"
          type="password"
          required
        />

        <Label labelfor="repeatedpassword">Repeat Password</Label>
        <input
          id="repeatedpassword"
          name="repeatedpassword"
          type="password"
          onChange={(e) => setRepeatedPassword(e.target.value)}
          value={repeatedPassword}
          required
        />

        <PurpleButton text="Update  Password" isLoading={isUpdating} />
      </form>
    </ProfilItemCard>
  );
};

export default PasswordUpdateCard;
