import Button from "../../../ui/Button";
import supabase from "../../../../public/supabase/Supabase";
import { useContext } from "react";
import { AppContext } from "../../../store/AppContext";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";


const ProfilEmailPage = () => {
  const {session}=useContext(AppContext)

  const email=session?.user?.user_metadata?.email

  console.log(email)


  const handleSubmit=async (e)=>{
    e.preventDefault()

  console.log("first2")
  try {
    // Update user profile information
    const { data, error } = await supabase.auth.updateUser({
        email:"gidiyo9412@ricorit.com",
    })




   
    if (error) {
      console.error('Error updating profile:', error.message);
    } else {
      console.log('Profile updated successfully:', data);
      // Optionally, you can handle success, redirect, or perform additional actions
    }
  } catch (error) {
    console.error('Error updating profile:', error.message);
  }

  }

  return (
    <div className="text-white">
      <h3>Email</h3>
      <p className="text-gray-400 text-lg font-normal">
        Update your email address
      </p>
      <form onSubmit={handleSubmit}>
        
          <Label  labelfor="newemail">
            Your New Email
          </Label>
          <Input
            className="input block w-full "
            id="newemail"
            name="newemail"
            type="email"
          />
      
     
          <Label className="small-title " labelfor="repeatedemail">
            Repeat Email
          </Label>
          <Input
            className="input block w-full "
            id="repeatedemail"
            name="repeatedemail"
            type="email"
          />
  
        <Button className="bg-darkPink mt-5  p-2 rounded-md text-sm">
          Update Email Address
        </Button>
      </form>
    </div>
  );
};

export default ProfilEmailPage;
