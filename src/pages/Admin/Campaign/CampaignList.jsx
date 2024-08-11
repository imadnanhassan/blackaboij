import { GoHome } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import ToggleButton from '../../../common/ToggleButton/ToggleButton'

export default function CampaignList() {
  const [isStatus, setIsStatus] = useState(false)
  const [isFeatures, setIsFeatures] = useState(false)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  // Breadcrumbs
  const pageTitle = 'CampaignList'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Campaign' },
    { title: 'CampaignList' },
  ]

  // Toggle btn
  const handleStatusChange = checked => {
    setIsStatus(checked)
    if (checked) {
      toast.success('❤️ Brand Status Active!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }
  // Toggle btn
  const handleFeatureChange = checked => {
    setIsFeatures(checked)
    if (checked) {
      toast.success('❤️ Brand Status Active!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />

      <div className="flex gap-5">
        <div
          className={`px-5 py-5 rounded w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          {/* search product and Brand */}
          <div className="flex items-center justify-between gap-6 py-3 ">
            <h2 className="text-2xl font-bold mb-4">Campaign List</h2>
            <div className="search flex items-center gap-5">
              <div
                className={` rounded-md flex items-center justify-between border border-[#4800C9] ${isDarkMode ? 'text-darkColorText ' : 'bg-[#ffffff]'}`}
              >
                <input
                  type="search"
                  className={`py-2 pl-3  bg-transparent w-full focus:outline-none cursor-pointer ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
                  placeholder="Type Name & Enter"
                />
                <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
          </div>

          {/* Brand table*/}
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
                      Logo
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      NAME [English]
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      NAME [Bangla]
                    </th>

                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      STATUS
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Is Features
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
                    <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                      <div
                        className={`w-[40px] h-[40px] rounded-md p-2 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                      >
                        <img
                          src="https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </td>
                    <td
                      className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      EID Dhamaka Offer
                    </td>
                    <td
                      className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      ঈদ ধামাকা অফার
                    </td>

                    <td
                      className={`px-6 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <ToggleButton
                        label="Toggle Button Label"
                        isChecked={isStatus}
                        onChange={handleStatusChange}
                      />

                      {/* Include ToastContainer component */}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <ToggleButton
                        label="Toggle Button Label"
                        isChecked={isFeatures}
                        onChange={handleFeatureChange}
                      />

                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor">
                          <FiEdit className=" text-[12px] " />
                        </button>
                        <button className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor">
                          <RiDeleteBin7Line className="text-[12px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
