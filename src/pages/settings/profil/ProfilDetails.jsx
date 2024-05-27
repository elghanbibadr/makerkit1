import { useEffect, useState } from "react";
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
import { useUploadAvatar } from "../../../hook/useUploadAvatar";



const ProfilDetails = () => {
  const { user,isLoading } = useUser();

  const [userId2,setUserId]=useState('')
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



  useEffect(()=>{
    if(isLoading && user)return
    setUserId(user?.data?.user?.id)
    console.log("loaded",user?.data?.user?.id,user)
  },[isLoading])

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
        userId:"29fcf532-3769-46c3-a103-518bc3a83b92",
        },
      });
      return;
    }
    // UPDATE ONLY THE USER PROFIL NAME OR REMOVE AVATAR SO SETTING IT TO THE CURRENT AVATAR URL
    updateProfil({updatedProfil: {id:id, name: name,email:userEmail, profilImageUrl:avatarURL,userId:"29fcf532-3769-46c3-a103-518bc3a83b92" } });
  };



  return (
    <h1>hello user :{userId2}</h1>
  );
};
export default ProfilDetails;
