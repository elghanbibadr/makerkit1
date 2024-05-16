import { useQuery } from "react-query";
import { getTasks,getSingleTask } from "../services/apiTasks";

export function useGetSingleTask(taskId) {
    
  const {
    data: singleTask,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks", taskId],
    queryFn: () => getSingleTask(taskId),
  });

  return { singleTask, error, isLoading };
}
