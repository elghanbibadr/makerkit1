import { useMutation, useQueryClient } from "react-query";
import { SignUp as SignUpApi } from "./apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export function useSignUp() {
  const queryClient = useQueryClient()
  const navigate = useNavigate();

  const { mutate: SignUp, isLoading:isSigninUp } = useMutation({
    mutationFn: ({ email, password }) => SignUpApi({ email, password }),
    onSuccess: function () {
       queryClient.invalidateQueries("user");
       navigate("/onboarding") 
    },     
    onError: (err) => {
      toast.error(err.message)
    },
  });

  return { SignUp, isSigninUp };
}
