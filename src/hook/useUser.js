import getUser from "../services/apiUser";
import { useQuery } from "react-query";

export function useUser(){
    const {isLoading,data:user}=useQuery({
   queryKey:['user'],
   queryFn:getUser
    })

    return {isLoading,user,isAuthenticated:user?.role==='authenticatd'}
}