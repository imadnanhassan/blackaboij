import { createContext, useState, useEffect } from 'react'

export const CustomerContext = createContext()

const CustomerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [CustomerData, setCustomerData] = useState(null)

  const id = CustomerData?.customer?.id
  const token = CustomerData?.token

  useEffect(() => {
    //   localStorage.setItem('customerData', JSON.stringify(CustomerData))

    //   // Remove customerData from localStorage after 30 days
    //   const expirationDate = new Date(
    //     new Date().getTime() + 30 * 24 * 60 * 60 * 1000
    //   )
    //   localStorage.setItem('expirationDate', expirationDate.toISOString())
    // }, [CustomerData])
    const storedUserData = JSON.parse(localStorage.getItem('customerData'))
    if (storedUserData) {
      setCustomerData(storedUserData)
    }
    setLoading(false)
  }, [])

  const CustomerAuthInfo = {
    id,
    token,
    loading,
  }

  return (
    <CustomerContext.Provider value={CustomerAuthInfo}>
      {children}
    </CustomerContext.Provider>
  )
}

export default CustomerProvider
