/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'
import Tooltip from '../../../common/Tooltip/Tooltip'

export default function CouponsList() {
  const [data, setData] = useState([])

  
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredData, setFilteredData] = useState([])


  const [showNoDataMessage, setShowNoDataMessage] = useState(false)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  // Breadcrumbs
  const pageTitle = 'Coupons List'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Coupons' },
    { title: 'Coupons List' },
  ]

  // coupon data
  const tableData = [
    {
      id: 1,
      CouponCode: 'AH38',
      DiscountType: 'Fixed Amount',
      Charge: '100',
      UserLimit: '1',
      TotalLimit: '100',
      isActive: true,
    },
    {
      id: 2,
      CouponCode: 'BH29',
      DiscountType: 'Percentage',
      Charge: '50',
      UserLimit: '2',
      TotalLimit: '200',
      isActive: false,
    },
    {
      id: 3,
      CouponCode: 'CX11',
      DiscountType: 'Fixed Amount',
      Charge: '75',
      UserLimit: '1',
      TotalLimit: '50',
      isActive: true,
    },
    {
      id: 4,
      CouponCode: 'DP44',
      DiscountType: 'Percentage',
      Charge: '30',
      UserLimit: '3',
      TotalLimit: '150',
      isActive: true,
    },
    {
      id: 5,
      CouponCode: 'ET63',
      DiscountType: 'Fixed Amount',
      Charge: '200',
      UserLimit: '2',
      TotalLimit: '300',
      isActive: false,
    },
    {
      id: 6,
      CouponCode: 'FQ82',
      DiscountType: 'Percentage',
      Charge: '20',
      UserLimit: '1',
      TotalLimit: '100',
      isActive: true,
    },
    {
      id: 7,
      CouponCode: 'GR73',
      DiscountType: 'Fixed Amount',
      Charge: '150',
      UserLimit: '2',
      TotalLimit: '200',
      isActive: false,
    },
    {
      id: 8,
      CouponCode: 'HT39',
      DiscountType: 'Percentage',
      Charge: '10',
      UserLimit: '1',
      TotalLimit: '50',
      isActive: true,
    },
    {
      id: 9,
      CouponCode: 'HT39',
      DiscountType: 'Percentage',
      Charge: '10',
      UserLimit: '1',
      TotalLimit: '50',
      isActive: true,
    },
  ]
  useEffect(() => {
    setData(tableData)
    setFilteredData(tableData)
  }, [])

  // search query parameters
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredData(data)
    } else {
      const filtered = data.filter(item =>
        item.CouponCode.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredData(filtered)
    }
    setShowNoDataMessage(filteredData.length === 0)
  }, [searchQuery, data])

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <div
        className={`px-5 py-5 rounded  ${isDarkMode ? 'bg-darkColorCard' : 'bg-lightColor'}`}
      >
        {/* search product and addProducts */}
        <div className="flex items-center justify-between gap-6 py-3 ">
          <div className="search flex items-center gap-5">
            <div
              className={` rounded-md flex items-center justify-between border border-[#4800C9] ${isDarkMode ? 'text-darkColorText ' : 'bg-[#ffffff]'}`}
            >
              <input
                type="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={`py-3 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
                placeholder="Search Coupons"
              />
              <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <Link to="/dashboard/add-product">
              <Button
                text="Add Coupon"
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                icon={FaPlus}
              />
            </Link>
          </div>
        </div>

        {/* Products table */}

        <div className="py-5">
          <div className="container mx-auto overflow-x-auto">
            <table
              id="data-table"
              className={`min-w-full border  table-auto  ${isDarkMode ? 'border-darkColorBody' : 'border-gray-200 divide-y divide-gray-200'}`}
            >
              <thead
                className={`${isDarkMode ? 'bg-[#131A26]' : 'bg-gray-100'}`}
              >
                <tr>
                  <th className="p-2">#</th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    CouponCode
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Discount Type
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Charge
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    UserLimit
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    TotalLimit
                  </th>

                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    STATUS
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredData.map(item => (
                  <tr key={item.id}>
                    <td
                      className={`p-2 ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.id}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap flex gap-2 ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.CouponCode}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.DiscountType}
                    </td>

                    <td
                      className={`px-6 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.Charge}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.UserLimit}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.TotalLimit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.isActive ? 'bg-[#c9f7dc] text-[#22c55e]' : 'bg-error-100/30 text-error-200'}`}
                      >
                        {item.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Tooltip text="Edit">
                          <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor">
                            <FiEdit className="text-[12px]" />
                          </button>
                        </Tooltip>
                        <Tooltip text="Delete">
                          <button className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor">
                            <RiDeleteBin7Line className="text-[12px]" />
                          </button>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Show message when no data is found */}
            {showNoDataMessage && (
              <p className="text-error-200 text-center pt-5">No data found !</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
