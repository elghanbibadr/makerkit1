import { useMutation, useQueryClient } from "react-query";
import { Login as LoginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export function useLogin() {
  const queryClient = useQueryClient()
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: function () {
       queryClient.invalidateQueries("user");
       navigate("/dashboard")
      console.log("Success");
      
    },
    onError: (err) => {
      toast.error(err.message)
    },
  });

  return { login, isLoading };
}
