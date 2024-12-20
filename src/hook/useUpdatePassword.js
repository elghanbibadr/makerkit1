import { useMutation} from "react-query";
import toast from "react-hot-toast";
import { updatePassword } from "../services/apiSettings";


export function useUpdatePassword(){


  const {mutate:updateUserPassword, isLoading: isUpdating}=useMutation({
    mutationFn:updatePassword,
    onSuccess:() =>{
        toast.success("password Updated Successfully")
    },
    onError:(err) => toast.error(err.message),

})

    return {updateUserPassword, isUpdating}
}