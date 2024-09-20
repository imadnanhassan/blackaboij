/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { HiMiniChevronDown } from 'react-icons/hi2'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3BottomRight, HiMiniXMark } from 'react-icons/hi2'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoBagOutline } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa6'
import { SearchBtn } from '../../common/Button/Button'
import { CiHeart } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartItems,
  toggleCartDrawer,
} from '../../redux/features/cart/cartSlice'

const FrontendHeader = ({ categoryList }) => {
  const [isSticky, setIsSticky] = useState(false)
  const [isStoreHovered, SetIsStoreHovered] = useState(false)
  const [isAccessoriesHovered, SetIsAccessoriesHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isListMenuOpen, setIsListMenuOpen] = useState(false)
  const [isListMenuOpenWomen, setIsListMenuOpenWomen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)


  console.log(categoryList)

  const handleCartClick = () => {
    dispatch(toggleCartDrawer())
  }

  const setIsHovered = (id, value) => {
    setHoveredCategory(value ? id : null)
  }

  const isHovered = id => hoveredCategory === id

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleListMenu = () => {
    setIsListMenuOpen(!isListMenuOpen)
  }

  const toggleListMenuWomen = () => {
    setIsListMenuOpenWomen(!isListMenuOpenWomen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const iconSize = 22

  return (
    <nav>
      {/* Header Section */}
      <div className="md:block hidden bg-black  w-full">
        <div className="w-full flex justify-center">
          <div className="max-w-xl">
            <p className="text-[#b1b1b1] ">
              {/* Up to 60% OFF on selected items. With an additional 20% */}
            </p>
          </div>
        </div>
        <div className="" style={{ position: 'relative', zIndex: '50' }}>
          <div className={`pt-[20px] w-full bg-black text-white`}>
            <div
              className={`grid grid-cols-3 justify-between items-center px-[50px] pb-[20px]`}
            >
              {/* Search button on the left */}
              <div className="col-span-1">
                <SearchBtn></SearchBtn>
              </div>

              {/* Logo in the middle */}
              <div className="col-span-1 flex items-center justify-center ">
                <Link to="/">
                  <img
                    src="https://i.ibb.co/3sNL27c/logo.png"
                    className="sm:w-[85px]  xl:w-[100px]"
                    alt=""
                  />
                </Link>
              </div>

              {/* Icons on the right */}
              <div className="col-span-1 flex justify-end gap-x-3 relative">
                <Link to="/signin">
                  <span style={{ fontSize: `${iconSize}px` }}>
                    <FaRegUser className="text-white" />
                  </span>
                </Link>
                <button onClick={handleCartClick}>
                  <span style={{ fontSize: `${iconSize}px` }}>
                    <IoBagOutline className="text-white" />

                    {cartItems.length > 0 && (
                      <span className="text-[9px] font-bold absolute top-[-3px] text-black px-[4px] bg-white rounded-full right-[25px]">
                        {cartItems.length}
                      </span>
                    )}
                  </span>
                </button>
                <button>
                  <span style={{ fontSize: `${iconSize}px` }}>
                    <CiHeart className="text-white" />
                    <span className="text-[9px] font-bold absolute top-[-4px] text-black px-[4px] bg-white rounded-full right-[-3px]">
                      {''}
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* Desktop Menu */}
            <div
              className={`flex justify-center list-none text-white border-t-[1px] border-[#6e6b6bdd]`}
            >
              {categoryList.map(category => (
                <Link
                  key={category.id}
                  className={`relative mx-[15px] py-[10px] text-[15px] group ${
                    isHovered(category.id)
                      ? 'border-b-2'
                      : 'border-b-2 border-black'
                  }`}
                  onMouseEnter={() => setIsHovered(category.id, true)}
                  onMouseLeave={() => setIsHovered(category.id, false)}
                >
                  {category.name}
                  <div>
                    <ul
                      className={`absolute pl-6 pr-[250px] py-5 text-[12px] top-[46px] whitespace-nowrap ${
                        isHovered(category.id) ? 'block bg-black' : 'hidden'
                      }`}
                    >
                      {category.slug === 'men' && (
                        <li className="p-[2px]">
                          <Link
                            to="/men-collection"
                            className="uppercase text-[12px]"
                          >
                            Men New Arrivals
                          </Link>
                        </li>
                      )}
                      {category.slug === 'women' && (
                        <li className="p-[2px]">
                          <Link
                            to="/women-collection"
                            className="uppercase text-[12px]"
                          >
                            Women New Arrivals
                          </Link>
                        </li>
                      )}
                      {category.sub_categories.map(subCategory => (
                        <li key={subCategory.id} className="p-[2px]">
                          <Link to={`/category/${subCategory.slug}`}>
                            {subCategory.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}

              <Link to="/accessories">
                <li
                  className={`relative mx-[15px] py-[10px] text-[15px] group ${
                    isAccessoriesHovered ? 'border-b-2' : ''
                  }`}
                  onMouseEnter={() => SetIsAccessoriesHovered(true)}
                  onMouseLeave={() => SetIsAccessoriesHovered(false)}
                >
                  Accessories
                </li>
              </Link>

              <Link to="/store">
                <li
                  className={`relative px-[15px] py-[10px] text-[15px] group ${
                    isStoreHovered ? 'border-b-2' : ''
                  }`}
                  // eslint-disable-next-line no-undef
                  onMouseEnter={() => setIsStoreHovered(true)}
                  onMouseLeave={() => setIsStoreHovered(false)}
                >
                  Store
                </li>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`header md:hidden z-50 block w-full ${isSticky ? 'fixed top-0' : ''} bg-black text-white`}
      >
        <div
          className={`grid grid-cols-3 items-center justify-between py-[20px] px-[20px]`}
        >
          <div className="menu-icon flex items-center justify-start">
            {isMobileMenuOpen ? (
              <HiMiniXMark
                onClick={toggleMobileMenu}
                className="text-[20px] text-white cursor-pointer"
              />
            ) : (
              <HiBars3BottomRight
                onClick={toggleMobileMenu}
                className="text-[20px] text-white cursor-pointer"
              />
            )}
          </div>

          <div className="flex items-center justify-center">
            <Link to="/">
              <img
                src="https://i.ibb.co/3sNL27c/logo.png"
                className="w-[85px] h-[15px]"
                alt=""
              />
            </Link>
          </div>

          <div className="flex relative justify-end">
            <Link to="/signin" className="pr-[6px]">
              <span style={{ fontSize: `18px` }}>
                <FaRegUser className="text-white " />
              </span>
            </Link>
            <Link className="sm:pr-[6px] pr-[12px] relative">
              <span style={{ fontSize: `18px` }}>
                <IoBagOutline className="text-white " />
                <span className="text-[8px] font-bold absolute top-[-3px] sm:top-[-4px] text-black px-[4px] bg-white rounded-full sm:right-[1px] right-[4px]">
                  2
                </span>
              </span>
            </Link>
            <Link className="relative">
              <span style={{ fontSize: `18px` }}>
                <AiOutlineShoppingCart className="text-white " />
                <span className="text-[8px] font-bold absolute top-[-4px] sm:top-[-4px] text-black px-[4px] bg-white rounded-full sm:right-[-3px] right-[-8px]">
                  7
                </span>
              </span>
            </Link>
          </div>
        </div>

        {isMobileMenuOpen && (
          <ul className="absolute w-full bg-black min-h-[60vh] top-[55px] left-0 text-white pl-5 pr-[40px] pt-6 pb-[40px] z-50">
            {categoryList.map(category => (
              <li key={category.id} className="border-b-[1px] py-4 text-[15px]">
                <div className="flex justify-between items-center ">
                  <Link onClick={closeMobileMenu} className="text-white">
                    {category.name}
                  </Link>
                  {category.slug === 'men' && (
                    <HiMiniChevronDown
                      onClick={toggleListMenu}
                      className="cursor-pointer text-[25px]"
                    />
                  )}
                  {category.slug === 'women' && (
                    <HiMiniChevronDown
                      onClick={toggleListMenuWomen}
                      className="cursor-pointer  text-[25px]"
                    />
                  )}
                </div>

                {isListMenuOpen && category.slug === 'men' && (
                  <ul className="mt-3 pl-5 mb-4 text-[15px]  list-disc">
                    <li className="py-[3px]">
                      <Link
                        to="/category/men-new-arrivals"
                        className="text-[12px] uppercase"
                        onClick={closeMobileMenu}
                      >
                        Men New Arrivalszzz
                      </Link>
                    </li>
                    {category.sub_categories.map(subCategory => (
                      <li
                        key={subCategory.id}
                        className="py-[2px] text-[12px] uppercase"
                      >
                        <Link
                          to={`/category/${subCategory.slug}`}
                          onClick={closeMobileMenu}
                        >
                          {subCategory.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {isListMenuOpenWomen && category.slug === 'women' && (
                  <ul className="mt-3 pl-5 text-[15px] list-disc">
                    <li className="py-[2px]">
                      <Link
                        to="/category/women-new-arrivals"
                        className="text-[12px] uppercase"
                        onClick={closeMobileMenu}
                      >
                        Women New Arrivals static
                      </Link>
                    </li>
                    {category.sub_categories.map(subCategory => (
                      <li key={subCategory.id} className="py-[3px] text-[12px]">
                        <Link
                          to={`/${subCategory.slug}`}
                          onClick={closeMobileMenu}
                        >
                          {subCategory.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <div
                className={`flex justify-between items-center border-b-[1px] pb-4 pt-4 text-[15px]`}
              >
                <p>
                  <Link to="/accessories">Accessories </Link>
                </p>
              </div>
            </li>

            <li className="pt-4 text-[15px]">
              <Link to="/store" onClick={closeMobileMenu}>
                Store
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default FrontendHeader
