import { FaBarsStaggered } from 'react-icons/fa6'

import userLogo from '../../assets/img/user/user-1.jpg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiFullscreenLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { TbWorld } from 'react-icons/tb'
import Tooltip from '../../common/Tooltip/Tooltip'

export default function HeaderMenu({ toggleSidebar }) {
  const [isOpenUser, setIsOpenUser] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFullscreen, setIsFullscreen] = useState(false)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch()

  // User Open Function
  const toggleMenu = () => {
    setIsOpenUser(!isOpenUser)
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
        </div>

        <div className="flex gap-5">
          <button
            onClick={toggleFullscreen}
            className="bg-Vindigo-100 cursor-pointer hover:bg-Vindigo-400 hover:text-sideBarTextColor transition-all duration-300 px-2 py-2  rounded"
          >
            <RiFullscreenLine className="lg:text-[20px] text-[15px]" />
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
                    <Link to={'dashboard/settings'}>Settings</Link>
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
