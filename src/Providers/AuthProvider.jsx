import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [adminData, setAdminData] = useState(false)
  const token = localStorage.getItem('adminToken') ?? null
  const adminCheck = () => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/check-admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log(response)
        setLoading(false)
        if (response.data.status === 200) {
          setAdminData(response.data)
        } else {
          setAdminData(false)
        }
      })
      .catch(error => {
        setAdminData(false)
        setLoading(false)
        console.log(error)
      })
  }

  useEffect(() => {
    adminCheck()
  }, [])

  const data = {
    loading,
    adminData,
    adminCheck,
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export default AuthProvider
