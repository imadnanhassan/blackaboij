import { LiaDownloadSolid } from 'react-icons/lia'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { FiEye } from 'react-icons/fi'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'

// import Pagination from '../../../common/Pagination/Pagination'
import OrderInformationModal from './OrderInformationModal'
import OrderTrackingBtn from './OrderTrackingBtn'
import { useGetAdminOrderListQuery } from '../../../redux/features/api/Customer/order'
// import React, { useRef } from 'react'
// import html2pdf from 'html2pdf.js'
import AdminLoader from '../../../common/AdminLoader/AdminLoader'

export default function OrderList() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const [selectedStatus, setSelectedStatus] = useState('All')
  const { data: orders, isLoading } = useGetAdminOrderListQuery(selectedStatus)
  // console.log(orders, 'main data')

  // pagination code .
  const itemsPerPage = 10

  const ordersData = orders?.orders?.data ?? []
  console.log(ordersData.length)

  // Calculate total pages
  const totalItems = ordersData.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Function to handle page change
  const handlePageChange = page => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // filtetr
  const handleFilter = e => {
    setSelectedStatus(e.target.value)
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

  if (isLoading) {
    return <AdminLoader />
  }

  const pageTitle = 'Order List'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Order' },
    { title: 'Order List' },
  ]

  return (
    <>
      <section
        className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
      >
        <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />

        <div
          className={`px-5 py-5 rounded  ${isDarkMode ? 'bg-darkColorCard' : 'bg-lightColor'}`}
        >
          <div>
            <div className="pt-3 pb-5">
              <h3
                className={` text-[20px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-bgray-800'}`}
              >
                Filter
              </h3>
            </div>
            <div className="lg:flex items-center  justify-between">
              <div className="mb-4 w-[25%]">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={handleFilter}
                  className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody border text-darkColorText ' : 'bg-lightColor hover:border-gray-400 border-gray-300 border'}`}
                >
                  {/* Vendor options */}
                  <option value={'All'}>All </option>
                  <option value={'Pending'}>Pending</option>
                  <option value={'Processing'}>Processing</option>
                  <option value={'Shipped'}>Shipped</option>
                  <option value={'Complete'}>Complete</option>
                  <option value={'Cancel'}>Cancel</option>
                </select>
              </div>
            </div>
          </div>

          <div className="py-5">
            <div className="pb-[20vh]">
              <table
                id="data-table"
                className={`min-w-full border  table-auto  ${isDarkMode ? 'border-darkColorBody' : 'border-gray-200 divide-y divide-gray-200'}`}
              >
                <thead
                  className={`${isDarkMode ? 'bg-[#131A26]' : 'bg-gray-100'}`}
                >
                  <tr>
                    <th className="p-2 ">SL</th>
                    <th
                      className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Order Code
                    </th>
                    <th
                      className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Customer Name
                    </th>

                    <th
                      className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Amount
                    </th>
                    <th
                      className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Delivery Status
                    </th>
                    <th
                      className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Payment method
                    </th>

                    <th
                      className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Order Tracking
                    </th>
                    <th
                      className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {orders?.orders.data.map((item, index) => (
                    <tr key={index}>
                      <td className="p-2">{++index}</td>
                      <td className="border-l pl-2 py-4 whitespace-nowrap flex gap-2">
                        <h6
                          className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                        >
                          {item?.order_id}
                        </h6>
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item?.customer?.name}
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item?.amount}
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item?.deliveryStatus ? 'bg-[#E8F9EF] text-[#22c55e]' : 'bg-gray-100 text-gray-400'}`}
                        >
                          {item?.status}
                        </span>
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item?.payment_method === 'COD'
                          ? 'Cash On Delivery'
                          : item?.payment_method}
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap flex justify-center ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        <OrderTrackingBtn id={item?.id} status={item?.status} />
                      </td>
                      <td className="border-l pl-2 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => openModal(item?.id)}
                            className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-white border  hover:bg-black text-black hover:text-white"
                          >
                            <FiEye className="text-[12px]" />
                          </button>
                          <OrderInformationModal
                            isOpen={modalOpen}
                            onClose={closeModal}
                            tableData={orders?.orders?.data}
                            selectedId={selectedId}
                          />
                          <button
                            className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-white border text-green-700 hover:bg-black hover:text-white "
                            // onClick={() => adminInvoiceDownload(item?.id)}
                          >
                            <LiaDownloadSolid className="text-[12px]" />
                          </button>
                          <button className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor">
                            <RiDeleteBin7Line className="text-[12px]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* <Pagination /> */}

          {totalItems == 10 ? (
            <>
              {' '}
              <div className="flex gap-3 mt-4 justify-end">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`px-3 py-2 rounded text-white ${currentPage === 1 ? 'bg-red-400 cursor-not-allowed' : 'bg-red-700 cursor-pointer'}`}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                {[...Array(totalPages).keys()].map(page => (
                  <button
                    key={page + 1}
                    onClick={() => handlePageChange(page + 1)}
                    className={`px-3 py-2 rounded text-white ${currentPage === page + 1 ? 'bg-green-600' : 'bg-green-600 cursor-pointer'}`}
                  >
                    {page + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`px-3 py-2 rounded text-white ${currentPage === totalPages ? 'bg-blue-900 cursor-not-allowed' : 'bg-black cursor-pointer'}`}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  )
}
