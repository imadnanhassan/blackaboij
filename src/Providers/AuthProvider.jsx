import axios from 'axios'
import { createContext, useState, useEffect } from 'react'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem('adminToken') ?? null;
  console.log(token)
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/check-admin`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      console.log(response,'auth provider data')
      if (response?.data.status == 200) {
        setAdmin(response.data)
      } else {
        setAdmin(false)
      }
      setLoading(false)
    }).catch(error => {
      console.log(error,'auth provider error')
      setLoading(false)
    })
  }, [])
  const data = {
    admin,
    loading
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export default AuthProvider
