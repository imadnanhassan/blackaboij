import React, { useContext, useEffect, useState } from 'react'
import CustomerHead from './CustomerHead'
import { useGetCustomerOrderListQuery } from '../../../redux/features/api/Customer/order'
import { CustomerContext } from '../../../Providers/CustomerProvider'
import { useFormattedDate } from '../../../hooks/useFormattedDate'
import { FiEye } from 'react-icons/fi'
import { LiaDownloadSolid } from 'react-icons/lia'
import { RiDeleteBin7Line } from 'react-icons/ri'
import CustomerOrderDetailsModal from './CustomerOrderDetailsModal'
import { FaSpinner } from 'react-icons/fa6'

export default function CustomerOrder() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const [orders, setOrders] = useState(undefined)
  const { loading, customer } = useContext(CustomerContext)
  const { data, isLoading } = useGetCustomerOrderListQuery(
    customer?.currentCustomer.id,
  )
  useEffect(() => {
    if (data && !(isLoading && loading)) {
      setOrders(data?.orders?.data ?? [])
    }
  }, [isLoading, loading])
  // if (loading && isLoading) {
  //   return <FaSpinner className="animate-spin" />
  // }
  console.log(orders)

  // const cancelOrder = orderId => {
  //   setOrders(
  //     orders.map(order =>
  //       order.id === orderId ? { ...order, status: 'Cancelled' } : order,
  //     ),
  //   )
  // }

  // open moda
  const openModal = id => {
    setSelectedId(id)
    setModalOpen(true)
  }
  // close modal
  const closeModal = () => {
    setModalOpen(false)
    setSelectedId(null)
  }

  return (
    <div>
      <CustomerHead title="My Orders" />

      <div className="p-2 bg-white  mb-6">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className=" min-w-full inline-block align-middle">
              <div className="border overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        Amount
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>

                  {loading && isLoading ? <FaSpinner className="animate-spin" /> :
                  <tbody className="divide-y divide-neutral-700 ">
                    {orders?.map((order, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          {useFormattedDate(order?.created_at)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {order?.amount}$
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-sm font-medium capitalize ${
                            order?.status === 'Success'
                              ? 'bg-green-100 text-green-700'
                              : order?.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-700'
                                : order?.status === 'Shipped'
                                  ? 'bg-sky-100 text-sky-700'
                                  : order?.status === 'Processing'
                                    ? 'bg-purple-100 text-purple-700'
                                    : order?.status === 'Cancelled'
                                      ? 'bg-red-100 text-red-700'
                                      : ''
                          }`}
                        >
                          {order?.status}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-end text-sm font-medium `}
                        >
                          {/* {order?.status === 'Pending' && (
                            <button
                              onClick={() => cancelOrder(order?.id)}
                              className="text-red-500  rounded"
                            >
                              Cancel
                            </button>
                          )} */}

                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => openModal(order?.id)}
                              className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#eab3081a] hover:bg-[#eab308] text-[#eab308] hover:text-lightColor"
                            >
                              <FiEye className="text-[12px]" />
                            </button>
                            <CustomerOrderDetailsModal
                              isOpen={modalOpen}
                              onClose={closeModal}
                              tableData={data}
                              selectedId={selectedId}
                            />
                            <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor">
                              <LiaDownloadSolid className=" text-[12px] " />
                            </button>
                            <button className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor">
                              <RiDeleteBin7Line className="text-[12px]" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>}
                  
                 
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
