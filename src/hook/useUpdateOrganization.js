import { useMutation,useQueryClient } from "react-query";
import { uploadAvatar } from "../services/apiSettings";
import toast from "react-hot-toast";
import { updateOrganization } from "../services/apiOrganisations";

export function useUpdateOrganization(){
    const queryClient = useQueryClient()
    const {mutate : updatingOrgDetails, isLoading: isUpdating}=useMutation({
        mutationFn:({newOrgInfo}) => updateOrganization(newOrgInfo),
        onSuccess: () => {
            queryClient.invalidateQueries('organizations')
            toast.success('org updated ')
        },
        onError:(err) => toast.error(err.message),
        
    })

    return {updatingOrgDetails , isUpdating}
}