import { useState } from "react";
import Button from "../../../ui/Button";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import { useUpdatePassword } from "../../../hook/useUpdatePassword";


const ProfilPasswordPage = () => {
  const [password, setPassword] = useState("")
  const [repeatedPassword, setRepeatedPassword] = useState("")
  const { updateUserPassword, isUpdating } = useUpdatePassword()



  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!password && !repeatedPassword) return
    if (password !== repeatedPassword) return alert("password are not matched")
    console.log(password === repeatedPassword)
    updateUserPassword(password)

  }




  return (
    <div>
      <h3 className="text-white"> Password</h3>
      <p className="text-gray-400 mb-10 text-lg font-normal">
        Update your password
      </p>

      <form onSubmit={handleSubmit}>
     

        <Label labelfor="newpassword">
          Your New Password
        </Label>
        <Input
          id="newpassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="newpassword"
          type="password"
        />

        <Label labelfor="repeatedpassword">
          Repeat Password
        </Label>
        <Input

          id="repeatedpassword"
          name="repeatedpassword"
          type="password"
          onChange={(e) => setRepeatedPassword(e.target.value)}
          value={repeatedPassword}

        />
   
        <Button className="bg-darkPink mt-5 text-white p-3 rounded-md text-sm">
          Update Password Address
        </Button>
      </form>
    </div>
  );
};

export default ProfilPasswordPage;
