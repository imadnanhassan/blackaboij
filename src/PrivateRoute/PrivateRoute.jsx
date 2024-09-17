import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'

const PrivateRoute = ({ children }) => {
  const {  loading, adminData } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <progress className="progress w-56"></progress>
  }
  if (adminData) {
    return children
  }

  return (
    <Navigate
      to="/dashboard/signin"
      state={{ from: location }}
      replace
    ></Navigate>
  )
}

export default PrivateRoute
