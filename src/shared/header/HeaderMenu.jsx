import { FaBarsStaggered } from 'react-icons/fa6'
import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { RiFullscreenLine } from 'react-icons/ri'
import { Link, Navigate } from 'react-router-dom'
import { TbWorld } from 'react-icons/tb'
import Tooltip from '../../common/Tooltip/Tooltip'
import { AdminContext } from '../../Providers/AuthProvider'
import { IoMdLogOut } from 'react-icons/io'

export default function HeaderMenu({ toggleSidebar }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFullscreen, setIsFullscreen] = useState(false)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const { admin, setAdmin } = useContext(AdminContext)
  console.log(admin)

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    setAdmin(false)
    Navigate('dashboard/signin', { replace: true })
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
            <Tooltip text="Logout">
              <button
                onClick={handleLogout}
                className="bg-Vindigo-100 cursor-pointer hover:bg-Vindigo-400 hover:text-sideBarTextColor transition-all duration-300 px-2 py-2  rounded"
              >
                <IoMdLogOut className="lg:text-[20px] text-[15px]" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </header>
  )
}
