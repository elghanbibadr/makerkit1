import Button from "../../../ui/Button";
import { useContext, useEffect, useState,useRef, Children } from "react";
import { AppContext } from "../../../store/AppContext";
import supabase from "../../../../public/supabase/Supabase";
import { supabaseUrl } from "../../../../public/supabase/Supabase";
import { useUpdateUser } from "../../../services/useUpdateUser";
import uploadIcon from "../../../assets/uploadIcon.svg"
import { useUploadAvatar } from "../../../hook/useUploadAvatar";
import Input from "../../../ui/Input";
// import FileInput from "../../../ui/FileInput";
const ProfilDetails = () => {
  const {session}=useContext(AppContext)

  const fileInputRef=useRef()

  const [name,setName]=useState(session?.user?.user_metadata?.fullName)
  const [avatarURL,setAvatarUrl]=useState("")
  const [selectedAvatarName,setSelectedAvatarName]=useState('')
  const {updateUser,isUpdating}=useUpdateUser()
  const {uploadingAvatar,isUpoading}=useUploadAvatar()


  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file)
    setSelectedAvatarName(file.name)
    // uploadingAvatar(file.name, file);

   const {data,error} = await supabase.storage
    .from('avatars')
    .upload(file.name, file);
    console.log(data.path)
    console.log('data',data)
    const imageUrl1 = `${supabaseUrl}/storage/v1/object/public/avatars/${data.path}`;
    setAvatarUrl(imageUrl1)
}

  const onChooseFile = (e) => {
    if(e.target.getAttribute('data-id')==='removeAvatar')return
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


  const handleAvatarRemoved=()=>{
    setAvatarUrl('')
    setSelectedAvatarName('')
    return 
  }


console.log('avatarUrl', avatarURL)

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
        {/* <input
          className="input block w-full "
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          disabled={isUpdating}
        /> */}
        <Input
         className=" block w-full " 
         id="name"
          name="name"
         value={name} 
         type="text" 
         onChange={(e) => setName(e.target.value)}
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

        <span className="input  flex items-center gap-3 " onClick={onChooseFile}>
      { avatarURL && <img className="h-6 w-6" src={avatarURL} alt="upload icon " />}
            {!selectedAvatarName && <div className="flex items-center gap-3  font-semibold text-gray-500 dark:text-gray-400 [&amp;>*]:mt-[0.35rem] cursor-pointer text-xs">
                     { avatarURL ==="" && <img className="h-6 w-6" src={uploadIcon} alt="" />}
              <span >Click here to upload an image </span>
            </div>}
   
        {selectedAvatarName && 
          <p>{selectedAvatarName}</p>
        }
        
       {avatarURL !=="" && <svg  data-id="removeAvatar" onClick={handleAvatarRemoved} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 mt-1 hover:border hover:rounded-full cursor-pointer hover:border-[#ccc]"><path data-id="removeAvatar" stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>
        
}
     
        </span>
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
