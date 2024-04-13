import { useEffect, useRef, useState } from "react";
import { useUser } from "../../../hook/useUser";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import supabase from "../../../../public/supabase/Supabase";
import { useOrganization as useGetOrg } from "../../../hook/useOrganization";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import uploadIcon from "../../../assets/uploadIcon.svg"
import { supabaseUrl } from "../../../../public/supabase/Supabase";
import toast from "react-hot-toast";
import { useUpdateOrganization } from "../../../hook/useUpdateOrganization";


const OrganizationGeneralPage = () => {

  const {user}=useUser()
  // :{organizations}
  const {organizations,isLoading}=useGetOrg(user.data.user.id)

  const [orgName,setOrgName]=useState('')
  const [orgLogoUrl,setOrgLogoUrl]=useState('')
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedAvatarName, setSelectedAvatarName] = useState('')
  const fileInputRef = useRef()
  const {updatingOrgDetails,isUpdating}= useUpdateOrganization()
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
    e.preventDefault()
   console.log('submited')
   if (selectedFile) {
    const { data, error } = await supabase.storage
      .from('organizationsAvatars')
      .upload(selectedFile.name, selectedFile);
    

      if(error){
        console.log(error.message)
        toast.error(error.message)
        return 
      }
      setOrgLogoUrl(`${supabaseUrl}/storage/v1/object/public/organizationsAvatars/${data.path}`)
    }
    const data1= {userId:user?.data.user.id,newOrgInfo:{organizationName:orgName,organizationLogoUrl:orgLogoUrl,orgId:user?.data.user.id}}  

    updatingOrgDetails(data1)

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
      {/* !isUpdating && */}
      { <span>Update Organization</span>}
      {/* {isUpdating &&  <span className="inline-flex h-fit items-center">
          <span>Upaditing Organization</span>
          <LoadingSpinner className='h-1' />
        </span>} */}
      </Button>
    </form>
  );
};

export default OrganizationGeneralPage;
