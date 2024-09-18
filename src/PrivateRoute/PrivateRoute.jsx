import { useContext, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'
import { useDispatch, useSelector } from 'react-redux'
import { setAdmin, toggleLoading } from '../redux/features/api/signin/adminCheck'

const PrivateRoute = ({ children }) => {
  const {  admin, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return 'Loading...'
  }
  if (admin && localStorage.getItem('adminToken')) {
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
