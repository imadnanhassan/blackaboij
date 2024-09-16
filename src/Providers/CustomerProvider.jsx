import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CustomerContext = createContext()

const CustomerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [customerData, setCustomerData] = useState(null)

  useEffect(() => {
    const verifyCustomer = async () => {
      const storedData = JSON.parse(localStorage.getItem('customerData'))

      if (storedData) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/v1/front/customer-check`,
            {
              headers: { Authorization: `Bearer ${storedData.token}` },
            },
          )
          if (response.status === 200) setCustomerData(storedData)
          else localStorage.removeItem('customerData')
        } catch {
          localStorage.removeItem('customerData')
        }
      }

      setLoading(false)
    }

    verifyCustomer()
  }, [])

  return (
    <CustomerContext.Provider
      value={{
        id: customerData?.customer?.id,
        token: customerData?.token,
        loading,
      }}
    >
      {children}
    </CustomerContext.Provider>
  )
}

export default CustomerProvider
