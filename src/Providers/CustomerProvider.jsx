import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CustomerContext = createContext()

const CustomerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [customer, setCustomer] = useState(false)
  const token = localStorage.getItem('customerToken') ?? null

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/front/customer/customer-check`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(response => {
        if (response?.data?.status == 200) {
          setCustomer(response.data)
        } else {
          setCustomer(false)
        }
        setLoading(false)
      })
      .catch(() => {
        setCustomer(false)
        setLoading(false)
      })
  }, [])

  const data = {
    loading,
    customer,
    setCustomer,
  }

  return (
    <CustomerContext.Provider value={data}>{children}</CustomerContext.Provider>
  )
}

export default CustomerProvider
