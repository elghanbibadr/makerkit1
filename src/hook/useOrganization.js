import { useQuery } from "react-query";
import {  getOrganizationDetails } from "../services/apiOrganisations";


export function useOrganization(userId) {
    const {
      data: workflow,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["workflow", userId],
      queryFn: () => getOrganizationDetails(userId),
    });
  
    return { workflow, error, isLoading };
  }
  