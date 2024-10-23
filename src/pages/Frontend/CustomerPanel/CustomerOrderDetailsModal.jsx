import React from 'react'
import { useSelector } from 'react-redux'
import { RxCross1 } from 'react-icons/rx'
import { FaSpinner } from 'react-icons/fa6'
import { useGetCustomerOrderDetailsQuery } from '../../../redux/features/api/orderDetails/orderDetails'
import { LiaDownloadSolid } from 'react-icons/lia'
import Tooltip from '../../../common/Tooltip/Tooltip'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";




export default function CustomerOrderDetailsModal({
  isOpen,
  onClose,
  selectedId,
}) {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const { data, isLoading } = useGetCustomerOrderDetailsQuery(selectedId)
  console.log(data)

  if (isLoading) {
    return <FaSpinner className="animate-spin" />
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5">
          <div className="relative overflow-hidden left-[10px] text-left bg-white rounded shadow w-full lg:w-9/12 p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-[26px] font-bold text-[#0A0A0A] capitalize"
                  id="modal-title"
                >
                  Order Information
                </h3>
                <div>
                  <div className="mt-5 flex  gap-10">
                    <div >
                      <p className={`flex items-center gap-2 pl-3 text-gray-500 pt-1`}>
                        <strong><FaUser></FaUser></strong> {data?.shipping?.name}
                      </p>
                      <p className={`flex items-center gap-2 pl-3 text-gray-500 pt-1`}>
                        <strong><BsFillTelephoneFill /></strong> {data?.shipping?.phone_number}
                      </p>
                    </div>
                    <div className='border-l animate-pulse hover:animate-none ease-in-out'>
                      <p className={`flex items-center gap-2 pl-3 text-gray-500 pt-1`}>
                        <strong><MdEmail /></strong> {data?.shipping?.email}
                      </p>
                      <p className={`flex items-center gap-2 pl-3 text-gray-500 pt-1`}>
                        <strong><IoLocationSharp /></strong> {data?.shipping?.delivery_address}, {data?.shipping?.city}, {data?.shipping?.state} - {data?.shipping?.zip_code}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                {/* <Tooltip text="Print">
                  <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor">
                    <LiaDownloadSolid className=" text-[20px] " />
                  </button>
                </Tooltip> */}

                <button
                  onClick={onClose}
                  className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                >
                  <RxCross1 size={20} />
                </button>
              </div>
            </div>

            <div className="px-3 my-1">
              <div className="py-5">
                <div className="overflow-x-auto">
                  <table
                    id="data-table"
                    className={`min-w-full border  table-auto  ${isDarkMode ? 'border-darkColorBody' : 'border-gray-200 divide-y divide-gray-200'}`}
                  >
                    <thead
                      className={`${isDarkMode ? 'bg-[#131A26]' : 'bg-gray-100'}`}
                    >
                      <tr>
                        <th
                          className={`border-l pl-2 py-3 text-center text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          SL
                        </th>
                        <th
                          className={`border-l pl-2 py-3 text-center text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          PRODUCT
                        </th>
                        <th
                          className={`border-l pl-2 py-3 text-center text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          Amount
                        </th>
                        <th
                          className={`border-l pl-2 py-3 text-center text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          Payment Method
                        </th>
                        <th
                          className={`border-l pl-2 py-3 text-center text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          Payment status
                        </th>

                        <th
                          className={`border-l pl-2 py-3 text-center text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          SIZE
                        </th>

                        <th
                          className={`border-l pl-2 py-3 text-center text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          COLOR
                        </th>
                        <th
                          className={`border-l pl-2 py-3 text-center text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          QTY
                        </th>
                        <th
                          className={`border-l pl-2 py-3 text-center text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          PRICE
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-center ">
                      {data?.orderItems?.map((product, index) => (
                        <tr key={product.id}>
                          <td className="text-center">{index + 1}</td>
                          <td className="border-l pl-2 py-4 whitespace-nowrap flex items-center gap-2">
                            <div
                              className={`w-[50px] h-[50px]  ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                            >
                              <img
                                src={`${import.meta.env.VITE_BASE_URL}/products/${product?.product?.thumbnail_image}`}
                                alt={product?.product?.name}
                                className="w-full p-1 rounded"
                              />
                            </div>
                            <span>
                              <h6
                                className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                              >
                                {product?.product?.name}
                              </h6>
                            </span>
                          </td>

                          <td className="border-l pl-2 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                              {data?.order?.amount}$
                            </span>
                          </td>

                          <td className="border-l pl-2 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                              {data?.order?.payment_method}
                            </span>
                          </td>

                          <td className="border-l pl-2 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                              {data?.order?.payment_status === 0 ? 'Unpaid' : 'Paid'}
                            </span>
                          </td>

                          <td className="border-l pl-2 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                              {product?.size?.name}
                            </span>
                          </td>

                          <td className={`border-l pl-2 py-4 whitespace-nowrap  ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}>
                            <div className='flex justify-center items-center'>
                              <div className={`size-6 rounded-full bg-[${product?.color?.code}]`}></div>
                            </div>
                          </td>

                          <td className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}>
                            {product?.quantity}
                          </td>

                          <td className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}>
                            {product?.product?.price}$
                          </td>
                        </tr>
                      ))}
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
