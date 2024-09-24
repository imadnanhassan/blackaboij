import { FaSpinner } from 'react-icons/fa6'
import { PiCube } from 'react-icons/pi'
import { LuBadgeCheck } from 'react-icons/lu'
import { HiMiniXMark } from 'react-icons/hi2'
import CustomerHead from './CustomerHead'
import { useGetCustomerOrderListQuery } from '../../../redux/features/api/Customer/order'
import { useContext } from 'react'
import { CustomerContext } from '../../../Providers/CustomerProvider'
import CustomerLoader from '../../../common/CustomerLoader/CustomerLoader'

export default function CustomerDashboard() {
  const { customer } = useContext(CustomerContext)
  console.log(customer)
  const { data, isLoading } = useGetCustomerOrderListQuery(
    customer?.currentCustomer.id,
  )



  const orders = data?.orders?.data || []
  const pendingCount = orders.filter(order => order.status === 'pending').length
  const processingCount = orders.filter(
    order => order.status === 'Processing',
  ).length
  const completeCount = orders.filter(
    order => order.status === 'Complete',
  ).length

  const customerDashboardData = [
    {
      id: 1,
      title: 'Total Orders',
      orderNumber: data?.orders?.total,
      icon: <PiCube className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Pending Orders',
      orderNumber: pendingCount,
      icon: <FaSpinner className="w-6 h-6" />,
    },
    {
      id: 3,
      title: 'Completed Orders',
      orderNumber: completeCount,
      icon: <LuBadgeCheck className="w-6 h-6" />,
    },
    {
      id: 4,
      title: 'Cancelled Orders',
      orderNumber: processingCount,
      icon: <HiMiniXMark className="w-6 h-6" />,
    },
  ]
  if (isLoading) {
    return <CustomerLoader />
  }
  return (
    <>
      <CustomerHead title="Dashboard" />

      <>
        <div className="p-4 bg-white  mb-6">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
            {customerDashboardData.map((items, id) => (
              <div key={id} className="border rounded-md">
                <div className="flex items-center justify-center py-3 flex-col gap-3">
                  <div className="bg-[#f2f2f2] h-[60px] w-[60px] place-content-center mx-auto rounded-md flex justify-center items-center">
                    <span>{items.icon}</span>
                  </div>
                  <h3 className="text-[#041826] text-[18px] font-medium">
                    {items.title}
                  </h3>
                  <p className="text-[#0f172a99] text-[24px] font-medium">
                    {' '}
                    {items.orderNumber}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  )
}
