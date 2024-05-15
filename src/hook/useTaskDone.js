import { useMutation, useQueryClient } from "react-query";
import { markTaskAsDone as markTaskAsDoneApi } from "../services/apiTasks";
import toast from "react-hot-toast";

export function useTaskDone(){
    const queryClient = useQueryClient()

    const { mutate :markTaskDone, isloading:isMarkingTaskDone } = useMutation({
        mutationFn: markTaskAsDoneApi,
        onSuccess: () => {          
          toast.success("Task marked as done");
          queryClient.invalidateQueries("tasks");
       
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });

      return {markTaskDone , isMarkingTaskDone}
}
