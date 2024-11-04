import { useQuery } from "react-query";
import { getTasks } from "../services/apiTasks";

export function useTask(projectId) {
  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks", projectId],
    queryFn: () => getTasks(projectId),
  });

  return { tasks, error, isLoading };
}
