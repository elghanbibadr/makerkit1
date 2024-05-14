import { useMutation,useQueryClient } from "react-query";
import { UpdateUserEmail as UpdateUserEmailApi } from "../services/apiUser";
import toast from "react-hot-toast";

export function useUpdateEmail(){
    const queryClient=useQueryClient();

    const {mutate : updateUserEmail, isLoading: isUpdating}=useMutation({
        mutationFn:UpdateUserEmailApi,
        onSuccess:() =>{
            toast.success("we have sent you an email to the new email adress for confirmation")
            queryClient.invalidateQueries("user")
        },
        onError:(err) => toast.error(err.message),
    
    })

    return {updateUserEmail , isUpdating}
}