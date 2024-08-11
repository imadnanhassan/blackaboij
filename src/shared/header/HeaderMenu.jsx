import { FaBarsStaggered } from 'react-icons/fa6'
import { IoLanguage } from 'react-icons/io5'
import { IoMdNotificationsOutline } from 'react-icons/io'
import userLogo from '../../assets/img/user/user-1.jpg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiFullscreenLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { TbWorld } from 'react-icons/tb'
import Tooltip from '../../common/Tooltip/Tooltip'

export default function HeaderMenu({ toggleSidebar }) {
  const [isOpenUser, setIsOpenUser] = useState(false)
  const [isOpenNotification, setIsOpenNotification] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFullscreen, setIsFullscreen] = useState(false)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch()

  // User Open Function
  const toggleMenu = () => {
    setIsOpenUser(!isOpenUser)
    setIsOpenNotification(false)
  }

  // open notification
  const toggleNotificationMenu = () => {
    setIsOpenNotification(!isOpenNotification)
    setIsOpenUser(false)
  }

  // FullScreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true)
      })
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false)
      })
    }
  }

  return (
    <header
      className={`${isDarkMode ? 'bg-darkColor' : 'bg-lightColor'} sticky top-0 z-50 shadow-sm`}
    >
      <div className="flex items-center justify-between main-container">
        <div className="left-side flex items-center gap-5">
          <button className="inline-block">
            <FaBarsStaggered
              onClick={toggleSidebar}
              className={` text-[20px] ${isDarkMode ? 'text-lightColor' : 'text-darkColor'}`}
            />
          </button>
          <Tooltip text="Website">
            <Link to={'/'}>
              <button className="bg-Vindigo-100 cursor-pointer hover:bg-Vindigo-400 hover:text-sideBarTextColor transition-all duration-300 px-2 py-2  rounded">
                <TbWorld />
              </button>
            </Link>
          </Tooltip>
          <div className="flex gap-5">
            <Link
              to={'/dashboard/pos'}
              onClick={toggleSidebar}
              className="bg-Vindigo-100 cursor-pointer hover:bg-Vindigo-400 hover:text-sideBarTextColor transition-all duration-300 px-2 py-2  rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13.79"
                height="16"
                viewBox="0 0 13.79 16"
              >
                <g
                  id="_371925cdd3f531725a9fa8f3ebf8fe9e"
                  data-name="371925cdd3f531725a9fa8f3ebf8fe9e"
                  transform="translate(-2.26 0)"
                >
                  <path
                    id="Path_40673"
                    data-name="Path 40673"
                    d="M10.69,7H3.26a1.025,1.025,0,0,0-1,1V18.45a1.03,1.03,0,0,0,1,1.05h7.43a1.03,1.03,0,0,0,1.03-1.03V8A1.025,1.025,0,0,0,10.69,7ZM4.94,17.86H3.995v-.95H4.94Zm0-2.355H3.995v-.95H4.94Zm0-2.355H3.995V12.2H4.94Zm2.5,4.71H6.5v-.95h.955Zm0-2.355H6.5v-.95h.955Zm0-2.355H6.5V12.2h.955Zm2.5,4.71H8.99v-.95h.95Zm0-2.355H8.99v-.95h.95Zm0-2.355H8.99V12.2h.95Zm.325-3a.17.17,0,0,1-.165.17H3.835a.17.17,0,0,1-.165-.17V8.795a.165.165,0,0,1,.165-.165H10.13a.165.165,0,0,1,.165.165Zm5.09-1.45H15.13v9.09h.25a.67.67,0,0,0,.67-.67V9.375a.67.67,0,0,0-.695-.675Z"
                    transform="translate(0 -3.5)"
                    fill="#717580"
                  ></path>
                  <rect
                    id="Rectangle_20842"
                    data-name="Rectangle 20842"
                    width="1.465"
                    height="9.095"
                    transform="translate(12.185 5.2)"
                    fill="#717580"
                  ></rect>
                  <rect
                    id="Rectangle_20843"
                    data-name="Rectangle 20843"
                    width="0.63"
                    height="9.095"
                    transform="translate(14.06 5.2)"
                    fill="#717580"
                  ></rect>
                  <path
                    id="Path_40674"
                    data-name="Path 40674"
                    d="M13.895.895a.89.89,0,0,0-.26-.635A.91.91,0,0,0,13,0a.895.895,0,0,0-.91.895v.53h1.79Zm-2.2,0a.76.76,0,0,1,0-.145.68.68,0,0,1,0-.1h.01A.5.5,0,0,1,11.755.5.43.43,0,0,1,11.79.4a1.2,1.2,0,0,1,.145-.26.5.5,0,0,1,.04-.055L12.045,0H7.995A.815.815,0,0,0,7.18.81V3.03h4.5Z"
                    transform="translate(-2.46)"
                    fill="#717580"
                  ></path>
                </g>
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex gap-5">
          <button className="bg-Vindigo-100 px-2 py-1 rounded">
            <IoLanguage className="lg:text-[20px] text-[18px]" />
          </button>
          {/* <button
            onClick={handleToggle}
            className="bg-Vindigo-100 cursor-pointer hover:bg-Vindigo-400 hover:text-sideBarTextColor transition-all duration-300 px-2 py-2  rounded"
          >
            {isDarkMode ? (
              <CiLight className="lg:text-[20px] text-[18px]" />
            ) : (
              <CiDark className="lg:text-[20px] text-[18px]" />
            )}
          </button> */}
          <button
            onClick={toggleFullscreen}
            className="bg-Vindigo-100 cursor-pointer hover:bg-Vindigo-400 hover:text-sideBarTextColor transition-all duration-300 px-2 py-2  rounded"
          >
            <RiFullscreenLine className="lg:text-[20px] text-[15px]" />
          </button>
          <button
            onClick={toggleNotificationMenu}
            className="bg-Vindigo-100 lg:block hidden cursor-pointer hover:bg-Vindigo-400 hover:text-sideBarTextColor transition-all duration-300 px-2 py-2  rounded "
          >
            <IoMdNotificationsOutline className="text-[20px] cursor-pointer " />
            {isOpenNotification && (
              <div className="absolute right-28 mt-8 w-72 bg-white rounded-lg shadow-lg z-30">
                <div className="flex gap-2 bg-primaryColor py-2 px-2 rounded-t">
                  <div>
                    <img
                      src={userLogo}
                      alt=""
                      className="w-11 h-11 bg-cover rounded-full cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className=" text-sm text-sideBarTextColor">
                      Lalisa Manobal
                    </p>
                    <p className="text-sm text-white/50">Web Developer</p>
                  </div>
                </div>
              </div>
            )}
          </button>
          <div className="relative inline-block">
            <span onClick={toggleMenu}>
              <img
                src={userLogo}
                alt=""
                className="w-10 h-10 bg-cover rounded-full cursor-pointer"
              />
            </span>
            {isOpenUser && (
              <div className="absolute right-0 mt-6 w-72 bg-white rounded-lg shadow-lg z-30">
                <div className="flex gap-2 bg-primaryColor py-2 px-2 rounded-t">
                  <div>
                    <img
                      src={userLogo}
                      alt=""
                      className="w-11 h-11 bg-cover rounded-full cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className=" text-sm text-sideBarTextColor">
                      Lalisa Manobal
                    </p>
                    <p className="text-sm text-white/50">Web Developer</p>
                  </div>
                </div>

                <div className="py-1">
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                    Profile
                  </button>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                    Settings
                  </button>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
