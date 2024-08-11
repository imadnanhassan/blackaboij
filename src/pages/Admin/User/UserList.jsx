import { FiEdit } from 'react-icons/fi'
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

import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'

export default function UserList() {
  const [data, setData] = useState([])
  const { selectAll, checkboxes } = useSelector(state => state.checkBox)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const dispatch = useDispatch()
  const handleHeaderCheckboxChange = () => {
    dispatch(toggleSelectAll(!selectAll))
  }

  const handleCheckboxChange = index => () => {
    dispatch(toggleCheckbox(index))
  }

  const tableData = [
    {
      id: 1,
      name: 'John Doe',
      userName: 'john_doe123',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      address: '123 Main Street, City, Country',
      isStatus: true,
    },
    {
      id: 2,
      name: 'Alice Smith',
      userName: 'alice_smith456',
      email: 'alice.smith@example.com',
      phone: '+1987654321',
      address: '456 Elm Street, Town, Country',
      isStatus: false,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      userName: 'michael_j',
      email: 'michael.j@example.com',
      phone: '+1122334455',
      address: '789 Oak Street, Village, Country',
      isStatus: true,
    },
    {
      id: 4,
      name: 'Emily Wilson',
      userName: 'emily_wilson',
      email: 'emily.wilson@example.com',
      phone: '+1567890123',
      address: '101 Pine Street, Town, Country',
      isStatus: true,
    },
    {
      id: 5,
      name: 'David Brown',
      userName: 'david_brown',
      email: 'david.brown@example.com',
      phone: '+1987654321',
      address: '123 Cedar Street, City, Country',
      isStatus: true,
    },
    {
      id: 6,
      name: 'Emma Taylor',
      userName: 'emma_t',
      email: 'emma.t@example.com',
      phone: '+1765432109',
      address: '456 Maple Street, Village, Country',
      isStatus: true,
    },
    {
      id: 7,
      name: 'James Lee',
      userName: 'james_lee',
      email: 'james.lee@example.com',
      phone: '+1987654321',
      address: '789 Birch Street, Town, Country',
      isStatus: true,
    },
    {
      id: 8,
      name: 'Sophia Garcia',
      userName: 'sophia_g',
      email: 'sophia.g@example.com',
      phone: '+1223344556',
      address: '101 Walnut Street, City, Country',
      isStatus: true,
    },
    {
      id: 9,
      name: 'William Martinez',
      userName: 'william_m',
      email: 'william.m@example.com',
      phone: '+1765432109',
      address: '123 Pine Street, Village, Country',
      isStatus: true,
    },
    {
      id: 10,
      name: 'Olivia Rodriguez',
      userName: 'olivia_r',
      email: 'olivia.r@example.com',
      phone: '+1345678901',
      address: '456 Elm Street, Town, Country',
      isStatus: true,
    },
  ]

  const pageTitle = 'User List'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'User' },
    { title: 'User List' },
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
        {/* search product and addProducts */}
        <div className="flex items-center justify-between gap-6 py-3 ">
          <div className="search flex items-center gap-5">
            <div
              className={` rounded-md flex items-center justify-between border border-[#4800C9] ${isDarkMode ? 'text-darkColorText ' : 'bg-[#ffffff]'}`}
            >
              <input
                type="search"
                className={`py-3 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
                placeholder="Search User"
              />
              <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <Link to="/dashboard/">
              <Button
                text="User"
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                icon={FaPlus}
              />
            </Link>
          </div>
        </div>

        {/* User table */}

        <div className="py-5">
          <div className="overflow-x-auto">
            <table
              id="data-table"
              className={`min-w-full border table-auto  ${isDarkMode ? 'border-darkColorBody' : 'border-gray-200 divide-y divide-gray-200'}`}
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
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Name
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    User Name
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Email
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Phone
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Address
                  </th>

                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    STATUS
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr key={item.id}>
                    <td className="">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-Vindigo-800 ml-5"
                        checked={checkboxes[index] || false}
                        onChange={handleCheckboxChange(index)}
                      />
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap items-center flex gap-3">
                      <div
                        className={`w-[40px] h-[40px] rounded-md p-2 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                      >
                        <img
                          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.craiyon.com%2Fimage%2F-t2P4zD_RE210d4rDQKrhg&psig=AOvVaw15C9xFzPKwVv-4Uh8orA5G&ust=1712304327218000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCJh-yMqIUDFQAAAAAdAAAAABAd"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <span>
                        <h6
                          className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                        >
                          {item.name}
                        </h6>
                      </span>
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.userName}
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      {item.email}
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.phone}
                    </td>

                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.address}
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.isStatus ? 'bg-[#E8F9EF] text-[#22c55e]' : 'bg-gray-100 text-gray-400'}`}
                      >
                        {item.isStatus ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#eab3081a] hover:bg-[#eab308] text-[#eab308] hover:text-lightColor ">
                          <FiEye className=" text-[12px]" />
                        </button>
                        <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor">
                          <FiEdit className=" text-[12px] " />
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
      </div>
    </section>
  )
}
