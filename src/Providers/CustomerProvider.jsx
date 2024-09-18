import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CustomerContext = createContext()

const CustomerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [customerData, setCustomerData] = useState(false)
  const token = localStorage.getItem('customerToken') ?? null
  console.log(token,'token in customer provider')
  const customerCheck = async () => {
    const response = await axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/v1/front/customer/customer-check`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    return response;
  }
  useEffect(() => {
    const adminResponse = customerCheck();
      adminResponse.then(response => {
        console.log(response,'auth provider data')
        if (response?.data.status == 200) {
          setCustomerData(response.data)
        } else {
          setCustomerData(false)
        }
        setLoading(false)
      }).then(error => {
        console.log(error,'Auth Provider error')
        setCustomerData(false)
        setLoading(false)
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
