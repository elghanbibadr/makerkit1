import { useMutation,useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { deleteOrgMembre } from "../services/apiMembre";

export function useDeleteMembre(){
    const queryClient = useQueryClient()
    const {mutate : deletingOrgMembre, isLoading: isDeleting}=useMutation({
        mutationFn:(membreId) => deleteOrgMembre(membreId),
        onSuccess: () => {
            queryClient.invalidateQueries('organizationsMembers')
            document.getElementById('my_modal_6').checked=false
            toast.success('Invite deleted  ')
        },
        onError:(err) => toast.error(err.message),
        
    })

    return {deletingOrgMembre , isDeleting}
}