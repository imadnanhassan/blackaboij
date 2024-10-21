import React, { useContext, useState } from 'react'
import CustomerHead from './CustomerHead'
import { useGetCustomerOrderListQuery } from '../../../redux/features/api/Customer/order'
import { CustomerContext } from '../../../Providers/CustomerProvider'
import { useFormattedDate } from '../../../hooks/useFormattedDate'

import CustomerOrderDetailsModal from './CustomerOrderDetailsModal'

import Tooltip from '../../../common/Tooltip/Tooltip'
import CustomerLoader from '../../../common/CustomerLoader/CustomerLoader'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { useCancelOrderMutation } from '../../../redux/features/api/cancelOrder/cancelOrder'

export default function CustomerOrder() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const { loading, customer } = useContext(CustomerContext)
  const { data, isLoading } = useGetCustomerOrderListQuery(
    customer?.currentCustomer.id,
  )
  const [cancelOrder] = useCancelOrderMutation()
  const ordersData = data?.orders?.data ?? []
  console.log(ordersData)

  // Calculate total pages
  const totalItems = ordersData.length

  // order cancel
  const handelCancelOrder = async id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to cencel this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cencel it!',
      cancelButtonText: 'Cancel',
    }).then(async result => {
      if (result.isConfirmed) {
        const formData = new FormData()
        formData.append('id', id)
        formData.append('status', 'Cancel')
        const response = await cancelOrder(formData)
        if (response?.data.status === 200) {
          Swal.fire('Success', 'Order Cancel Successfully', 'success')
        } else if (response?.data.status === 404) {
          toast.error(response?.data?.message, {
            position: 'bottom-right',
            autoClose: 3000,
          })
        } else if (response?.data.status === 402) {
          toast.error(response?.data?.message, {
            position: 'bottom-right',
            autoClose: 3000,
          })
        } else if (response?.data.status === 401) {
          response.data.errors.forEach(el =>
            toast.error(el, {
              position: 'bottom-right',
              autoClose: 3000,
            }),
          )
        } else {
          toast.error('Somthing wrong, please try again ', {
            position: 'bottom-right',
            autoClose: 3000,
          })
        }
      }
    })
  }

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

  if (loading && isLoading) {
    return <CustomerLoader />
  }

  return (
    <div>
      <CustomerHead title="My Orders" />

      <div className="p-2 bg-white  mb-6">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className=" min-w-full inline-block align-middle">
              <div className=" overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                {totalItems.length == 0 ? (
                  <p>No items in your Oard list.</p>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 ">
                    <thead className="bg-gray-50 dark:bg-neutral-700">
                      <tr className="">
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs md:text-sm text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs md:text-sm  text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs md:text-sm text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Order Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs md:text-sm text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Payment Method
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs md:text-sm text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Payment Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs md:text-sm  text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      {ordersData?.map((order, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {useFormattedDate(order?.created_at)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {order?.amount}$
                          </td>
                          <td
                            className={`py-2 px-4 text-sm font-medium capitalize ${
                              order?.status === 'Complete'
                                ? ' text-green-700'
                                : order?.status === 'pending'
                                  ? ' text-yellow-400'
                                  : order?.status === 'Shipped'
                                    ? ' text-sky-700'
                                    : order?.status === 'Processing'
                                      ? ' text-purple-700'
                                      : order?.status === 'Cancel'
                                        ? ' text-red-700'
                                        : ''
                            }`}
                          >
                            {order?.status}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {order?.payment_method}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {order?.payment_status == 1 ? "Payment Paid" : "Payment Unpaid"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => openModal(order?.id)}
                                className="focus:outline-none transition-all duration-100 py-2 px-6 rounded-full bg-gray-100 hover:bg-gray-500 text-black hover:text-lightColor"
                              >
                                {/* <FiEye className="text-[12px]" /> */}
                                View
                              </button>
                              <CustomerOrderDetailsModal
                                isOpen={modalOpen}
                                onClose={closeModal}
                                tableData={data}
                                selectedId={selectedId}
                              />

                              {order?.status !== 'pending' ? (
                                <Tooltip text="You can't cancel this Product">
                                  <button
                                    disabled
                                    className="focus:outline-none transition-all duration-300 p-2 px-6 rounded-full bg-[#f43f5e1a] text-[#f43f5e]"
                                  >
                                    Cancel
                                  </button>
                                </Tooltip>
                              ) : (
                                <button
                                  onClick={() => handelCancelOrder(order.id)}
                                  className="focus:outline-none transition-all duration-300 p-2 px-6 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                                >
                                  Cancel
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
