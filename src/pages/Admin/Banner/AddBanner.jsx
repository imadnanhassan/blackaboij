import React, { useState } from 'react'
import Button from '../../../common/Button/Button'
import { FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { IoCloseOutline } from 'react-icons/io5'

export default function AddBanner() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bannerPhoto, setBannerPhoto] = useState(null)
  const [bannerPhotoPreview, setBannerPhotoPreview] = useState(null)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  // banner images
  const handleBannerPhoto = e => {
    const file = e.target.files[0]
    setBannerPhoto(file)
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setBannerPhotoPreview(imageUrl)
    }
  }
  const handleCencelPhoto = () => {
    setBannerPhoto(null)
    setBannerPhotoPreview(null)
  }
  return (
    <section className="px-10 py-5">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Create New Banner Information
        </h2>
        <div className="flex gap-5">
          <div className="mb-4 w-[50%]">
            <label
              htmlFor="productName"
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Banner Title"
              className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
            />
          </div>
          <div className="mb-4 w-[50%]">
            <label
              htmlFor="productName"
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Permalink
            </label>
            <input
              type="text"
              name="slug"
              placeholder="Permalink"
              className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="mb-4 lg:w-1/2">
            <label
              htmlFor="priority"
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Priority
            </label>
            <input
              type="text"
              id="priority"
              name="priority"
              placeholder="Enter Priority"
              className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
            />
          </div>
          <div className="mb-4 lg:w-1/2">
            <label
              htmlFor="priority"
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Status
            </label>
            <select
              className={`form-control mt-1 p-3  border block  w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
            >
              <option>Select Option</option>
              <option>Active</option>
              <option>In Active</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="mb-4 lg:w-1/2">
            <label
              htmlFor="productName"
              className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Campaign Photo
            </label>
            <input
              type="file"
              id="productName"
              name="productName"
              onChange={handleBannerPhoto}
              className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
            />
            {bannerPhotoPreview && (
              <div className="mt-4 flex items-center  relative ">
                <img
                  src={bannerPhotoPreview}
                  alt="Preview"
                  className="w-36 h-36 mr-2 mb-2 border rounded "
                />
                <IoCloseOutline
                  onClick={handleCencelPhoto}
                  className=" text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-[133px] relative -left-6"
                />
              </div>
            )}
          </div>

          <div className="mb-4 lg:w-1/2">
            <label
              htmlFor="priority"
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Status
            </label>
            <input
              type="text"
              id="priority"
              name="priority"
              placeholder="https://demo.easyshop.com/ecommerce/flash-deals"
              className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
          >
            Description <span className="text-Vpink-700">Optional</span>
          </label>
          <textarea
            rows="4"
            placeholder="Message description"
            className={`mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText focus:outline-none' : 'text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-primaryColor hover:border-gray-400 border-gray-300'}`}
          ></textarea>
        </div>
      </div>

      {/* publish btn */}
      <div className="flex justify-end gap-3 items-center mb-5">
        <Button
          text="Create Banner"
          className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
          icon={FaPlus}
        ></Button>

        <Button
          text="Discard Banner"
          className="bg-error-200 py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
        ></Button>
      </div>
    </section>
  )
}

//
