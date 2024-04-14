import { useQuery } from "react-query";
import { getOrgMembres } from "../services/apiMembre";


export function useGetMembres(orgId) {
    const {
      data: orgMembres,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["organizationsMembers", orgId],
      queryFn: () => getOrgMembres(orgId),
    });
  
    return { orgMembres, error, isLoading };
  }
  