import { FaSpinner } from 'react-icons/fa6'
import { PiCube } from 'react-icons/pi'
import { LuBadgeCheck } from 'react-icons/lu'
import { HiMiniXMark } from 'react-icons/hi2'
import WelcomeMessage from '../../../common/WelcomeMessage/WelcomeMessage'
import CustomerHead from './CustomerHead'

export default function CustomerDashboard() {
  const customerDashboardData = [
    {
      id: 1,
      order: 'Total Orders',
      orderNumber: '110',
      icon: <PiCube className="w-6 h-6" />,
    },
    {
      id: 2,
      order: 'Pending Orders',
      orderNumber: '25',
      icon: <FaSpinner className="w-6 h-6" />,
    },
    {
      id: 3,
      order: 'Completed Orders',
      orderNumber: '80',
      icon: <LuBadgeCheck className="w-6 h-6" />,
    },
    {
      id: 4,
      order: 'Cancelled Orders',
      orderNumber: '5',
      icon: <HiMiniXMark className="w-6 h-6" />,
    },
  ]
  const isNewCustomer = true
  const customerName = 'Miss. Lamiya'
  return (
    <>
      <CustomerHead title="Dashboard" />

      <>
        <div className="p-4 bg-white rounded-xl mb-6">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
            {customerDashboardData.map((items, id) => (
              <div key={id} className="border rounded-md">
                <div className="flex items-center justify-center py-3 flex-col gap-3">
                  <div className="bg-[#f2f2f2] h-[60px] w-[60px] place-content-center mx-auto rounded-md flex justify-center items-center">
                    <span>{items.icon}</span>
                  </div>
                  <h3 className="text-[#041826] text-[18px] font-medium">
                    Total Orders
                  </h3>
                  <p className="text-[#0f172a99] text-[24px] font-medium">5</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <WelcomeMessage
          customerName={customerName}
          isNewCustomer={isNewCustomer}
        />
      </>
    </>
  )
}
