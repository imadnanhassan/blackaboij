import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CustomerContext = createContext()

const CustomerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [customer, setCustomer] = useState(false)
  const token = localStorage.getItem('customerToken') ?? null
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/front/customer/customer-check`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => {
        console.log(response, 'customer provider')
        if (response?.data?.status == 200) {
          console.log('this is true data')
          setCustomer(response.data)
        } else {
          console.log('this is false data')
          setCustomer(false)
        }
        setLoading(false)
      }).catch(error => {
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
