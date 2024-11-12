import { useQuery } from "react-query";
import { getWorkflow } from "../services/apiWorkflow";

export function useGetWorkflow(userId) {
    const {
      data:workflow,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["workflow", userId],
      queryFn: () => getWorkflow(userId),
    });
  
    return {workflow, error, isLoading };
  }
  