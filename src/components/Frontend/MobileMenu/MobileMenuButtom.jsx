import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { BiSolidCategoryAlt } from 'react-icons/bi'
import { BsCartFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function MobileMenuButtom() {
  return (
    <div>
      <div className="fixed -bottom-2 left-0 right-0 bg-ftSecoundColor  shadow-lg flex items-center justify-around py-4 lg:hidden mb-2 h-12 z-20">
        <Link to="/" className="text-white">
          <AiFillHome size={24} />
        </Link>
        <Link to="/all  " className="text-white">
          <BiSolidCategoryAlt size={24} />
        </Link>
        <Link to="/checkout">
          <div className="bg-primaryLightColor w-12 h-12 bottom-0 flex items-center justify-center rounded-full relative text-white shadow-lg shadow-slate-600">
            <BsCartFill size={24} />
            <sup className="text-white w-5 h-5 flex items-center justify-center absolute -top-1 -right-1 bg-error-300 rounded-full">
              1
            </sup>
          </div>
        </Link>
        <Link to="/product-video" className="text-white">
          <AiFillYoutube size={24} />
        </Link>
        <div className="relative">
          <Link to={'/user/dashboard'}>
            <FaUser
              size={24}
              className="text-white cursor-pointer"
              // onClick={toggleDropdown}
            />
          </Link>
          {/* {showDropdown && (
            <div className="absolute top-10 -right-3 bg-white shadow-lg rounded-lg py-2">
              {user?.user_phone ? (
                <>
                  <Link
                    to="/user-profile"
                    className="block px-6 py-2 text-gray-800"
                  >
                    Profile
                  </Link>
                  <hr className="my-2" />

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-6 py-2 text-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/sign-in" className="block px-6 py-2 text-gray-800">
                    Login
                  </Link>
                  <Link to="/sign-up" className="block px-6 py-2 text-gray-800">
                    Register
                  </Link>
                </>
              )}
            </div>
          )} */}
        </div>
      </div>
    </div>
  )
}
