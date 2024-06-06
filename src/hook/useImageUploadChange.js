export default function useImageUploadChange(){
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
          console.log('file',file)
        setSelectedFile(file)
        setSelectedAvatarName(file.name)
    
        const reader = new FileReader();
        reader.onload = () => {
          setAvatarUrl(reader.result);
        };
        reader.readAsDataURL(file);
    
      }
}