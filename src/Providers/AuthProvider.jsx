import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { baseUrl } from '../hooks/useThumbnailImage'

export const AdminContext = createContext()

export default function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(false)

  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem('adminToken') ?? null
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/admin/check-admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (response.data.status === 200) {
          setAdmin(response.data)
        } else {
          setAdmin(false)
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setAdmin(false)
      })
  }, [])

  const data = {
    loading,
    admin,
    setAdmin,
  }

  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>
}
