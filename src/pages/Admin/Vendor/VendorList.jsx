import { GoHome } from 'react-icons/go'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'

import { FiEdit, FiEye } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { vendorData } from './vendorData'
import { Link } from 'react-router-dom'

export default function VendorList() {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const pageTitle = 'Vendor List'
  const vendorLink = [
    { title: <GoHome />, link: '/' },
    { title: 'Vendor' },
    { title: 'Vendor List' },
  ]

  const activeVendorsCount = vendorData.filter(
    vendor => vendor.status === 'Active',
  ).length
  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={vendorLink} />

      <div
        className={`px-5 py-5 rounded  ${isDarkMode ? 'bg-darkColorCard' : 'bg-lightColor'}`}
      >
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

            <h4>
              Active Vendor: <strong>{activeVendorsCount}</strong>
            </h4>
          </div>
          <div className="flex items-center gap-[30px]">
            <Link to="/dashboard/add-vendor">
              <button className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                <span className="relative">+ Vendor</span>
              </button>
            </Link>
          </div>
        </div>

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
                  <th className="p-2">#</th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Vendor Name
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Shop Name
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
                {vendorData.map((item, id) => (
                  <tr key={item.id}>
                    <td className="text-center  text-base">{id + 1}</td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap items-center flex gap-3">
                      <div
                        className={`w-[50px] h-[50px] rounded-md p-1 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                      >
                        <img
                          src={item.vendorPhoto}
                          alt=""
                          className="w-full rounded-md"
                        />
                      </div>
                      <span>
                        <h6
                          className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                        >
                          {item.shopName}
                        </h6>
                      </span>
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      {item.vendorName}
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
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.status === 'Pending'
                            ? 'bg-yellow-300 text-yellow-800'
                            : item.status === 'Active'
                              ? 'bg-[#E8F9EF] text-[#22c55e]'
                              : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/dashboard/vendor-profile/${item.vendorId}`}
                          className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#eab3081a] hover:bg-[#eab308] text-[#eab308] hover:text-lightColor "
                        >
                          <FiEye className=" text-[12px]" />
                        </Link>
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
