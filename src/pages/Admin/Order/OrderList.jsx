import { LiaDownloadSolid } from 'react-icons/lia'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { FiEye } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import {
  toggleCheckbox,
  toggleSelectAll,
} from '../../../redux/features/checkBox/checkBoxSlice'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'
import { Link } from 'react-router-dom'
import Pagination from '../../../common/Pagination/Pagination'
import OrderInformationModal from './OrderInformationModal'
import OrderTrackingBtn from './OrderTrackingBtn'

export default function OrderList() {
  const [data, setData] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const { selectAll, checkboxes } = useSelector(state => state.checkBox)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const dispatch = useDispatch()
  const handleHeaderCheckboxChange = () => {
    dispatch(toggleSelectAll(!selectAll))
  }

  const handleCheckboxChange = index => () => {
    dispatch(toggleCheckbox(index))
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

  // table data
  const tableData = [
    {
      id: 1,
      orderCode: 20220912,
      customerName: 'Elon Mask',
      phone: '+880 1423657850',
      amount: '$999.00',
      deliveryStatus: true,
      paymentMethod: 'Cash On Delivery',
      paymentStatus: true,
      refund: 'Not Found',
    },
    {
      id: 2,
      orderCode: 20220913,
      customerName: 'Jeff Bezos',
      phone: '+880 1423657851',
      amount: '$1500.00',
      deliveryStatus: false,
      paymentMethod: 'Credit Card',
      paymentStatus: true,
      refund: 'Not Found',
    },
    {
      id: 3,
      orderCode: 20220914,
      customerName: 'Bill Gates',
      phone: '+880 1423657852',
      amount: '$800.00',
      deliveryStatus: true,
      paymentMethod: 'PayPal',
      paymentStatus: true,
      refund: 'Not Found',
    },
    {
      id: 4,
      orderCode: 20220915,
      customerName: 'Mark Zuckerberg',
      phone: '+880 1423657853',
      amount: '$1200.00',
      deliveryStatus: true,
      paymentMethod: 'Cash On Delivery',
      paymentStatus: true,
      refund: 'Not Found',
    },
    {
      id: 5,
      orderCode: 20220916,
      customerName: 'Larry Page',
      phone: '+880 1423657854',
      amount: '$2000.00',
      deliveryStatus: false,
      paymentMethod: 'Cash On Delivery',
      paymentStatus: true,
      refund: 'Not Found',
    },
    {
      id: 6,
      orderCode: 20220917,
      customerName: 'Sergey Brin',
      phone: '+880 1423657855',
      amount: '$1800.00',
      deliveryStatus: true,
      paymentMethod: 'Credit Card',
      paymentStatus: true,
      refund: 'Not Found',
    },
    {
      id: 7,
      orderCode: 20220918,
      customerName: 'Tim Cook',
      phone: '+880 1423657856',
      amount: '$1000.00',
      deliveryStatus: true,
      paymentMethod: 'PayPal',
      paymentStatus: true,
      refund: 'Not Found',
    },
    {
      id: 8,
      orderCode: 20220919,
      customerName: 'Satya Nadella',
      phone: '+880 1423657857',
      amount: '$850.00',
      deliveryStatus: false,
      paymentMethod: 'Cash On Delivery',
      paymentStatus: true,
      refund: 'Not Found',
    },
    {
      id: 9,
      orderCode: 20220920,
      customerName: 'Jack Ma',
      phone: '+880 1423657858',
      amount: '$1100.00',
      deliveryStatus: true,
      paymentMethod: 'Credit Card',
      paymentStatus: true,
      refund: 'Not Found',
    },
    {
      id: 10,
      orderCode: 20220921,
      customerName: 'Steve Jobs',
      phone: '+880 1423657859',
      amount: '$950.00',
      deliveryStatus: true,
      paymentMethod: 'Cash On Delivery',
      paymentStatus: true,
      refund: 'Not Found',
    },
  ]

  const pageTitle = 'Order List'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Order' },
    { title: 'Order List' },
  ]

  useEffect(() => {
    setData(tableData)
  }, [])

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />

      <div
        className={`px-5 py-5 rounded  ${isDarkMode ? 'bg-darkColorCard' : 'bg-lightColor'}`}
      >
        <div>
          {/* Products filtering */}
          <div className="pt-3 pb-5">
            <h3
              className={` text-[20px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-bgray-800'}`}
            >
              Filter
            </h3>
          </div>
          <div className="lg:flex items-center  justify-between">
            <div className="mb-4 flex-1">
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
                <option>Scheduled</option>
                <option>Publish</option>
                <option>Inactive</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4 flex-1 lg:mx-4">
              <label
                htmlFor="vendor2"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Category
              </label>
              <select
                id="vendor2"
                name="vendor2"
                className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody border text-darkColorText ' : 'bg-lightColor hover:border-gray-400 border-gray-300 border'}`}
              >
                {/* Vendor options */}
                <option>Category</option>
                <option>Household</option>
                <option>Office</option>
                <option>Electronics</option>
                <option>Shoes</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4 flex-1">
              <label
                htmlFor="vendor3"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Stock
              </label>
              <select
                id="vendor3"
                name="vendor3"
                className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText border ' : 'bg-lightColor hover:border-gray-400 border border-gray-300 '}`}
              >
                {/* Vendor options */}
                <option>Stock</option>
                <option>Out Of Stock</option>
                <option>In Stock</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>

        {/* search product and addProducts */}
        <div className="flex items-center justify-between gap-6 py-3 ">
          <div className="search flex items-center gap-5">
            <div
              className={` rounded-md flex items-center justify-between border border-[#4800C9] ${isDarkMode ? 'text-darkColorText ' : 'bg-[#ffffff]'}`}
            >
              <input
                type="search"
                className={`py-3 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
                placeholder="Search Products"
              />
              <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <Link to="/dashboard/add-product">
              <Button
                text="Add Product"
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                icon={FaPlus}
              />
            </Link>
          </div>
        </div>

        {/* Products table */}

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
                  <th className="p-2">
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
                    Phone
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
                    Payment Status
                  </th>
                  <th
                    className={` border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Refund
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
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <td className="p-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-Vindigo-800 ml-5"
                        checked={checkboxes[index] || false}
                        onChange={handleCheckboxChange(index)}
                      />
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap flex gap-2">
                      <h6
                        className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.orderCode}
                      </h6>
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.customerName}
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <h6
                        className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        {item.phone}
                      </h6>
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.amount}
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.deliveryStatus ? 'bg-[#E8F9EF] text-[#22c55e]' : 'bg-gray-100 text-gray-400'}`}
                      >
                        {item.deliveryStatus ? 'Delivered' : 'Pending'}
                      </span>
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.paymentMethod}
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.PaymentStatus ? 'bg-[#E8F9EF] text-[#22c55e]' : 'bg-gray-100 text-gray-400'}`}
                      >
                        {item.PaymentStatus ? 'Paid' : 'UnPaid'}
                      </span>
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.refund}
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <OrderTrackingBtn />
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => openModal(item.id)}
                          className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#eab3081a] hover:bg-[#eab308] text-[#eab308] hover:text-lightColor"
                        >
                          <FiEye className="text-[12px]" />
                        </button>
                        <OrderInformationModal
                          isOpen={modalOpen}
                          onClose={closeModal}
                          tableData={tableData}
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
              </tbody>
            </table>
          </div>
        </div>

        <Pagination />
      </div>
    </section>
  )
}
