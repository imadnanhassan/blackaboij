import './CustomerSidebar.css'
import { NavLink } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import {
  // FaAddressBook,
  // FaCoins,
  // FaWallet,
  // FaTags,
  FaHeart,
  FaRegStickyNote,
  FaShoppingBag,
  FaUser,
} from 'react-icons/fa'

export default function CustomerSidebarMenu() {
  const navItems = [
    {
      to: 'user/dashboard',
      icon: <MdDashboard size={16} />,
      label: 'Dashboard',
      isNavLink: true,
    },
    // {
    //   to: 'user/wallet',
    //   icon: <FaWallet size={16} />,
    //   label: 'Wallet',
    //   isNavLink: true,
    // },
    {
      to: 'user/orders',
      icon: <FaShoppingBag size={16} />,
      label: 'Orders',
      isNavLink: false,
    },
    {
      to: 'user/wishlist',
      icon: <FaHeart size={16} />,
      label: 'Wish List',
      isNavLink: false,
    },
    {
      to: 'user/profile',
      icon: <FaUser size={16} />,
      label: 'Profile',
      isNavLink: false,
    },
    // {
    //   to: 'user/address',
    //   icon: <FaAddressBook size={16} />,
    //   label: 'Shipping Address',
    //   isNavLink: false,
    // },
    // {
    //   to: 'user/rewards',
    //   icon: <FaCoins size={16} />,
    //   label: 'Rewards Points',
    //   isNavLink: false,
    // },
    // {
    //   to: 'user/coupons',
    //   icon: <FaTags size={16} />,
    //   label: 'Coupons',
    //   isNavLink: false,
    // },
    {
      to: 'user/purcheshistory',
      icon: <FaRegStickyNote size={16} />,
      label: 'Purchase History',
      isNavLink: false,
    },
  ]
  return (
    <ul className="user_dashboard_list">
      {navItems.map((item, index) => (
        <li key={index} className="user_dashboard_item">
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `user_dashboard_link flex items-center ${isActive ? 'active' : ''}`
            }
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
