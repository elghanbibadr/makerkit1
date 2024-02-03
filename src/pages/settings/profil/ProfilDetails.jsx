import Button from "../../../ui/Button";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../store/AppContext";
import supabase from "../../../../public/supabase/Supabase";

const ProfilDetails = () => {
  const {session}=useContext(AppContext)
  // const userName=session?.user?.user_metadata.full_name  
  // const userName=session?.user?.user_metadata?.fullName
  const avatar=session?.user?.user_metadata?.avatar_url

  const [name,setName]=useState("")

// console.log("user name", userName)

  const handleSubmit=async (e)=>{
    e.preventDefault()
    console.log(name)
  console.log("first")
  try {
    // Update user profile information
    const { data, error } = await supabase.auth.updateUser({
      data: {
        fullName: name,
        // profile_image: newProfileImage,
      },
      // password: newPassword, 
    });

   
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
  console.log('session',session)


  useEffect(() =>{
    setName(session?.user?.user_metadata?.fullName)
  },[session])


  return (
    <form onSubmit={handleSubmit} className="text-white ">
      <h3>My Details</h3>
      <p className="text-gray-400 text-lg font-normal">
        Manage your profile details
      </p>
      <div className="mt-4">
        <label className="small-title " htmlFor="name">
          Name
        </label>
        <input
          className="input block w-full "
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <div className="mt-2">
        <label className="small-title " htmlFor="photo">
          Your Photo
        </label>
        <input
          className="input block w-full "
          id="photo"
          name="photo"
          type="file"
          
        />
        <img src={avatar} alt="" />
      </div>
      <div className="mt-6">
        <label className="small-title " htmlFor="email">
          Email Address
        </label>
        <input
          className="input block w-full "
          id="email"
          placeholder="bghanbi50@gmail.com"
          name="email"
          type="email"
          disabled
        />
        <Button className="text-xs mt-3 mb-6">Update Email Address</Button>
      </div>
      <Button className="bg-darkPink  p-2 rounded-md text-sm">
        Update profil
      </Button>
    </form>
  );
};

export default ProfilDetails;
