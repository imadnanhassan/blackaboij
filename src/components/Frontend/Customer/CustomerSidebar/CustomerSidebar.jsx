import axios from 'axios'
// import images from '../../../../assets/img/images'
import './CustomerSidebar.css'
import CustomerSidebarMenu from './CustomerSidebarMenu'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CustomerContext } from '../../../../Providers/CustomerProvider'
import { baseUrl } from '../../../../hooks/useThumbnailImage'
import { FaSpinner } from 'react-icons/fa'

export default function CustomerSidebar() {
  const navigate = useNavigate()
  const { loading, customer, setCustomer } = useContext(CustomerContext)
  console.log(customer)

  const token = localStorage.getItem('customerToken') ?? null

  const handleLogout = () => {
    // TODO: Add logout API call
    axios
      .get(`${baseUrl}/api/v1/front/customer/customer-logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (response.data.status === 200) {
          localStorage.removeItem('customerToken')
          setCustomer(false)
          navigate('/signin', { replace: true })
        }
      })
      .catch(() => {
        console.log('Customer logout success')
      })
  }
  if (loading) return (
    <div>
      <FaSpinner className="animate-spin" />
    </div>
  )
  return (
    <div className="lg:block hidden">
      <div className="user_dashboard_nav">
        <div className="close_collapse" id="close_collapse">
          <span>
            <i className="fa-solid fa-xmark" />
          </span>
        </div>
        <div className="user_profile">
          <div className="user_profile_image">
            <img src={customer?.currentCustomer?.photo} alt="" />
          </div>

          <h4 className="user_profile_name">
            {customer?.currentCustomer?.name}
          </h4>
          <h4 className="user_profile_email">
            {customer?.currentCustomer?.email}
          </h4>
        </div>
        <CustomerSidebarMenu handleLogout={handleLogout} />
      </div>
    </div>
  )
}
