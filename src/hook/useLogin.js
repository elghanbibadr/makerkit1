import { useMutation } from "react-query";
import { Login as LoginApi } from "../services/apiAuth";


export function useLogin() {
  // const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: function () {
      console.log("Success");
      
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { login, isLoading };
}
