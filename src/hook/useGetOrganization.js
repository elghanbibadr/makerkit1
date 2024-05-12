import { useQuery } from "react-query";
import { getOrganizationDetails } from "../services/apiOrganisations";


export function useGetOrganization(orgId) {
    const {
      data: organizationDetails,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["organizations", orgId],
      queryFn: () => getOrganizationDetails(orgId),
    });
  
    return { organizationDetails, error, isLoading };
  }
  