import { useEffect, useState } from "react";
import supabase from "../../../../public/supabase/Supabase";
import { supabaseUrl } from "../../../../public/supabase/Supabase";
import { useUpdateUser } from "../../../services/useUpdateUser";
import { Link } from "react-router-dom";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import toast from "react-hot-toast";
import { PurpleButton } from "../../../ui/PurpleButton";
import { useGetUserProfilDetails } from "../../../hook/useGetProfilDetails";
import { useUser } from "../../../hook/useUser";
import UploadImageInput from "../../../ui/UploadImageInput";

const ProfilDetails = () => {

  const {user }=useUser()

  // GETTING THE USER PROFIL DETAILS
 const  { profilDetails, error, isLoading:isGettingProfilDetails }=useGetUserProfilDetails(user?.data?.user?.id)
  const {name:userName,email,profilImageUrl}=profilDetails?.profilDetails[0] || []
  const [name, setName] = useState("")
  const [selectedFile, setSelectedFile] = useState(null);
  
  const [avatarURL,setAvatarUrl]=useState('')
  const { updateProfil, isUpdating } = useUpdateUser()
  


  console.log('selected file',selectedFile)
  console.log('avatar url',avatarURL)


  const handleUpdatingUserProfil = async (e) => {

    e.preventDefault()
  
    console.log('clicked')
    // PREVENT UPDATING PROFIL IF THE USER INFORMATION DOES NOT CHANGED
    // if(name===userName && profilImageUrl===avatarURL)return toast.error('nothing changed')
    if (selectedFile) {
      const { data, error } = await supabase.storage
        .from('avatars')
        .upload(selectedFile.name, selectedFile);
      

        if(error){
          console.log(error.message)
          toast.error( 'cannot upload profil image ' + error.message)
          return 
        }

      // const imageUrl1 = `${supabaseUrl}/storage/v1/object/public/avatars/${data.path}`;
      setAvatarUrl(`${supabaseUrl}/storage/v1/object/public/avatars/${data.path}`)
      updateProfil({userId:user?.data?.user?.id,updatedProfil:{name:name,profilImageUrl:`${supabaseUrl}/storage/v1/object/public/avatars/${data.path}`}})
      
    }

  }

  useEffect(() => {
  if(isGettingProfilDetails)return
    setName(userName)
    setAvatarUrl(profilImageUrl)

  }, [isGettingProfilDetails])



  return (
    <form onSubmit={handleUpdatingUserProfil} className="text-white ">

      <h3>My Details</h3>
      <p className="text-gray-400 text-lg font-normal">
        Manage your profile details
      </p>
      <div className="mt-4">
        {/* <label className="small-title " htmlFor="name">
          Name
        </label> */}
        <Label labelfor="name"  >
          Name
        </Label>
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
        <Label labelfor="photo">Your Photo</Label>   
        <UploadImageInput 
         avatarURL={avatarURL}
         setAvatarUrl={setAvatarUrl}
         isDisabled={isUpdating}
         selectedFile={selectedFile} 
        setSelectedFile={setSelectedFile}
        />
      </div>

      <div className="mt-6">
      
        <Label labelfor="email" >
        Email Address
        </Label>
        <Input
          className="input block w-full "
          id="email"
          placeholder={email}
          name="email"
          type="email"
          disabled
        />
        <Link to="/dashboard/settings/profil/email">
          <span className="text-xs mt-6 font-medium w-fit hover:bg-[#17182A] px-4 py-2 rounded-md  block  mb-4">Update Email Address</span>
        </Link>

      </div>
     
      <PurpleButton text='update profil' isLoading={isUpdating} disabled={isUpdating} />

    </form>
  );

};
export default ProfilDetails;
