import { useEffect, useState } from "react";
import { useUploadAvatar } from "../../hook/useUploadAvatar";
import { useUpdateUser } from "../../services/useUpdateUser";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import UploadImageInput from "../../ui/UploadImageInput";
import { Link } from "react-router-dom";
import { PurpleButton } from "../../ui/PurpleButton";
import { useUser } from "../../hook/useUser";
import { useGetUserProfilDetails } from "../../hook/useGetProfilDetails";
import toast from "react-hot-toast";
import { supabaseUrl } from "../../../public/supabase/Supabase";
import ProfilItemCard from "./components/ProfilItemCard";

const ProfilePage= () => {
    const { user,isLoading } = useUser();

    // if(isLoading)return ;
   const userEmail=user?.data?.user?.email
    // GETTING THE USER PROFIL DETAILS
    const {
      profilDetails,
      error,
      isLoading: isGettingProfilDetails,
    } = useGetUserProfilDetails(user?.data?.user?.id);
  
    console.log("user id",user?.data?.user.id)
    const {
      id,
      name: userName,
      email,
      profilImageUrl,
    } = profilDetails?.profilDetails[0] || [];
  
  
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const {
      uploadingAvatar,
      isUploading,
      error: uploadingProfilImageError,
    } = useUploadAvatar();
    const [avatarURL, setAvatarUrl] = useState("");
    const userId = user?.data?.user?.id;
    const { updateProfil, isUpdating } = useUpdateUser();
    const profilImagePath = `${supabaseUrl}/storage/v1/object/public/avatars/`;
  
  
  
    useEffect(() => {
      if (isGettingProfilDetails || isLoading) return;
      setName(userName);
      setAvatarUrl(profilImageUrl);
      console.log("useeffeci id",user?.data?.user?.id)   
    }, [isGettingProfilDetails]);
  
  
  
    console.log("selected file",user)
  
    const handleUpdatingUserProfil = async (e) => {
      e.preventDefault();
  
      // PREVENT UPDATING PROFIL IF THE USER INFORMATION DOES NOT CHANGED
      if (name === userName && profilImageUrl === avatarURL)
        return toast.error("nothing changed");
  
      // UPLOAD IMAGE TO THE BUCKET IF USER SELECTED A NEW PROFIL IMAGE
  
      if (selectedFile) {
        console.log("uploading",selectedFile)
        uploadingAvatar({ fileName: selectedFile.name, file: selectedFile });
        // STOP THE UPDATE IF THERE IS AN ERROR UPLOAD THE IMAGE
        if (uploadingProfilImageError && !isUploading) return;
  
        // setAvatarUrl(`${profilImagePath}${selectedFile.name}`);
        updateProfil({
          updatedProfil: {
            id:id,
            name: name,
            profilImageUrl: `${profilImagePath}${selectedFile.name}`,
          userId:userId,
          },
        });
        return;
      }
      // UPDATE ONLY THE USER PROFIL NAME OR REMOVE AVATAR SO SETTING IT TO THE CURRENT AVATAR URL
      updateProfil({updatedProfil: {id:id, name: name,email:userEmail, profilImageUrl:avatarURL,userId:userId } });
    };
  

    
  return (
    <div className="w-[70%]">
      <ProfilItemCard title="Your Profile Picture" desc="Please choose a photo to upload as your profile picture." >
      <UploadImageInput
       avatarURL={avatarURL}
       setAvatarUrl={setAvatarUrl}
       isDisabled={isUpdating}
       selectedFile={selectedFile}
       setSelectedFile={setSelectedFile}
     />
      </ProfilItemCard>

      <ProfilItemCard title="Your Name" desc="Update your name to be displayed on your profile" >
      <Label labelfor="name">Name</Label>
        <Input
          className="text-sm block py-2 w-full "
          id="name"
          name="name"
          value={name}
          placeholder="Profile name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          disabled={isUpdating}
        />
      </ProfilItemCard>
    


    </div>
  
  )
}

export default ProfilePage