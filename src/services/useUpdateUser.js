import { useMutation,useQueryClient } from "react-query";
import { updateUserProfil } from "./apiSettings";
import toast from "react-hot-toast";

export function useUpdateUser(){
    const queryClient=useQueryClient();

    const {mutate : updateProfil, isLoading: isUpdating}=useMutation({
        mutationFn:({updatedProfil }) =>  updateUserProfil(updatedProfil),
        onSuccess:() =>{
            toast.success("profil updated successfuly")
            queryClient.invalidateQueries("profiles")
        },
        onError:(err) => toast.error(err.message),
    
    })

    return {updateProfil , isUpdating}
}