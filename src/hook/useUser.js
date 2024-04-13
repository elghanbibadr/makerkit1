import getUser from "../services/apiUser";
import { useQuery } from "react-query";

export function useUser(){
    const {isLoading,data:user}=useQuery({
   queryKey:['user'],
   queryFn:getUser
    })

    const isAuthenticated=user?.data?.user?.role==='authenticated'

    return {isLoading,user,isAuthenticated}
}