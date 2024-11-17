import React, { useRef, useState } from "react";
import uploadIcon from "../assets/uploadIcon.svg";

const UploadImageInput = ({ avatarURL, setAvatarUrl, isDisabled ,setSelectedFile,selectedFile}) => {
  const [selectedAvatarName, setSelectedAvatarName] = useState("");
  const fileInputRef = useRef();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    setSelectedFile(file);
    setSelectedAvatarName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      setAvatarUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onChooseFile = (e) => {
    if (e.target.getAttribute("data-id") === "removeAvatar") return;
    fileInputRef.current.click();
  };

  const handleAvatarRemoved = () => {
    setAvatarUrl("");
    setSelectedAvatarName("");
    setSelectedFile(null);
  };


  console.log("avatar url",avatarURL)

  return (
    <>
      <input
        className="input w-full hidden"
        ref={fileInputRef}
        id="photo"
        name="photo"
        accept="image/*"
        type="file"
        onChange={handleFileChange}
        disabled={isDisabled}
      />

      <span className="input  flex items-center gap-3 " onClick={onChooseFile}>
        {avatarURL && (
          <img className="h-6 w-6" src={avatarURL} alt="upload icon " />
        )}
        {
          <div className="flex items-center gap-3  font-semibold text-gray-500 dark:text-gray-400 [&amp;>*]:mt-[0.35rem] cursor-pointer text-xs">
            {!avatarURL  && (
              <img className="h-6  w-6 " src={uploadIcon} alt="" />
            )}
            {!selectedFile && <span>Click here to upload an image </span>}
          </div>
        }

        {selectedFile && <p>{selectedAvatarName}</p>}

        {avatarURL  && (
          <svg
            data-id="removeAvatar"
            onClick={handleAvatarRemoved}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-4 mt-1 hover:border hover:rounded-full cursor-pointer hover:border-[#ccc]"
          >
            <path
              data-id="removeAvatar"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        )}
      </span>
    </>
  );
};

export default UploadImageInput;
