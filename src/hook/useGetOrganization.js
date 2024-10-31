import { useQuery } from "react-query";
import { getOrganizationDetails } from "../services/apiOrganisations";


export function useGetOrganization(orgId) {
    const {
      data:workflow,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["workflow", orgId],
      queryFn: () => getOrganizationDetails(orgId),
    });
  
    return {workflow, error, isLoading };
  }
  