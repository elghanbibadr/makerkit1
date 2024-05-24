import { useQuery } from "react-query";
import { getUserProfilDetails } from "../services/apiUser";

export function useGetUserProfilDetails(userId) {
    const {
      data: profilDetails,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["profiles", userId],
      queryFn: () => getUserProfilDetails(userId),
    });
  
    return { profilDetails, error, isLoading };
  }
  