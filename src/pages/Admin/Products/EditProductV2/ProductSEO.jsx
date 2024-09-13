import React from 'react'
import Button from '../../../../common/Button/Button'

export default function ProductSEO({ isDarkMode }) {
  return (
    <div
      className={`py-5 px-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
    >
      <h2 className="text-2xl font-bold mb-4">Product Information</h2>

      <div className="mb-4">
        <label
          for="metaTitle"
          className="block text-sm font-medium text-gray-700"
        >
          Meta Title
        </label>
        <input
          type="text"
          id="metaTitle"
          name="metaTitle"
          placeholder="Enter meta title"
          className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
        />
      </div>

      <div className="mb-4">
        <label
          for="metaKeyword"
          className="block text-sm font-medium text-gray-700"
        >
          Meta Keywords
        </label>
        <div
          id="metaKeywordContainer"
          className="flex flex-wrap gap-2 mt-1 mb-1"
        ></div>
        <div className="flex flex-col">
          <input
            type="text"
            id="newMetaKeyword"
            placeholder="Enter meta keyword"
            className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
          />
          <Button
            text="Add"
            className="bg-[#60a5fa] mt-2 w-[100px] justify-center py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
          ></Button>
        </div>
      </div>

      <div className="mb-4">
        <label
          for="metaDescription"
          className="block text-sm font-medium text-gray-700"
        >
          Meta Description
        </label>
        <textarea
          id="metaDescription"
          name="metaDescription"
          placeholder="Enter meta description"
          className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
        ></textarea>
      </div>
    </div>
  )
}
