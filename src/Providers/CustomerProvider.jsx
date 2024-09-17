import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CustomerContext = createContext()

const CustomerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [customerData, setCustomerData] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('customerToken') ?? null

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
        if (response.data.status === 200) {
          setLoading(false)
          setCustomerData(response.data)
        } else {
          setLoading(false)
          setCustomerData(false)
        }
      })
      .catch(() => {
        setLoading(false)
        setCustomerData(false)
      })
  }, [])

  const data = {
    loading,
    customerData,
  }

  return (
    <CustomerContext.Provider value={data}>{children}</CustomerContext.Provider>
  )
}

export default CustomerProvider
