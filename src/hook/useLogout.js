import { useMutation } from "react-query";

import { logout as logoutApi } from "../services/apiAuth";
import toast from "react-hot-toast";

export function useLogout() {
  const { mutate: logout, isLoading} = useMutation({
    mutationFn: logoutApi,
    onSuccess: function () {
 
      toast.success('logout  succsefuly')
    },
    onError: (err) => {
     toast.error(err.message)
    },
  });

  return { logout,isLoading};
}
