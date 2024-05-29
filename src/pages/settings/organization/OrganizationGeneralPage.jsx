import { useEffect, useRef, useState } from "react";
import { useUser } from "../../../hook/useUser";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import { useOrganization as useGetOrg } from "../../../hook/useOrganization";
import { supabaseUrl } from "../../../../public/supabase/Supabase";
import toast from "react-hot-toast";
import { useUpdateOrganization } from "../../../hook/useUpdateOrganization";
import UploadImageInput from "../../../ui/UploadImageInput";
import { useUploadAvatar } from "../../../hook/useUploadAvatar";
import { PurpleButton } from "../../../ui/PurpleButton";


const OrganizationGeneralPage = () => {

  const { user }=useUser()

  const userId = user?.data?.user?.id;

  const {organizations,isLoading:isGettingOrgDetails}=useGetOrg(userId)
  const {
    organizationName,
    id:id,
    organizationLogoUrl,
  } = organizations?.organizations[0] || [];

  const [orgName,setOrgName]=useState('')
  const [orgLogoUrl,setOrgLogoUrl]=useState('')
  const [selectedFile, setSelectedFile] = useState(null);


  const {updatingOrgDetails,isUpdating}= useUpdateOrganization()
  const {
    uploadingAvatar,
    isUploading,
    error: uploadingProfilImageError,
  } = useUploadAvatar();
  const profilImagePath = `${supabaseUrl}/storage/v1/object/public/avatars/`;




  useEffect(() => {
    if (isGettingOrgDetails || organizations?.organizations.length===0 ) return;
     setOrgName(organizationName);
      setOrgLogoUrl(organizationLogoUrl);
  }, [isGettingOrgDetails]);



  



  const handleSubmit = async (e) => {
    e.preventDefault()

    // PREVENT UPDATING Org IF THE ORG INFORMATION DOES NOT CHANGED
    if (orgName === organizationName &&  organizationLogoUrl===orgLogoUrl)
      return toast.error("nothing changed");


    // UPLOAD IMAGE TO THE BUCKET IF USER SELECTED A NEW Org IMAGE
    if (selectedFile) {
      console.log("uploading",selectedFile)
      uploadingAvatar({ fileName: selectedFile.name, file: selectedFile });
      // STOP THE UPDATE IF THERE IS AN ERROR UPLOAD THE IMAGE
      if (uploadingProfilImageError && !isUploading) return;

      // setAvatarUrl(`${profilImagePath}${selectedFile.name}`);
      updatingOrgDetails({
        
        newOrgInfo: {
          id:id,
           organizationName:orgName,
           organizationLogoUrl: `${profilImagePath}${selectedFile.name}`,
           orgId:userId
          //  userId,
        },
      });
      return;
    }
    // UPDATE ONLY THE USER Org NAME OR REMOVE AVATAR SO SETTING IT TO THE CURRENT AVATAR URL
    updatingOrgDetails({ newOrgInfo: {id:id, organizationName:orgName,organizationLogoUrl:orgLogoUrl,orgId:userId} });

  }



  return (
    
    <form  onSubmit={handleSubmit} >
      <div className="text-white">
        <h3> General </h3>
        <p className="text-gray-400 text-lg font-normal">
          General Manage your Organization
        </p>
      </div>
      <div className="mt-4">
        <Label className="small-title " labelfor="organizationName">
          Organization Name
        </Label>
        <Input
        
          id="organizationName"
          name="organizationName"
          type="text"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
        />
      </div>

     
           <div className="mt-2">
       

       <UploadImageInput
          avatarURL={orgLogoUrl}
          setAvatarUrl={setOrgLogoUrl}
          isDisabled={isUpdating}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />

     
     </div>
     <PurpleButton
        text="update organization"
        isLoading={isUpdating}
        disabled={isUpdating}
      />
    </form>
  );
}

export default OrganizationGeneralPage
