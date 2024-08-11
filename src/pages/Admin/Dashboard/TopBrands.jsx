import React from 'react'
import { useSelector } from 'react-redux'
import Topcategory from '../../../assets/img/dashboard/1.webp'
export default function TopBrands() {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const topBrand = [
    { id: 1, brand: 'Samsung', price: '$1,494.000' },
    { id: 2, brand: 'Polo', price: '$2,199.000' },
    { id: 3, brand: 'Dell', price: '$299.000' },
    { id: 4, brand: 'Rolex', price: '$399.000' },
    { id: 5, brand: 'Calvin Klein', price: '$899.000' },
  ]
  return (
    <div
      className={`rounded flex-auto  w-full py-5 px-8 shadow-custom lg:mb-0 mb-2 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
    >
      <p className="text-[#f0416c] text-base mb-4 font-semibold">
        In-house Top Brands
      </p>
      <div>
        <p className="text-[#a1a5b3] font-semibold text-sm">By Sales</p>
        <ul className="flex items-center gap-2 mt-1">
          <li>
            <a
              className="text-[12px] bg-[#f0416c] px-2 py-[3px] rounded-sm text-white"
              href="#"
            >
              All
            </a>
          </li>
          <li>
            <a
              className="text-[12px] hover:bg-[#f0416c] hover:text-gray-200 transition-all duration-200 text-gray-400 px-2 py-[3px] rounded-sm "
              href="#"
            >
              Today
            </a>
          </li>
          <li>
            <a
              className="text-[12px] hover:bg-[#f0416c] hover:text-gray-200 transition-all duration-200 text-gray-400 px-2 py-[3px] rounded-sm "
              href="#"
            >
              Week
            </a>
          </li>
          <li>
            <a
              className="text-[12px] hover:bg-[#f0416c] hover:text-gray-200 transition-all duration-200 text-gray-400 px-2 py-[3px] rounded-sm "
              href="#"
            >
              Month
            </a>
          </li>
        </ul>
        <div>
          {topBrand.map(item => (
            <div
              key={item.id}
              className="mt-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={Topcategory}
                  alt=""
                  className="w-[45px] h-[45px] rounded"
                />
                <p
                  className={`font-semibold text-[0.8125rem] ${isDarkMode ? ' text-darkColorText' : ' text-gray-700 '}`}
                >
                  {item.brand}
                </p>
              </div>
              <span className="text-error-200 font-semibold text-[0.8125rem]">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
