import { useMutation,useQueryClient } from "react-query";
import { updateUserProfil } from "./apiSettings";
import toast from "react-hot-toast";

export function useUpdateUser(){
    const queryClient=useQueryClient();

    const {mutate : updateUser, isLoading: isUpdating}=useMutation({
        mutationFn:updateUserProfil,
        onSuccess:() =>{
            toast.success("profil updated successfuly")
            queryClient.invalidateQueries({queryKey:["user"]})
        },
        onError:(err) => toast.error(err.message),
    
    })

    return {updateUser , isUpdating}
}