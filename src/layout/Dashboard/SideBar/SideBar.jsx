import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { FaShoppingBag, FaUser } from 'react-icons/fa'
import { CiShoppingBasket } from 'react-icons/ci'
import { FaClipboardList } from 'react-icons/fa6'
import { FaCircleNotch } from 'react-icons/fa'
import { IoLogOutOutline } from 'react-icons/io5'
import { useContext } from 'react'
import { AdminContext } from '../../../Providers/AuthProvider'

export default function SideBar({ isSideBarOpen }) {
  const navigate = useNavigate()
  const { setAdmin } = useContext(AdminContext)

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    setAdmin(false)
    navigate('dashboard/signin', { replace: true })
  }
  return (
    <aside
      className={` main-content overflow-y-auto bg-black lg:block hidden
      ${
        isSideBarOpen
          ? 'w-0 transition-width duration-500 ease-in-out sm:block'
          : 'w-64 transition-width duration-500 ease-in-out sm:block'
      }`}
    >
      {isSideBarOpen ? (
        <div className="sideBarCloseCollapse hidden lg:block">
          <div className=" flex items-center justify-center pt-5">
            <NavLink to={'/dashboard'}>
              <FaShoppingBag className="text-[30px] text-sideBarTextColor" />
            </NavLink>
          </div>
          {/* collaps itoms */}
        </div>
      ) : (
        <div className="sideBarOpenCollapse ">
          <div className="pt-5">
            <Link to={'/dashboard'}>
              <img
                src="https://i.ibb.co/3sNL27c/logo.png"
                alt=""
                className="w-[150px] mx-auto"
              />
            </Link>
          </div>
          <div className="pt-1">
            <ul className="flex flex-col gap-2">
              <li id="sidebar">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 mt-10 px-8 py-2 text-white  hover:bg-gray-100  hover:text-gray-700"
                >
                  <span>
                    <GoHome />
                  </span>
                  <span className="text-sm font-medium">Dashboard</span>
                </Link>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex gap-3 cursor-pointer items-center  mb-1 px-8 py-2 text-white hover:bg-gray-100 hover:text-gray-700 ">
                    <span>
                      <CiShoppingBasket />
                    </span>

                    <span className="flex gap-20 ">
                      <span className="text-sm font-medium"> Products </span>
                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </summary>

                  <ul className="space-y-1 list-none">
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/products-list'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Products List
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/add-product'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Add Products
                        </span>
                      </NavLink>
                    </li>

                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/category'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Category
                        </span>
                      </NavLink>
                    </li>

                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/size'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Size
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/color'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Color
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              {/* order */}
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex gap-3 cursor-pointer items-center  mb-1 px-8 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
                    <span>
                      <GoHome />
                    </span>

                    <span className="flex gap-[102px]">
                      <span className="text-sm font-medium"> Order </span>
                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </summary>
                  <ul className="space-y-1 list-none">
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/order-list'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaClipboardList />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Order List
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>

              {/* User */}
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex gap-3 cursor-pointer items-center  mb-1 px-8 py-2 text-white hover:bg-gray-100 hover:text-gray-700 ">
                    <span>
                      <FaUser />
                    </span>

                    <span className="flex gap-[88px]">
                      <span className="text-sm font-medium">All User </span>
                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </summary>

                  <ul className="space-y-1 list-none">
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/user-list'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Customer List
                        </span>
                      </NavLink>
                    </li>
                    {/* <li id="sidebar">
                      <NavLink
                        to={'dashboard/user-profile'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Admin Profile
                        </span>
                      </NavLink>
                    </li> */}
                    {/* <li id="sidebar">
                      <NavLink
                        to={'dashboard/userprofile-settings'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Admin List
                        </span>
                      </NavLink>
                    </li> */}
                  </ul>
                </details>
              </li>
              {/* <li id="sidebar">
                <NavLink
                  to="dashboard/settings"
                  className={({ isActive }) =>
                    `hover:bg-gray-100  hover:text-gray-700  font-medium px-8 py-2  flex items-center gap-3 ${
                      isActive ? 'bg-gray-200 text-gray-700' : 'text-gray-200'
                    }`
                  }
                >
                  <span>
                    <AiFillSetting />
                  </span>
                  <span className="text-sm font-medium">Settings</span>
                </NavLink>
              </li> */}

              <li className="px-8 py-2 text-white hover:bg-gray-100  hover:text-gray-700">
                <Link
                  onClick={handleLogout}
                  className="flex items-center gap-3"
                >
                  <span>
                    <IoLogOutOutline />
                  </span>
                  <span className="text-sm font-medium">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </aside>
  )
}
