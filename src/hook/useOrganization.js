import { useQuery } from "react-query";
import { getOrgDetails } from "../services/apiOrganisations";


export function useOrganization(userId) {
    const {
      data: organizations,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["organizations", userId],
      queryFn: () => getOrgDetails(userId),
    });
  
    return { organizations, error, isLoading };
  }
  