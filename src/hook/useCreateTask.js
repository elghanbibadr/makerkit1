import { useMutation } from "react-query";
import { createTask as createTaskApi } from "../services/apiTasks";

export function useCreateTask(){

    const { mutate :createTask, isloading:isCreatingTask,error } = useMutation({
        mutationFn: createTaskApi,
        onSuccess: () => {          
          toast.success("Task successfully created");
          queryClient.invalidateQueries("tasks");
       
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });

      return {createTask , isCreatingTask}
}
