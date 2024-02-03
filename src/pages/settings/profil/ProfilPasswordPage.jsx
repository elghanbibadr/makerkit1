import Button from "../../../ui/Button";
import supabase from "../../../../public/supabase/Supabase";
import { useState } from "react";

const ProfilPasswordPage = () => {
  const [password,setPassword]=useState("")
  const [repeatedPassword,setRepeatedPassword]=useState("")



  const handleSubmit=async (e)=>{
    console.log(password,repeatedPassword)

    e.preventDefault()

    if (!password && !repeatedPassword)return 
    if(password !== repeatedPassword)return alert("password are not matched")

    console.log(password === repeatedPassword)
    try{

     const {data,error}= await supabase.auth.updateUser({ password: password })
     if (error) {
      console.error('Error updating profile:', error.message);
    } else {
      console.log('Profile updated successfully:', data);
    }
    }catch(e){
      console.log(e.message)
    }


  }
  return (
    <div>
      <div>
        <h3 className="text-white"> Password</h3>
        <p className="text-gray-400 text-lg font-normal">
          Update your password
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="small-title " htmlFor="newpassword">
            Your New Password
          </label>
          <input
            className="input block w-full "
            id="newpassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="newpassword"
            type="password"
          />
        </div>
        <div className="mt-6">
          <label className="small-title " htmlFor="repeatedpassword">
            Repeat Password
          </label>
          <input
            className="input block w-full "
            id="repeatedpassword"
            name="repeatedpassword"
            type="password"
            onChange={(e) => setRepeatedPassword(e.target.value)}
            value={repeatedPassword}

          />
        </div>
        <Button className="bg-darkPink mt-5 text-white p-3 rounded-md text-sm">
          Update Password Address
        </Button>
      </form>
    </div>
  );
};

export default ProfilPasswordPage;
