import { useMutation, useQueryClient } from "react-query";
import { addOrgMembre } from "../services/apiMembre";
import toast from "react-hot-toast";


export function useInviteMembre(showToast) {
  // const navigate = useNavigate();
  const queryClient = useQueryClient()
  const { mutate: inviteMembre, isLoading } = useMutation({
    mutationFn: (membreInfo) => addOrgMembre(membreInfo),
    onSuccess: function () {
        queryClient.invalidateQueries('organizationsMembers')
       {showToast && toast.success('membre invited')}
     
      
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { inviteMembre, isLoading };
}
