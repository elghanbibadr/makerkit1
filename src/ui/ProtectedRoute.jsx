import { useEffect } from "react"
import { useUser } from "../hook/useUser"
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const navigate=useNavigate()

    const {isLoading,user,isAuthenticated}=useUser()

    useEffect(()=>{
        if(!isLoading && !isAuthenticated){
            navigate('/auth/signin')
        }
    },[isAuthenticated,isLoading])

    if(isLoading){
    return <h1 className="text-red-600 text-4xl">Loading ........</h1>
    }
    console.log('user',user)
  if(isAuthenticated)   return children
}

export default ProtectedRoute