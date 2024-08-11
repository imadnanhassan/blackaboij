import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Topcategory from '../../../assets/img/dashboard/1.webp'
import { HiOutlineEmojiSad } from 'react-icons/hi'
export default function TopCategory() {
  const [selectedTab, setSelectedTab] = useState('All') // State to track the selected tab
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  // Sample data for demonstration
  const topCategoryData = {
    All: [
      { id: 1, category: 'Cellphones & Tabs', price: '$1,494.000' },
      { id: 2, category: 'Laptops', price: '$2,199.000' },
      { id: 3, category: 'Headphones', price: '$299.000' },
      { id: 4, category: 'Smartwatches', price: '$399.000' },
      { id: 5, category: 'Cameras', price: '$899.000' },
    ],
    Today: [
      { id: 4, category: 'Today Category 1', price: '$15' },
      { id: 5, category: 'Today Category 2', price: '$25' },
    ],
    Week: [
      { id: 6, category: 'Week Category 1', price: '$50' },
      { id: 7, category: 'Week Category 2', price: '$40' },
    ],
    Month: [
      //  { id: 8, category: 'Month Category 1', price: '$100' },
      //  { id: 9, category: 'Month Category 2', price: '$80' },
    ],
  }

  // Function to handle tab click
  const handleTabClick = tab => {
    setSelectedTab(tab)    
  }

  return (
    <div
      className={`rounded flex-auto w-full py-5 px-8 shadow-custom lg:mb-0 mb-2 ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
    >
      <p className="text-[#009ef7] text-base mb-4 font-semibold">
        In-house Top Category
      </p>
      <div>
        <p className="text-[#a1a5b3] font-semibold text-sm">By Sales</p>
        

        <div>
          <ul className="flex items-center gap-2 mt-1">
            {Object.keys(topCategoryData).map(tab => (
              <li key={tab}>
                <a
                  className={`text-[12px] px-2 py-[3px] rounded-sm ${selectedTab === tab ? 'bg-primaryColor text-white' : 'hover:bg-primaryColor hover:text-gray-200 transition-all duration-200 text-gray-400'}`}
                  href="#"
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
          <div>
            {topCategoryData[selectedTab].length === 0 ? (
              <span className="flex items-center justify-center gap-3 lg:mt-20">
                <HiOutlineEmojiSad />
                <p className="text-[#a1a5b3] font-semibold text-sm ">
                  No Data Available
                </p>
              </span>
            ) : (
              topCategoryData[selectedTab].map(item => (
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
                      {item.category}
                    </p>
                  </div>
                  <span className="text-error-200 font-semibold text-[0.8125rem]">
                    {item.price}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
