import { useQuery } from "react-query";
import { getTasks } from "../services/apiTasks";

export function useTask(userId) {
  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks", userId],
    queryFn: () => getTasks(userId),
  });

  return { tasks, error, isLoading };
}
