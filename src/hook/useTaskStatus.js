import { useMutation, useQueryClient } from "react-query";
import { markTaskAsDone as markTaskAsDoneApi } from "../services/apiTasks";
import toast from "react-hot-toast";

export function useTaskStatus(){
    const queryClient = useQueryClient()

    const { mutate :changeTaskStatus, isloading: isChangingTaskStatus} = useMutation({
        mutationFn: markTaskAsDoneApi,
        onSuccess: () => {          
          toast.success("Task status changed");
          queryClient.invalidateQueries("tasks");
       
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });

      return {changeTaskStatus , isChangingTaskStatus}
}
