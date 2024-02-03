import Button from "../../../ui/Button";
import supabase from "../../../../public/supabase/Supabase";
import { useContext } from "react";
import { AppContext } from "../../../store/AppContext";


const ProfilEmailPage = () => {
  const {session}=useContext(AppContext)

  const email=session?.user?.user_metadata?.email

  console.log(email)

  // const [email,setEmail]=useState("")

  const handleSubmit=async (e)=>{
    e.preventDefault()
    // console.log(name)
  console.log("first")
  try {
    // Update user profile information
    const { data, error } = await supabase.auth.updateUser({
      data: {
        email:"updated@gmail.com",
        // profile_image: newProfileImage,
      },
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
        <div className="mt-4">
          <label className="small-title " htmlFor="newemail">
            Your New Email
          </label>
          <input
            className="input block w-full "
            id="newemail"
            name="newemail"
            type="email"
          />
        </div>
        <div className="mt-6">
          <label className="small-title " htmlFor="repeatedemail">
            Repeat Email
          </label>
          <input
            className="input block w-full "
            id="repeatedemail"
            name="repeatedemail"
            type="email"
          />
        </div>
        <Button className="bg-darkPink mt-5  p-2 rounded-md text-sm">
          Update Email Address
        </Button>
      </form>
    </div>
  );
};

export default ProfilEmailPage;
