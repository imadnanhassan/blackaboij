import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { CustomerContext } from '../Providers/CustomerProvider'

export default function CustomerPrivateRoute({ children }) {
  const location = useLocation()

  const { loading, customer } = useContext(CustomerContext)
  if (loading) {
    return 'loading...'
  }

  if (customer) {
    return children
  }
  return <Navigate to="/signin" state={{ from: location }} replace />
}
