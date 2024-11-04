import './CustomerSidebar.css'
import { NavLink } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import { FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa'
import { IoLogOutSharp } from 'react-icons/io5'



export default function CustomerSidebarMenu({ handleLogout }) {
  
  const navItems = [
    {
      to: '/user/dashboard',
      icon: <MdDashboard size={16} />,
      label: 'Dashboard',
      isNavLink: true,
    },
    {
      to: '/user/orders',
      icon: <FaShoppingBag size={16} />,
      label: 'Orders',
      isNavLink: false,
    },
    {
      to: '/user/wishlist',
      icon: <FaHeart size={16} />,
      label: 'Wish List',
      isNavLink: false,
    },
    {
      to: '/user/profile',
      icon: <FaUser size={16} />,
      label: 'Profile',
      isNavLink: false,
    },
    {
      icon: <IoLogOutSharp size={16} />,
      label: 'Logout',
      isNavLink: false,
      onClick: handleLogout,
    },
  ]
  return (
    <ul className="user_dashboard_list">
      {navItems.map((item, index) => (
        <li key={index} className="user_dashboard_item">
          {item.label === 'Logout' ? (
            <button
              className="user_dashboard_link flex items-center"
              onClick={item.onClick}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ) : (
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `user_dashboard_link flex items-center ${isActive ? 'active' : ''}`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  )
}
