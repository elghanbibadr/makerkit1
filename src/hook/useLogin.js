import { useMutation } from "react-query";
import { Login as LoginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: function () {
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { login, isLoading };
}
