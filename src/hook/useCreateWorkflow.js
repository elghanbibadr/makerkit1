import { useMutation, useQueryClient } from "react-query";
import { createWorkflow as createWorkflowApi} from "../services/apiWorkflow";
import toast from "react-hot-toast";


export function useCreateWorkflow() {
  // const navigate = useNavigate();
  const queryClient = useQueryClient()
  const { mutate: createWorkflow, isCreatingWorkflow } = useMutation({
    mutationFn: (workflowDetails) =>createWorkflowApi(workflowDetails),
    onSuccess: function () {
        queryClient.invalidateQueries('workflow');
       toast.success('workflow created') 
    },


    onError: (err) => {
      console.log(err);
    },
  });

  return { createWorkflow, isCreatingWorkflow };
}
