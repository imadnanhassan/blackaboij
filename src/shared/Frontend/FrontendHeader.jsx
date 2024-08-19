// import React from 'react'

// export default function FrontendHeader() {
//   return <header className="lg:block">header</header>
// }

import { HiMiniChevronUp } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { HiMiniXMark } from 'react-icons/hi2'
import { HiMiniChevronDown } from 'react-icons/hi2'
import { FaInstagram, FaPinterest } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoBagOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa6'
import { Fade } from 'react-awesome-reveal'
import { SearchBtn } from '../../common/Button/Button'

const FrontendHeader = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMenHovered, setIsMenHovered] = useState(false)
  const [isWomenHovered, setIsWomenHovered] = useState(false)
  const [isSignInHovered, SetIsSignInHovered] = useState(false)
  const [isSignUpHovered, SetIsSignUpHovered] = useState(false)
  const [isStoreHovered, SetIsStoreHovered] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [isAccessoriesHovered, SetIsAccessoriesHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isListMenuOpen, setIsListMenuOpen] = useState(false)
  const [isListMenuOpenWomen, setIsListMenuOpenWomen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsSticky(scrollPosition > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  const toggleListMenu = () => {
    setIsListMenuOpen(!isListMenuOpen)
  }

  const toggleListMenuWomen = () => {
    setIsListMenuOpenWomen(!isListMenuOpenWomen)
  }

  // };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const iconSize = 19

  return (
    <nav>
      {/* Header Section */}
      <div className="md:block hidden bg-black  w-full">
        <div className="w-full flex justify-center">
          <div className="max-w-xl">
            <p className="text-[#b1b1b1] py-2">
              {/* Up to 60% OFF on selected items. With an additional 20% */}
            </p>
          </div>
        </div>
        <div
          className=""
          style={{
            position: 'relative',
            zIndex: '50',
          }}
        >
          <div
            className={`pt-[20px]   w-full fixed top-0 bg-black text-white transition-colors duration-500 ease-in-out `}
          >
            <div
              className={`grid grid-cols-3 justify-between items-center px-[50px] pb-[20px]`}
            >
              {/* Search button on the left */}
              <div className="col-span-1">
                <SearchBtn></SearchBtn>
              </div>

              {/* Logo in the middle */}
              <div className="col-span-1 flex items-center justify-center">
                <Link to="/">
                  <img
                    src="https://i.ibb.co/3sNL27c/logo.png"
                    className="sm:w-[85px] xl:w-[100px]"
                    alt=""
                  />
                </Link>
              </div>

              {/* Icons on the right */}
              <div className="col-span-1 flex justify-end gap-x-3 relative">
                <Link>
                  <span style={{ fontSize: `${iconSize}px` }}>
                    <FaRegUser className="text-white" />
                  </span>
                </Link>
                <Link>
                  <span style={{ fontSize: `${iconSize}px` }}>
                    <IoBagOutline className="text-white" />
                    <span className="text-[9px] font-bold absolute top-[-3px] text-black px-[4px] bg-white rounded-full right-[25px]">
                      1
                    </span>
                  </span>
                </Link>
                <Link>
                  <span style={{ fontSize: `${iconSize}px` }}>
                    <AiOutlineShoppingCart className="text-white" />
                    <span className="text-[9px] font-bold absolute top-[-4px] text-black px-[4px] bg-white rounded-full right-[-3px]">
                      4
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            {/* desktop  list items */}
            <div
              className={`flex   justify-center   list-none font-custom text-[#b1b1b1]  border-b border-t border-[#383838] bg-black `}
            >
              <Link
                to="/womens"
                className={` text-white relative px-[15px] py-[10px] text-[15px]  border-b-2-transparent  group  ${isMenHovered ? 'text-white border-b-2 ' : ''}`}
                onMouseEnter={() => setIsMenHovered(true)}
                onMouseLeave={() => setIsMenHovered(false)}
              >
                MEN
                <Fade direction="left">
                  <ul
                    className={`absolute pl-6 pr-[250px] text-[12px] top-[46px] whitespace-nowrap   ${isMenHovered ? 'block bg-black' : 'hidden'}`}
                  >
                    <ul className="py-[15px] font-semibold">
                      <Link to="/womens">MEN NEW ARRIVALS</Link>
                    </ul>
                    <li className="pt-[5px]">
                      <Link to="/womenTees">TEES</Link>
                    </li>
                    <li className="pt-[5px]">
                      <Link to="/womensHoodies">HOODIES AND SWEATERS</Link>
                    </li>
                    <li className="pt-[5px]">
                      <Link to="/womenPants">PANTS</Link>
                    </li>
                    <li className="pt-[5px]">
                      <Link to="/womenOutwear">OUTWEAR</Link>
                    </li>
                    <li className="pt-[5px]">
                      <Link to="#">SHOES</Link>
                    </li>
                    <li className="pt-[15px] pb-10 font-semibold">
                      <Link to="/accessories">ACCESORIES</Link>
                    </li>
                  </ul>
                </Fade>
              </Link>

              <Link
                to="/womens"
                className={` text-white relative px-[15px] py-[10px] text-[15px]  border-b-2 border-black  group  ${isWomenHovered ? 'text-white border-b-2  border-white' : ''}`}
                onMouseEnter={() => setIsWomenHovered(true)}
                onMouseLeave={() => setIsWomenHovered(false)}
              >
                WOMEN
                <Fade direction="left">
                  <ul
                    className={`absolute pl-6 pr-[250px] text-[12px] top-[46px] whitespace-nowrap   ${isWomenHovered ? 'block bg-black' : 'hidden'}`}
                  >
                    <ul className="py-[15px] font-semibold">
                      <Link to="/womens">WOMEN NEW ARRIVALS</Link>
                    </ul>
                    <li className="pt-[5px]">
                      <Link to="/womenTees">TEES</Link>
                    </li>
                    <li className="pt-[5px]">
                      <Link to="/womensHoodies">HOODIES AND SWEATERS</Link>
                    </li>
                    <li className="pt-[5px]">
                      <Link to="/womenPants">PANTS</Link>
                    </li>
                    <li className="pt-[5px]">
                      <Link to="/womenOutwear">OUTWEAR</Link>
                    </li>
                    <li className="pt-[5px]">
                      <Link to="#">SHOES</Link>
                    </li>
                    <li className="pt-[15px] pb-10 font-semibold">
                      <Link to="/accessories">ACCESORIES</Link>
                    </li>
                  </ul>
                </Fade>
              </Link>

              <Link to="/accessories">
                <li
                  className={`relative px-[15px] py-[10px] text-white text-[15px] border-b-2-transparent group ${isAccessoriesHovered ? 'text-white  border-b-2' : ''}`}
                  onMouseEnter={() => SetIsAccessoriesHovered(true)}
                  onMouseLeave={() => SetIsAccessoriesHovered(false)}
                >
                  ACCESSORIES
                </li>
              </Link>

              <Link to="/store">
                <li
                  className={`relative px-[15px] py-[10px] text-white text-[15px] border-b-2-transparent group  ${isStoreHovered ? 'text-white  border-b-2' : ''}`}
                  onMouseEnter={() => SetIsStoreHovered(true)}
                  onMouseLeave={() => SetIsStoreHovered(false)}
                >
                  STORE
                </li>
              </Link>

              <Link to="/signin">
                <li
                  className={`relative px-[15px] py-[10px] text-[15px] text-white border-b-2-transparent group ${isSignInHovered ? 'text-white  border-b-2' : ''}`}
                  onMouseEnter={() => SetIsSignInHovered(true)}
                  onMouseLeave={() => SetIsSignInHovered(false)}
                >
                  SIGN IN
                </li>
              </Link>

              <Link to="/signUp">
                <li
                  className={`relative px-[15px] py-[10px] text-[15px] text-white border-b-2-transparent group ${isSignUpHovered ? 'text-white  border-b-2' : ''}`}
                  onMouseEnter={() => SetIsSignUpHovered(true)}
                  onMouseLeave={() => SetIsSignUpHovered(false)}
                >
                  SIGN UP
                </li>
              </Link>
            </div>

            
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={`header md:hidden  block w-full ${isSticky ? 'fixed top-0 z-50' : ''} bg-black text-white transition-colors duration-500 ease-in-out z-50 `}
      >
        <div
          className={`grid grid-cols-3 items-center z-50  py-[18px]   px-[20px] font-custom  relative ${isMobileMenuOpen ? 'bg-black z-100  ' : ''}  `}
        >
          <div className="   flex  relative">
            <Link className="pr-[6px]">
              <span style={{ fontSize: `18px` }}>
                {' '}
                <FaRegUser className="text-white " />
              </span>
            </Link>
            <Link className="pr-[6px] relative">
              <span style={{ fontSize: `18px` }}>
                {' '}
                <IoBagOutline className="text-white " />
                <span className="text-[9px] font-bold absolute md:top-[-3px] top-[-4px] text-black px-[4px] bg-white rounded-full right-[1px]">
                  2
                </span>
              </span>
            </Link>
            <Link className="relative">
              <span style={{ fontSize: `18px` }}>
                {' '}
                <AiOutlineShoppingCart className="text-white " />
                <span className="text-[9px] font-bold absolute top-[-4px] text-black px-[4px] bg-white rounded-full right-[-3px]">
                  2
                </span>
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <Link to="/">
              {' '}
              <img
                src="https://i.ibb.co/3sNL27c/logo.png"
                className="w-[85px] h-[15px] "
                alt=""
              />
            </Link>
          </div>
          <div className="menu-icon flex items-center justify-end">
            {isMobileMenuOpen ? (
              <HiMiniXMark
                onClick={toggleMobileMenu}
                className=" text-[20px] text-white"
              ></HiMiniXMark>
            ) : (
              <HiBars3BottomRight
                onClick={toggleMobileMenu}
                className=" text-[20px] text-white"
              ></HiBars3BottomRight>
            )}
          </div>

          {/* mobilemenuopen code here  */}
          {isMobileMenuOpen && (
            <div
              className={`bg-black  text-white absolute left-0 top-10 w-full  h-screen px-5 `}
            >
              <ul className="flex flex-col   py-4 space-y-4">
                <li>
                  <div className={`flex justify-between items-center `}>
                    <p>MEN</p>
                    <p>
                      {isListMenuOpen ? (
                        <HiMiniChevronUp
                          onClick={toggleListMenu}
                          className=" text-[20px] text-white"
                        />
                      ) : (
                        <HiMiniChevronDown
                          onClick={toggleListMenu}
                          className=" text-[20px] text-white"
                        />
                      )}
                    </p>
                  </div>
                  {isListMenuOpen ? (
                    <ul className={`pl-[5px] text-[11px] space-y-[5px] `}>
                      <li className="mt-[10px]">
                        <Link onClick={closeMobileMenu} to="/menCollections">
                          NEW COLLECTIONS
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMobileMenu} to="/tees">
                          TEES
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeMobileMenu}
                          to="/hoodiesAndSweeters"
                        >
                          HOODIES AND SWEATERS
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMobileMenu} to="/pants">
                          PANTS
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMobileMenu} to="/outwear">
                          OUTWEARS
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMobileMenu} to="/">
                          SHOES
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMobileMenu} to="/accessories">
                          ACCESSORIES
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ''
                  )}
                </li>
                <li>
                  <div className={`flex justify-between items-center `}>
                    <p>WOMEN</p>
                    <p>
                      {isListMenuOpenWomen ? (
                        <HiMiniChevronUp
                          onClick={toggleListMenuWomen}
                          className=" text-[20px] text-white"
                        />
                      ) : (
                        <HiMiniChevronDown
                          onClick={toggleListMenuWomen}
                          className=" text-[20px] text-white"
                        />
                      )}
                    </p>
                  </div>
                  {isListMenuOpenWomen ? (
                    <ul className={`pl-[5px] text-[11px] space-y-[5px] `}>
                      <li className="mt-[10px]">
                        <Link onClick={closeMobileMenu} to="/womens">
                          NEW COLLECTIONS
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMobileMenu} to="/womenTees">
                          TEES
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMobileMenu} to="/womensHoodies">
                          HOODIES AND SWEATERS
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMobileMenu} to="/womenPants">
                          PANTS
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMobileMenu} to="/womenOutwear">
                          OUTWEARS
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMobileMenu} to="/">
                          SHOES
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeMobileMenu} to="/accessories">
                          ACCESSORIES
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ''
                  )}
                </li>

                <li className="relative">
                  <Link to="/allProducts" className="text-white">
                    SALES
                  </Link>
                </li>
                <li className="relative">
                  <Link to="/store" className="text-white">
                    STORE
                  </Link>
                </li>
                <li className="relative">
                  <Link to="/accessories" className="text-white">
                    ACCESSORIES
                  </Link>
                </li>
              </ul>
              {/* footer icons */}
              <div className=" flex justify-center items-center space-x-5 pt-[20px]  ">
                <span style={{ fontSize: `${iconSize}px` }}>
                  {' '}
                  <FaFacebook className="text-white  " />
                </span>
                <span style={{ fontSize: `${iconSize}px` }}>
                  {' '}
                  <FaPinterest className="text-white " />
                </span>
                <span style={{ fontSize: `${iconSize}px` }}>
                  {' '}
                  <FaInstagram className="text-white " />
                </span>
                <span style={{ fontSize: `${iconSize}px` }}>
                  {' '}
                  <IoLogoYoutube className="text-white " />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default FrontendHeader
