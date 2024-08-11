import React from 'react'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import { GoHome } from 'react-icons/go'
import Button from '../../../../common/Button/Button'
import { RiDeleteBin7Line } from 'react-icons/ri'
import Tooltip from '../../../../common/Tooltip/Tooltip'
import { FiEdit } from 'react-icons/fi'

export default function AddValue() {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  // Breadcrumbs
  const pageTitle = 'Attributes'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Attributes' },
  ]
  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <div className="flex gap-5">
        <div
          className={`px-5 py-4 rounded w-[60%] ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
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
                    <th className="p-2">
                      <p>#</p>
                    </th>

                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      NAME
                    </th>

                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      VALUE
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      ACTIONS
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-2">1</td>

                    <td
                      className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      Liter
                    </td>

                    <td
                      className={`px-6 py-4 whitespace-nowrap flex gap-2 ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <span className="text-[12px] bg-stone-100 px-1 rounded py-1">
                        1 Ltr
                      </span>
                      <span className="text-[12px] bg-stone-100 px-1 rounded py-1">
                        2 Ltr
                      </span>
                      <span className="text-[12px] bg-stone-100 px-1 rounded py-1">
                        3 Ltr
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Tooltip text="Edit">
                          <button className="focus:outline-none transition-all duration-100 p-2 rounded bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor">
                            <FiEdit className="text-[12px]" />
                          </button>
                        </Tooltip>
                        <Tooltip text="Delete">
                          <button className="focus:outline-none transition-all duration-300 p-2 rounded bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor">
                            <RiDeleteBin7Line className="text-[12px]" />
                          </button>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          className={`px-5 py-5 rounded w-[40%] ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="flex gap-5 pb-5">
            <div
              className={` w-full py-4 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
            >
              <div className="px-5">
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Attributes Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="productName"
                      name="Attributes Name"
                      placeholder="Liter"
                      disabled
                      className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Attributes Value
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="productName"
                      name="Attributes Name"
                      placeholder="Enter attributes name"
                      className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />
                  </div>
                </div>

                <Button
                  text="Add Value"
                  className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
