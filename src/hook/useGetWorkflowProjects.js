import { useQuery } from "react-query";
import { getWorkflowProjects } from "../services/apiWorkflowProjects";

export function useGetWorkflowProjects(workflowId) {
    const {
      data: workflowProjects,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["workflowProjects", workflowId],
      queryFn: () => getWorkflowProjects(workflowId),
    });
  
    return { workflowProjects, error, isLoading };
  }
  