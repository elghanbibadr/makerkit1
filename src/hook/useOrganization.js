import { useQuery } from "react-query";
import {  getOrganizationDetails } from "../services/apiOrganisations";


export function useOrganization(userId) {
    const {
      data: organizations,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["organizations", userId],
      queryFn: () => getOrganizationDetails(userId),
    });
  
    return { organizations, error, isLoading };
  }
  