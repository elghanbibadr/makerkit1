import getUser from "../services/apiUser";
import { useQuery } from "react-query";

export function useUser() {
    const { data: user, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getUser
    })


    

    // if(isLoading) return 
    const isAuthenticated = user?.data?.user?.role === 'authenticated'
    return { isLoading, isAuthenticated,user }
}