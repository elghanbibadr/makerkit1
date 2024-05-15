import { useEffect } from "react"
import { useUser } from "../hook/useUser"
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()

    const { isLoading , isAuthenticated } = useUser()


    console.log('isAuth', isAuthenticated)
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            navigate('/auth/signin')
        }
    }, [isAuthenticated, isLoading])

    if (isLoading) {
        return <LoadingSpinner className="h-screen" />
    }

    if (isAuthenticated) return children
}

export default ProtectedRoute