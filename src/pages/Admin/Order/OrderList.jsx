import { LiaDownloadSolid } from 'react-icons/lia'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { FiEye } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import { toggleSelectAll } from '../../../redux/features/checkBox/checkBoxSlice'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'

import Pagination from '../../../common/Pagination/Pagination'
import OrderInformationModal from './OrderInformationModal'
import OrderTrackingBtn from './OrderTrackingBtn'
import { useGetAdminOrderListQuery } from '../../../redux/features/api/Customer/order'






export default function OrderList() {
  const [data, setData] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const { data: orders, isLoading } = useGetAdminOrderListQuery()
  console.log(orders)

  const { selectAll } = useSelector(state => state.checkBox)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const dispatch = useDispatch()
  const handleHeaderCheckboxChange = () => {
    dispatch(toggleSelectAll(!selectAll))
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

  useEffect(() => {
    if (orders && !isLoading) {
      setData(orders?.orders?.data)
    }
    return () => setData([])
  }, [isLoading])

  const pageTitle = 'Order List'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Order' },
    { title: 'Order List' },
  ]

  const adminInvoiceDownload = () => {
    alert("admin invoice funtion working")
  }



  console.log(data, 'order list data')

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
                  htmlFor="vendor1"
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Status
                </label>
                <select
                  id="vendor1"
                  name="vendor1"
                  className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody border text-darkColorText ' : 'bg-lightColor hover:border-gray-400 border-gray-300 border'}`}
                >
                  {/* Vendor options */}
                  <option>Status </option>
                  <option>Canceled</option>
                  <option>Completed</option>
                  {/* Add more options as needed */}
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
                    <th className="p-2 ">
                      <input
                        type="checkbox"
                        className={`form-checkbox h-4 w-4 ${isDarkMode ? 'text-black' : 'text-indigo-600'}`}
                        checked={selectAll}
                        onChange={handleHeaderCheckboxChange}
                      />
                    </th>
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
                      <td className="p-2">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-Vindigo-800 ml-[5px]" />
                      </td>
                      <td className="border-l pl-2 py-4 whitespace-nowrap flex gap-2">
                        <h6 className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}>
                          {item?.order_id}
                        </h6>
                      </td>
                      <td className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}>
                        {item?.customer?.name}
                      </td>
                      <td className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}>
                        {item?.amount}
                      </td>
                      <td className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}>
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item?.deliveryStatus ? 'bg-[#E8F9EF] text-[#22c55e]' : 'bg-gray-100 text-gray-400'}`}>
                          {item?.status}
                        </span>
                      </td>
                      <td className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}>
                        {item?.payment_method === 'COD' ? 'Cash On Delivery' : item?.payment_method}
                      </td>
                      <td className={`border-l pl-2 py-4 whitespace-nowrap flex justify-center ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}>
                        <OrderTrackingBtn id={item?.id} status={item?.status} />
                      </td>
                      <td className="border-l pl-2 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <button onClick={() => openModal(item?.id)} className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-white border  hover:bg-black text-black hover:text-white">
                            <FiEye className="text-[12px]" />
                          </button>
                          <OrderInformationModal isOpen={modalOpen} onClose={closeModal} tableData={data} selectedId={selectedId} />
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
            </div>
          </div>

          <Pagination />
        </div>
      </section>



    </>

  )
}
