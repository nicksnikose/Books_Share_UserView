import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectLoggedInUser } from "./authSlice"

const Detected = ({children}) => {
    const user = useSelector(selectLoggedInUser)
    if(user){
        return <Navigate to="/" replace={true}></Navigate>
    }
  return  children
}
export default Detected