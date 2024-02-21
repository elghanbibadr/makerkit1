import Button from "../../../ui/Button";
import { useContext, useEffect, useState,useRef } from "react";
import { AppContext } from "../../../store/AppContext";
import supabase from "../../../../public/supabase/Supabase";
import { supabaseUrl } from "../../../../public/supabase/Supabase";
import { useUpdateUser } from "../../../services/useUpdateUser";
import uploadIcon from "../../../assets/uploadIcon.svg"

// import FileInput from "../../../ui/FileInput";
const ProfilDetails = () => {
  const {session}=useContext(AppContext)

  const fileInputRef=useRef()

  const [name,setName]=useState(session?.user?.user_metadata?.fullName)
  const [avatarURL,setAvatarUrl]=useState("")
  const [selectedAvatarName,setSelectedAvatarName]=useState('')

  const {updateUser,isUpdating}=useUpdateUser()
  const handleFileChange = async (e) => {

    const file = e.target.files[0];
    console.log(file)
    setSelectedAvatarName(file.name)
    // upload the avatar to supabase for testing
    const { data, error } = await supabase.storage
    .from('avatars')
    .upload(file.name, file);

  if (error) {
    console.error('Error uploading image:', error.message);
    return null;
  }else{
    console.log("image uploaded successfuly")
    console.log("data", data)
     const imageUrl1 = `${supabaseUrl}/storage/v1/object/public/avatars/${data.path}`;
      setAvatarUrl(imageUrl1)
  }


  };

  const onChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleSubmit=(e)=>{

    e.preventDefault()

    if(!name)return 
      updateUser({name,avatarURL})
  }


  useEffect(() =>{
    setName(session?.user?.user_metadata?.fullName)

      setAvatarUrl(session?.user?.user_metadata?.avatar)

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
          disabled={isUpdating}
        />
      </div>
      <div className="mt-2">
        <label className="small-title " htmlFor="photo">
          Your Photo
        </label>
        <input
          className="input w-full hidden"
          ref={fileInputRef}
          id="photo"
          name="photo"
          accept="image/*"
          type="file"
          onChange={handleFileChange}
          
          disabled={isUpdating}
          
        /> 

        <span className="block text-gray-400 text-xs input font-semibold" onClick={onChooseFile}>
            {!selectedAvatarName &&  <span>Click here to upload an image </span>}
        {selectedAvatarName && <p>{selectedAvatarName}</p>}
        </span>

        
        <img className="h-6 w-6" src={avatarURL} alt="" />

      </div>
      {/* <CustomFileInput onChange={handleFileChange} /> */}

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
        <Button className="text-xs mt-3  mb-6">Update Email Address</Button>
      </div>
     {!isUpdating && <Button className="bg-darkPink  p-2 px-5 rounded-md text-sm">
        Update profil
      </Button>}
     {isUpdating && <Button className="bg-darkPink  p-2 px-5 rounded-md text-sm">
        Updating...
      </Button>}
     
    </form>
  );
};

export default ProfilDetails;
