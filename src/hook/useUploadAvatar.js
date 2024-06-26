import { useMutation,useQueryClient } from "react-query";
import { uploadAvatar } from "../services/apiSettings";
import toast from "react-hot-toast";

export function useUploadAvatar(){
    const queryClient=useQueryClient();

    const {mutate : uploadingAvatar, isLoading: isUploading,error}=useMutation({
        mutationFn: ({fileName,file}) => uploadAvatar(fileName,file),
      
        onError:(err) => toast.error(err.message),
        
    
    })

    return {uploadingAvatar , isUploading,error}
}