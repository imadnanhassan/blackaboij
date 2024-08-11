import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { RiFileUploadFill } from 'react-icons/ri'

import { FaShoppingBag } from 'react-icons/fa'
import { CiShoppingBasket } from 'react-icons/ci'
import { FaClipboardList } from 'react-icons/fa6'
import { BiLogoBlogger } from 'react-icons/bi'
import { FaCircleNotch } from 'react-icons/fa'
import { IoLogOutOutline } from 'react-icons/io5'
import { AiFillSetting } from 'react-icons/ai'
import { AiFillDollarCircle } from 'react-icons/ai'
import { MdCampaign } from 'react-icons/md'
import { PiSlideshowFill } from 'react-icons/pi'

import logo from '../../../assets/img/branging-logo/easy-shop.png'

// Define menu items and submenus as an array of objects
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const menuItems = [
  { title: 'Dashboard', path: '/dashboard', icon: <GoHome /> },
  {
    title: 'Products',
    icon: <CiShoppingBasket />,
    submenu: [
      { title: 'Product List', path: '/dashboard/products-list' },
      { title: 'Add Product', path: '/dashboard/add-product' },
      { title: 'Category', path: '/dashboard/category' },
      { title: 'Brand', path: '/dashboard/brand' },
      { title: 'Attributes', path: '/dashboard/attributes' },
      { title: 'Color', path: '/dashboard/color' },
      { title: 'Products Details', path: '/dashboard/products-details' },
    ],
  },
  {
    title: 'Order',
    icon: <FaCircleNotch />,
    submenu: [
      { title: 'Order List', path: '/dashboard/order-list' },
      { title: 'Order Details', path: '/dashboard/order-details' },
    ],
  },
  {
    title: 'Coupons',
    icon: <AiFillDollarCircle />,
    path: '/dashboard/coupons',
  },
  { title: 'Settings', icon: <AiFillSetting />, path: '/dashboard/settings' },
  { title: 'Logout', icon: <IoLogOutOutline />, path: '/dashboard/signin' },
]

