import { GoHome } from 'react-icons/go'
import { FiEdit } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import banner1 from '../../../assets/img/banner/banner (1).jpg'
import banner2 from '../../../assets/img/banner/banner (2).jpg'
import banner3 from '../../../assets/img/banner/banner (3).jpg'
import banner4 from '../../../assets/img/banner/banner (4).jpg'
import banner5 from '../../../assets/img/banner/banner (5).jpg'
import banner6 from '../../../assets/img/banner/banner (6).jpg'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Banner.css'
import { useState } from 'react'
import AddBanner from './AddBanner'
import { RxCross1 } from 'react-icons/rx'

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const handleClickOpen = () => setIsOpen(true)
  const handleClickClose = () => setIsOpen(false)

  // Breadcrumbs
  const pageTitle = 'Banner'
  const productLinks = [
    { title: <GoHome />, link: '/dashboard' },
    { title: 'Banner' },
  ]
  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />

      <div
        className={`rounded w-full  ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
      >
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="h-[500px]"
          >
            <SwiperSlide>
              <img src={banner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner6} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div
        className={`rounded w-full py-5 mt-10 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
      >
        <div className="py-5">
          <div className="flex px-10">
            <h2 className="text-2xl font-bold mb-4">Manage Banner</h2>
            <div className="ml-auto">
              <div className="relative">
                <button
                  className="bg-primaryColor text-white px-4 py-2 rounded focus:outline-none"
                  onClick={handleClickOpen}
                >
                  Add Banner
                </button>

                {isOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 transition-all duration-300 z-50">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-7xl rounded-md p-4">
                      <AddBanner />
                      <button
                        onClick={handleClickClose}
                        className="absolute top-2 right-2 focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                      >
                        <RxCross1 size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="px-10 overflow-x-auto">
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
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Image
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    title
                  </th>

                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Status
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    Position
                  </th>

                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-2 text-center">1</td>

                  <td className="border-l pl-2 py-4 whitespace-nowrap flex gap-2">
                    <div
                      className={`w-[50px] h-[50px] rounded-md p-2 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                    >
                      <img
                        src="https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                  </td>
                  <td
                    className={`border-l pl-2 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                  >
                    Women Clothing & Fashion
                  </td>
                  <td
                    className={`border-l pl-2 py-4 whitespace-nowrap text-[13px]  ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                  >
                    Active
                  </td>
                  <td
                    className={`border-l pl-2 py-4 whitespace-nowrap text-[13px]  ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                  >
                    1
                  </td>

                  <td className="border-l pl-2 py-4 whitespace-nowrap">
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
    </section>
  )
}
