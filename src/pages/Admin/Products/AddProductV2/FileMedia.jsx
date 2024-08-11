import React from 'react'

export default function FileMedia({ isDarkMode }) {
  return (
    <div>
      <h4 className='text-center py-7'>Product Files & Media</h4>
      <div className="flex gap-4 ">
        <div className="mb-4 w-full">
          <label
            className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
          >
            Gallery Images (600x600)
          </label>
          <input
            type="file"
            className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 rounded focus:outline-none focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
          >
            Thumbnail Image (300x300)
          </label>
          <input
            type="file"
            className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 rounded focus:outline-none focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
          />
        </div>
      </div>
    </div>
  )
}
