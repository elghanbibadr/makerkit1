import { useMutation, useQueryClient } from "react-query";

import { logout as logoutApi } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
const navigate=useNavigate()
const queryClient = useQueryClient()

  const { mutate: logout, isLoading} = useMutation({
    mutationFn: logoutApi,
    onSuccess: function () {
      queryClient.invalidateQueries("user");
      
      navigate('/',{replace:true})
      toast.success('Logout successful');
    },
    onError: () => {
      toast.error("Error logging you out. Please try again later.");
    },
  });

  return { logout,isLoading};
}
