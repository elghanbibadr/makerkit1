import { useMutation, useQueryClient } from "react-query";
import { handleInviteAccepted } from "../services/apiMembre";
import toast from "react-hot-toast";


export function useInviteAccepted() {
  // const navigate = useNavigate();
  const queryClient = useQueryClient()
  const { mutate: updateInviteStatus, isLoading } = useMutation({
    mutationFn: (membreEmail) => handleInviteAccepted(membreEmail),
    onSuccess: function () {
        queryClient.invalidateQueries('organizationsMembers')
        // toast.success('accepted')     
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { updateInviteStatus, isLoading };
}
