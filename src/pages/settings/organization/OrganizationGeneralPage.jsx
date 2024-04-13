import { useEffect, useRef, useState } from "react";
import { useUser } from "../../../hook/useUser";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import supabase from "../../../../public/supabase/Supabase";
import { useOrganization } from "../../../hook/useOrganization";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import uploadIcon from "../../../assets/uploadIcon.svg"

const OrganizationGeneralPage = () => {

  const {user}=useUser()
  // :{organizations}
  const {organizations,isLoading}=useOrganization(user.data.user.id)

  const [orgName,setOrgName]=useState('')
  const [orgLogoUrl,setOrgLogoUrl]=useState('')
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedAvatarName, setSelectedAvatarName] = useState('')
  const fileInputRef = useRef()

  // console.log('useruserorg',organizations?.organizations)


  useEffect(() => {
    if (!isLoading && organizations && organizations.organizations.length > 0) {
      // Assuming you want to set orgName to the first organization's name
      setOrgName(organizations.organizations[0].organizationName);
      setOrgLogoUrl(organizations.organizations[0].organizationLogoUrl);

    }
  }, [isLoading, organizations]);

  
  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    setSelectedFile(file)
    setSelectedAvatarName(file.name)

    const reader = new FileReader();
    reader.onload = () => {
      setOrgLogoUrl(reader.result);
    };
    reader.readAsDataURL(file);

  }
  const onChooseFile = (e) => {
    if (e.target.getAttribute('data-id') === 'removeAvatar') return
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
   console.log('submited')
  }

  const handleAvatarRemoved = () => {
    setOrgLogoUrl('')
    setSelectedAvatarName('')
    setSelectedFile(null)
    return
  }

  return (
    <form onSubmit={handleSubmit}>
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

      {/* <div className="mt-6">
        <Label className="small-title " labelfor="organizationlogo" >
          Organization Logo
        </Label>
        <Input
         
          id="organizationlogo"
          name="organizationlogo"
          type="file"
        />
      </div> */}
           <div className="mt-2">
       
       {/* <Label labelfor="photo">Your Photo</Label> */}
       <input
         className="input w-full hidden"
         ref={fileInputRef}
         id="photo"
         name="photo"
         accept="image/*"
         type="file"
         onChange={handleFileChange}

        //  disabled={isUpdating}

       />

       <span className="input  flex items-center gap-3 " onClick={onChooseFile}>
         {orgLogoUrl && <img className="h-6 w-6" src={orgLogoUrl} alt="upload icon " />}
         {<div className="flex items-center gap-3  font-semibold text-gray-500 dark:text-gray-400 [&amp;>*]:mt-[0.35rem] cursor-pointer text-xs">
           {orgLogoUrl === "" && <img className="h-6 w-6" src={uploadIcon} alt="" />}
           {!selectedFile && <span >Click here to upload an image </span>}
         </div>}

         {selectedFile &&
           <p>{selectedAvatarName}</p>
         }

          {orgLogoUrl !== "" && <svg data-id="removeAvatar" onClick={handleAvatarRemoved} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 mt-1 hover:border hover:rounded-full cursor-pointer hover:border-[#ccc]"><path data-id="removeAvatar" stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg> }

         

       </span>
     </div>
      <Button className="bg-darkPink mt-5 text-white p-3 rounded-md text-sm">
        Update Organization
      </Button>
    </form>
  );
};

export default OrganizationGeneralPage;
