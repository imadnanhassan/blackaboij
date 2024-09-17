import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CustomerContext = createContext()

const CustomerProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [customerData, setCustomerData] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('customerToken') ?? null;

    if (token) {


      axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/front/customer/customer-check`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        if (response.data.status === 200) {
          setLoading(false)
          setCustomerData(response.data)
        } else {
          setLoading(false)
          setCustomerData(false)
        }
      }).catch(error => {
        setLoading(false)
      })

      // axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/front/customer-check`).then(response => {

      //   console.log(response,'success')
      //   if(response.data.status === 200){
      //     setCustomerData(true)
      //   }else{
      //     setCustomerData(false)
      //   }
      //   setLoading(false)
      //   // if (response.status === 200) 
      //   // else localStorage.removeItem('customerData')
      // }).catch(error => {

      //   console.log(response,'error')
      //   setLoading(false)
      //   setCustomerData(false)
      // })

    }

  }, [])

  const data = {
    loading,
    customerData
  }

  return (
    <CustomerContext.Provider
      value={data}
    >
      {children}
    </CustomerContext.Provider>
  )
}

export default CustomerProvider
