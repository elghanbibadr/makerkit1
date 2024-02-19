import Button from "../../../ui/Button";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../store/AppContext";
import supabase from "../../../../public/supabase/Supabase";


const imgurl='https://images.unsplash.com/photo-1682685797439-a05dd915cee9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
const ProfilDetails = () => {
  const {session}=useContext(AppContext)
 
  const avatar=session?.user?.user_metadata?.avatar

  const [name,setName]=useState("")

  const handleFileChange = async (e) => {

    const file = e.target.files[0];
    console.log(file)
    // upload the avatar to supabase for testing
    const { data, error } = await supabase.storage
    .from('avatars')
    .upload('image1', file);

  if (error) {
    console.error('Error uploading image:', error.message);
    return null;
  }else{
    console.log("image uploaded successfuly")
  }



    // const file = e.target.files[0];
    // console.log(file)
    // const reader = new FileReader();

    // reader.onload = () => {
    //   console.log(reader.result)
    //   // setImageUrl(reader.result);
    // };

    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  };


  console.log('avatar',avatar)

  const handleSubmit=async (e)=>{
    e.preventDefault()

  try {
    // Update user profile information
    const { data, error } = await supabase.auth.updateUser({
      data: {
        fullName: name,
        avatar:imgurl
      },
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
          accept="image/*"
          type="file"
          onChange={handleFileChange}
          
        />
        <img className="h-6 w-6" src={avatar} alt="" />
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
