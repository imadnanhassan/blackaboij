import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [adminData, setAdminData] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('adminToken') ?? null

    if (token) {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/check-admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          console.log(response)
          if (response.data.status === 200) {
            setAdminData(response.data)
          } else {
            setAdminData(false)
          }
        })
        .catch((error) => {
            setAdminData(false)
            console.log(error)
        })
    }

    setLoading(false)
  }, [])

  const data = {
    loading,
    adminData,
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export default AuthProvider
