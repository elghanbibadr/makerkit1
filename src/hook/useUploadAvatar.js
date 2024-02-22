import { useMutation,useQueryClient } from "react-query";
import { uploadAvatar } from "../services/apiSettings";
import toast from "react-hot-toast";

export function useUploadAvatar(){
    const queryClient=useQueryClient();

    const {mutate : uploadingAvatar, isLoading: isUploading}=useMutation({
        mutationFn:uploadAvatar,
      
        onError:(err) => toast.error(err.message),
        onSuccess:(data)=>{
            console.log('successs',data)
        }
    
    })

    return {uploadingAvatar , isUploading}
}