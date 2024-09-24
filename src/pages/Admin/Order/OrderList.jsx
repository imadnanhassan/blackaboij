import { LiaDownloadSolid } from 'react-icons/lia'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { FiEye } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'

import Pagination from '../../../common/Pagination/Pagination'
import OrderInformationModal from './OrderInformationModal'
import OrderTrackingBtn from './OrderTrackingBtn'
import { useGetAdminOrderListQuery } from '../../../redux/features/api/Customer/order'
import React, { useRef } from 'react'
import html2pdf from 'html2pdf.js'
import AdminLoader from '../../../common/AdminLoader/AdminLoader'

export default function OrderList() {
  const [data, setData] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const [downloadInvoice, setDownloadInvoice] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('All')
  const invoiceRef = useRef()

  const { data: orders, isLoading } = useGetAdminOrderListQuery(selectedStatus)
  useEffect(() => {
    if (orders && !isLoading) {
      setData(orders?.orders?.data)
    }
    return () => setData([])
  }, [isLoading, selectedStatus, orders])

  const isDarkMode = useSelector(state => state.theme.isDarkMode)

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

  const pageTitle = 'Order List'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Order' },
    { title: 'Order List' },
  ]

  const adminInvoiceDownload = id => {
    alert(`Downloading invoice for ID: ${id}`)
    setDownloadInvoice(true)

    // Generate PDF
    const element = invoiceRef.current
    const options = {
      margin: 0.5,
      filename: `invoice_${id}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    }

    html2pdf().from(element).set(options).save()
  }

  if (isLoading) {
    return <AdminLoader />
  }

  console.log(downloadInvoice)

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
                  {data?.map((item, index) => (
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
                            tableData={data}
                            selectedId={selectedId}
                          />
                          <button
                            className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-white border text-green-700 hover:bg-black hover:text-white "
                            onClick={() => adminInvoiceDownload(item?.id)}
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

              {/* admin invoice form , admin can download each product invoice */}
              <div className="hidden">
                <div ref={invoiceRef}>
                  <div>
                    <div className="flex justify-between items-start pb-4 ">
                      <div>
                        <h1 className="text-2xl font-bold">Invoice #1234</h1>
                        <p className="text-xs">January 1, 2025</p>
                      </div>
                      <img
                        src="https://i.ibb.co/3sNL27c/logo.png"
                        className="w-[85px] h-[15px] grayscale-0"
                        alt=""
                      />
                    </div>

                    <div className="h-px bg-gray-300 my-4" />

                    {/* Billing Information */}
                    <div className="flex justify-between">
                      <div>
                        <p className="p-0 mb-1">
                          <b>Bill to:</b>
                        </p>
                        <p className="p-0 mb-1">Titouan LAUNAY</p>
                        <p className="p-0 mb-1">72 Faxcol Dr Gotahm City,</p>
                        <p className="p-0 mb-1">NJ 12345,</p>
                        <p className="p-0 mb-1">United States of America</p>
                      </div>
                      {/* Company Information */}
                      <div className="">
                        <p className="p-0 mb-1">
                          <b>Blackaboij</b>
                        </p>
                        <p className="p-0 mb-1">1600 Pennsylvania Avenue NW,</p>
                        <p className="p-0 mb-1">Washington,</p>
                        <p className="p-0 mb-1">DC 20500,</p>
                        <p className="p-0 mb-1">United States of America</p>
                      </div>
                    </div>
                    <div className="h-px bg-gray-300 my-4" />

                    <p className="p-0 leading-5">
                      All items below correspond to work completed in the month
                      of January 2024. Payment is due within 15 days of receipt
                      of this invoice.
                    </p>

                    {/* Invoice Table */}
                    <table className="w-full my-12">
                      <thead>
                        <tr className="border-b border-gray-300">
                          <th className="text-left font-bold py-2">Item</th>
                          <th className="text-left font-bold py-2">
                            Description
                          </th>
                          <th className="text-left font-bold py-2">
                            Unit Price
                          </th>
                          <th className="text-left font-bold py-2">Quantity</th>
                          <th className="text-left font-bold py-2">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-300 ">
                          <td className="py-2">1</td>
                          <td className="py-2">Onedoc Startup Subscription</td>
                          <td className="py-2">$100</td>
                          <td className="py-2">1</td>
                          <td className="py-2">$100</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                          <td className="py-2">2</td>
                          <td className="py-2">Onedoc support</td>
                          <td className="py-2">$0</td>
                          <td className="py-2">1</td>
                          <td className="py-2">$0</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                          <th className="text-left font-bold py-2"></th>
                          <th className="text-left font-bold py-2">Total</th>
                          <th className="text-left font-bold py-2"></th>
                          <th className="text-left font-bold py-2"></th>
                          <th className="text-left font-bold py-2">$100</th>
                        </tr>
                      </tbody>
                    </table>

                    <div className="bg-blue-100 py-3 rounded-md border-blue-300 text-blue-800 text-sm text-center">
                      On January 1st 2024, Onedoc users will be upgraded free of
                      charge to our new cloud offering.
                    </div>

                    <div>
                      <div className="h-px bg-gray-300 my-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Pagination />
        </div>
      </section>
    </>
  )
}