export default function SideBar({ isSideBarOpen }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('userData')
    navigate('dashboard/signin')
  }
  return (
    <aside
      className={` main-content overflow-y-auto bg-sideBarColor lg:block hidden
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
          {/* <div className="pt-4">
            <ul className="flex flex-col gap-2">
              <li className="flex cursor-pointer items-center justify-center rounded-lg mt-10 px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
                <Link to={'/'} className="flex items-center gap-3">
                  <span>
                    <GoHome className="text-[20px]" />
                  </span>
                </Link>
              </li>
              <li>
                <details className="group relative">
                  <summary className="flex cursor-pointer items-center justify-center rounded-lg px-4 py-2  text-white hover:bg-gray-100 hover:text-gray-700">
                    <span className="shrink-0 transition duration-300 ">
                      <CiShoppingCart className="text-[20px]" />
                    </span>
                  </summary>

                  <ul className="space-y-1 list-none">
                    <li>
                      <Link
                        to={'dashboard/products-list'}
                        className="relative top-0 left-[58px]  flex justify-center flex-row items-center h-11 focus:outline-none text-white hover:text-white pr-6 bg-sideBarColor"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaClipboardList />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'dashboard/add-product'}
                        className="relative top-0 left-[58px]  flex justify-center flex-row items-center h-11 focus:outline-none text-white hover:text-white pr-6 bg-sideBarColor"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <CiShoppingBasket />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'dashboard/products-details'}
                        className="relative top-0 left-[58px]  flex justify-center flex-row items-center h-11 focus:outline-none text-white hover:text-white pr-6 bg-sideBarColor"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <RiShoppingBasketLine />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details className="group relative">
                  <summary className="flex cursor-pointer items-center justify-center rounded-lg px-4 py-2  text-white hover:bg-gray-100 hover:text-gray-700">
                    <span className="shrink-0 transition duration-300 ">
                      <CiShoppingCart className="text-[20px]" />
                    </span>
                  </summary>

                  <ul className="space-y-1 list-none">
                    <li>
                      <Link
                        to={'dashboard/products-list'}
                        className="relative top-0 left-[58px]  flex justify-center flex-row items-center h-11 focus:outline-none text-white hover:text-white pr-6 bg-sideBarColor"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaClipboardList />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'dashboard/add-product'}
                        className="relative top-0 left-[58px]  flex justify-center flex-row items-center h-11 focus:outline-none text-white hover:text-white pr-6 bg-sideBarColor"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <CiShoppingBasket />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'dashboard/products-details'}
                        className="relative top-0 left-[58px]  flex justify-center flex-row items-center h-11 focus:outline-none text-white hover:text-white pr-6 bg-sideBarColor"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <RiShoppingBasketLine />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div> */}
        </div>
      ) : (
        <div className="sideBarOpenCollapse ">
          <div className="pt-2 ">
            <Link to={'/dashboard'}>
              <img src={logo} alt="" className="w-[150px] mx-auto" />
            </Link>
          </div>
          <div className="pt-4">
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
                        to={'dashboard/add-productV2'}
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
                        to={'dashboard/categoryV2'}
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
                        to={'dashboard/brand'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Brand
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/unit'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Unit
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/attributes'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Attributes
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
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/products-details'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Products Details
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

              {/* campaign */}
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex gap-3 cursor-pointer items-center  mb-1 px-8 py-2 text-white hover:bg-gray-100 hover:text-gray-700 ">
                    <span>
                      <MdCampaign />
                    </span>

                    <span className="flex gap-[72px]">
                      <span className="text-sm font-medium"> Campaign </span>
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
                        to={'dashboard/campaign-list'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Campaign List
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/campaign-add'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Campaign Add
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>

              {/* coupons */}
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex gap-3 cursor-pointer items-center  mb-1 px-8 py-2 text-white hover:bg-gray-100 hover:text-gray-700 ">
                    <span>
                      <AiFillDollarCircle />
                    </span>

                    <span className="flex gap-[80px]">
                      <span className="text-sm font-medium"> Coupons </span>
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
                        to={'dashboard/coupons-list'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Coupons List
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/create-coupon'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Coupons Add
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
                      <AiFillDollarCircle />
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
                          User List
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/user-profile'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          User Profile
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/userprofile-settings'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          User Settings
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>

              {/* vendor */}
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex gap-3 cursor-pointer items-center  mb-1 px-8 py-2 text-white hover:bg-gray-100 hover:text-gray-700 ">
                    <span>
                      <AiFillDollarCircle />
                    </span>

                    <span className="flex gap-[88px]">
                      <span className="text-sm font-medium">Vendor </span>
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
                        to={'dashboard/vendor-list'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Vendor List
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/add-vendor'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Add Vendor
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/vendor-profile/1'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Vendor Profile
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>

              {/* blogs */}
              <li id="sidebar">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex gap-3 cursor-pointer items-center  mb-1 px-8 py-2 text-white hover:bg-gray-100 hover:text-gray-700 ">
                    <span>
                      <BiLogoBlogger />
                    </span>

                    <span className="flex gap-[103px]">
                      <span className="text-sm font-medium"> Blogs </span>
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
                        to={'dashboard/blog-list'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          All Post
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/add-post'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Add Post
                        </span>
                      </NavLink>
                    </li>
                    <li id="sidebar">
                      <NavLink
                        to={'dashboard/blog-category'}
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
                        to={'dashboard/blog-tag'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Tags
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>

              {/* Banner */}
              <li id="sidebar">
                <NavLink
                  to="dashboard/banner"
                  className={({ isActive }) =>
                    `hover:bg-gray-100  hover:text-gray-700  font-medium px-8 py-2  flex items-center gap-3 ${
                      isActive ? 'bg-gray-200 text-gray-700' : 'text-gray-200'
                    }`
                  }
                >
                  <span>
                    <PiSlideshowFill />
                  </span>
                  <span className="text-sm font-medium">Banner</span>
                </NavLink>
              </li>

              {/* Uploded File */}
              <li id="sidebar">
                <NavLink
                  to="dashboard/uploaded-files"
                  className={({ isActive }) =>
                    `hover:bg-gray-100  hover:text-gray-700  font-medium px-8 py-2  flex items-center gap-3 ${
                      isActive ? 'bg-gray-200 text-gray-700' : 'text-gray-200'
                    }`
                  }
                >
                  <span>
                    <RiFileUploadFill />
                  </span>
                  <span className="text-sm font-medium">Uploaded Files</span>
                </NavLink>
              </li>

              {/* Settings */}
              <li id="sidebar">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex gap-3 cursor-pointer items-center  mb-1 px-8 py-2 text-white hover:bg-gray-100 hover:text-gray-700 ">
                    <span>
                      <BiLogoBlogger />
                    </span>

                    <span className="flex gap-[103px]">
                      <span className="text-sm font-medium"> Settings </span>
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
                        to={'dashboard/settings/language'}
                        className="relative flex flex-row items-center h-9 focus:outline-none text-white hover:bg-[#3a3f50] hover:text-gray-100 transition-all duration-300 pl-6"
                      >
                        <span className="inline-flex justify-center items-center ml-8">
                          <FaCircleNotch className="text-[10px]" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Language
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>

              {/* seetings */}
              {/* <li id="sidebar">
                <NavLink
                  to="dashboard/settings"
                  className={({ isActive }) =>
                    `hover:bg-gray-100  hover:text-gray-700  font-medium px-8 py-2  flex items-center gap-3 ${isActive ? 'bg-gray-200 text-gray-700' : 'text-gray-200'
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
