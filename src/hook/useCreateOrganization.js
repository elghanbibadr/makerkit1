import { useMutation, useQueryClient } from "react-query";
import { addOrgMembre } from "../services/apiMembre";
import toast from "react-hot-toast";
import { createOrganization as createOrganizationApi } from "../services/apiOrganisations";


export function useCreateOrganization(showToast) {
  // const navigate = useNavigate();
  const queryClient = useQueryClient()
  const { mutate: createOrganization, isCreatingOrganization } = useMutation({
    mutationFn: (orgDetails) =>createOrganizationApi(orgDetails),
    onSuccess: function () {
        queryClient.invalidateQueries('organizations')
      {showToast && toast.success('organization created') } 
    },


    onError: (err) => {
      console.log(err);
    },
  });

  return { createOrganization, isCreatingOrganization };
}
