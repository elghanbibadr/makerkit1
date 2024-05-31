import { useState } from "react";
import Button from "../../../ui/Button";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import { useUpdatePassword } from "../../../hook/useUpdatePassword";
import toast from "react-hot-toast";
import { PurpleButton } from "../../../ui/PurpleButton";


const ProfilPasswordPage = () => {
  const [password, setPassword] = useState("")
  const [repeatedPassword, setRepeatedPassword] = useState("")
  const { updateUserPassword, isUpdating } = useUpdatePassword()



  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!password || !repeatedPassword){
      return  toast.error("please fill out all the inputs")
    }
    if (password !== repeatedPassword) {
     return  toast.error("password are not matched")
    } 

    updateUserPassword(password)
    if(!isUpdating){
      setPassword('')
      setRepeatedPassword('')
    }

  }




  return (
    <div data-aos="fade-up"> 
      <h3 className="text-white"> Password</h3>
      <p className="text-gray-400 mb-10 text-lg font-normal">
        Update your password
      </p>

      <form onSubmit={handleSubmit}>
     

        <Label labelfor="newpassword">
          Your New Password
        </Label>
        <input
          id="newpassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="newpassword"
          type="password"
        />

        <Label labelfor="repeatedpassword">
          Repeat Password
        </Label>
        <input

          id="repeatedpassword"
          name="repeatedpassword"
          type="password"
          onChange={(e) => setRepeatedPassword(e.target.value)}
          value={repeatedPassword}

        />   
      
        <PurpleButton text="Update  Password"  isLoading={isUpdating} />
      </form>
    </div>
  );
};

export default ProfilPasswordPage;
