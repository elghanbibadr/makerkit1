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
  const { user } = useUser();

  // GETTING THE USER PROFIL DETAILS
  const {
    profilDetails,
    error,
    isLoading: isGettingProfilDetails,
  } = useGetUserProfilDetails(user?.data?.user?.id);
  const {
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

  console.log("avatar url", avatarURL);

  const handleUpdatingUserProfil = async (e) => {
    e.preventDefault();

    // PREVENT UPDATING PROFIL IF THE USER INFORMATION DOES NOT CHANGED
    if (name === userName && profilImageUrl === avatarURL)
      return toast.error("nothing changed");

    // UPLOAD IMAGE TO THE BUCKET IF USER SELECTED A NEW PROFIL IMAGE
    console.log("avatar url  emtpy",!avatarURL)
    if (selectedFile) {
      console.log("avatar url emtpy",avatarURL)
      // uploadingAvatar({ fileName: selectedFile.name, file: selectedFile });
      // STOP THE UPDATE IF THERE IS AN ERROR UPLOAD THE IMAGE
      if (uploadingProfilImageError && !isUploading) return;

      setAvatarUrl(`${profilImagePath}${selectedFile.name}`);
      updateProfil({
        userId,
        updatedProfil: {
          name: name,
          profilImageUrl: `${profilImagePath}${selectedFile.name}`,
        },
      });
      return;
    }
    // UPDATE ONLY THE USER PROFIL NAME OR REMOVE AVATAR SO SETTING IT TO THE CURRENT AVATAR URL
    updateProfil({ userId, updatedProfil: { name: name, profilImageUrl:avatarURL } });
  };

  useEffect(() => {
    if (isGettingProfilDetails) return;
    setName(userName);
    setAvatarUrl(profilImageUrl);
  }, [isGettingProfilDetails]);


  
  return (
    <form onSubmit={handleUpdatingUserProfil} className="text-white ">
      <h3>My Details</h3>
      <p className="text-gray-400 text-lg font-normal">
        Manage your profile details
      </p>
      <div className="mt-4">
        <Label labelfor="name">Name</Label>
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
        <Label labelfor="email">Email Address</Label>
        <Input
          className="input block w-full "
          id="email"
          placeholder={email}
          name="email"
          type="email"
          disabled
        />
        <Link to="/dashboard/settings/profil/email">
          <span className="text-xs mt-6 font-medium w-fit hover:bg-[#17182A] px-4 py-2 rounded-md  block  mb-4">
            Update Email Address
          </span>
        </Link>
      </div>

      <PurpleButton
        text="update profil"
        isLoading={isUpdating}
        disabled={isUpdating}
      />
    </form>
  );
};
export default ProfilDetails;
