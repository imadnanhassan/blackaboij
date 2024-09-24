import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AdminContext } from '../Providers/AuthProvider'
import Loader from '../common/Loader/Loader'

const PrivateRoute = ({ children }) => {
  const location = useLocation()

  const { admin, loading } = useContext(AdminContext)
  if (loading) {
    return <Loader lable="Loading" />
  }
  console.log(admin, 'private route')
  if (admin) {
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
