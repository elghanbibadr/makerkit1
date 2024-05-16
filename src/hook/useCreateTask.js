import { useMutation, useQueryClient } from "react-query";
import { createTask as createTaskApi } from "../services/apiTasks";
import toast from "react-hot-toast";

export function useCreateTask() {
  const queryClient = useQueryClient()

  const { mutate: createTask, isloading: isCreatingTask } = useMutation({
    mutationFn: createTaskApi,
    onSuccess: () => {
      toast.success("Task successfully created");
      queryClient.invalidateQueries("tasks");

    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createTask, isCreatingTask }
}
