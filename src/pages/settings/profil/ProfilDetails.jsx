import Button from "../../../ui/Button";
import { useContext, useEffect, useState, useRef, Children } from "react";
import { AppContext } from "../../../store/AppContext";
import supabase from "../../../../public/supabase/Supabase";
import { supabaseUrl } from "../../../../public/supabase/Supabase";
import { useUpdateUser } from "../../../services/useUpdateUser";
import uploadIcon from "../../../assets/uploadIcon.svg"
import { Link } from "react-router-dom";
import { useUploadAvatar } from "../../../hook/useUploadAvatar";
import Input from "../../../ui/Input";
import Label from "../../../ui/Label";
import toast from "react-hot-toast";

// import FileInput from "../../../ui/FileInput";
const ProfilDetails = () => {
  const { session } = useContext(AppContext)

  const fileInputRef = useRef()

  const [name, setName] = useState(session?.user?.user_metadata?.fullName)
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatarURL, setAvatarUrl] = useState("")
  const [selectedAvatarName, setSelectedAvatarName] = useState('')
  const { updateUser, isUpdating } = useUpdateUser()
  // const {uploadingAvatar,isUpoading}=useUploadAvatar()


  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    setSelectedFile(file)
    setSelectedAvatarName(file.name)

    const reader = new FileReader();
    reader.onload = () => {
      setAvatarUrl(reader.result);
    };
    reader.readAsDataURL(file);

  }

  const onChooseFile = (e) => {
    if (e.target.getAttribute('data-id') === 'removeAvatar') return
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {

    e.preventDefault()
    if (!name) return
    console.log(selectedFile)
    if (selectedFile) {
      const { data, error } = await supabase.storage
        .from('avatars')
        .upload(selectedFile.name, selectedFile);
      

        if(error){
          console.log(error.message)
          toast.error(error.message)
          return 
        }

      //   console.log(  `path, ${supabaseUrl}/storage/v1/object/public/avatars/${data.path}`)
      // const imageUrl1 = `${supabaseUrl}/storage/v1/object/public/avatars/${data.path}`;
      setAvatarUrl(`${supabaseUrl}/storage/v1/object/public/avatars/${data.path}`)
      updateUser({ name, avatarURL})
      
    }

  }

  useEffect(() => {
    setName(session?.user?.user_metadata?.fullName)
    setAvatarUrl(session?.user?.user_metadata?.avatar)

  }, [session])




  const handleAvatarRemoved = () => {
    setAvatarUrl('')
    setSelectedAvatarName('')
    setSelectedFile(null)
    return
  }



  return (
    <form onSubmit={handleSubmit} className="text-white ">

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
          {avatarURL && <img className="h-6 w-6" src={avatarURL} alt="upload icon " />}
          {<div className="flex items-center gap-3  font-semibold text-gray-500 dark:text-gray-400 [&amp;>*]:mt-[0.35rem] cursor-pointer text-xs">
            {avatarURL === "" && <img className="h-6 w-6" src={uploadIcon} alt="" />}
            {!selectedFile && <span >Click here to upload an image </span>}
          </div>}

          {selectedFile &&
            <p>{selectedAvatarName}</p>
          }

          {avatarURL !== "" && <svg data-id="removeAvatar" onClick={handleAvatarRemoved} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-4 mt-1 hover:border hover:rounded-full cursor-pointer hover:border-[#ccc]"><path data-id="removeAvatar" stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>

          }

        </span>
      </div>
      {/* <CustomFileInput onChange={handleFileChange} /> */}

      <div className="mt-6">
      
        <Label labelfor="email" >
        Email Address
        </Label>
        <Input
          className="input block w-full "
          id="email"
          placeholder="bghanbi50@gmail.com"
          name="email"
          type="email"
          disabled
        />
        <Link to="/dashboard/settings/profil/email">
          <span className="text-xs mt-6 font-medium w-fit hover:bg-[#17182A] px-4 py-2 rounded-md  block  mb-4">Update Email Address</span>
        </Link>

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
