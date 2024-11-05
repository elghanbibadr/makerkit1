import { useQuery } from "react-query";
import { getProjectMembers } from "../services/apiMembre";


export function useGetProjectMembers(projectId) {
    const {
      data: projectMembers,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["projectMembers", projectId],
      queryFn: () => getProjectMembers(projectId),
    });
  
    return { projectMembers, error, isLoading };
  }
  