import { useState } from 'react'
import { GoHome } from 'react-icons/go'
import { FiEdit } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { toast } from 'react-toastify'
import { FaPlus } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'

import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import ToggleButton from '../../../common/ToggleButton/ToggleButton'
import Button from '../../../common/Button/Button'

export default function BlogCategories() {
  const [uploadedImages, setUploadedImages] = useState([])
  const [isChecked, setIsChecked] = useState(false)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  // Breadcrumbs
  const pageTitle = 'Blog Categories'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Blog' },
    { title: 'Blog Categories' },
  ]
  // Toggle btn
  const handleToggleChange = checked => {
    setIsChecked(checked)
    if (checked) {
      toast.success('😒 Featured categories updated!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }
  // File Upload
  const handleFileSelect = event => {
    const files = event.target.files
    setUploadedImages([...uploadedImages, ...files])
  }

  const handleDragOver = event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  }

  const handleFileDrop = event => {
    event.preventDefault()
    const files = event.dataTransfer.files
    setUploadedImages([...uploadedImages, ...files])
  }

  const handleCancelUpload = index => {
    const filteredImages = uploadedImages.filter((_, i) => i !== index)
    setUploadedImages(filteredImages)
  }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      {/* Breadcrumbs */}
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />

      <div className="lg:flex gap-5">
        {/* category list */}
        <div
          className={`px-5 py-5 rounded lg:w-[60%] w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          {/* search product and addProducts */}
          <div className="flex items-center justify-between gap-6 py-3 ">
            <h2 className="lg:text-2xl text-lg font-bold mb-4">
              Category List
            </h2>
            <div className="search flex items-center gap-5">
              <div
                className={` rounded-md flex items-center justify-between border border-[#4800C9] ${isDarkMode ? 'text-darkColorText ' : 'bg-[#ffffff]'}`}
              >
                <input
                  type="search"
                  className={`py-2 pl-3  bg-transparent w-full focus:outline-none cursor-pointer ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
                  placeholder="Type Name & Enter"
                />
                <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
          </div>

          {/* category table*/}
          <div className="py-5">
            <div className="overflow-x-auto">
              <table
                id="data-table"
                className={`min-w-full border  table-auto  ${isDarkMode ? 'border-darkColorBody' : 'border-gray-200 divide-y divide-gray-200'}`}
              >
                <thead
                  className={`${isDarkMode ? 'bg-[#131A26]' : 'bg-gray-100'}`}
                >
                  <tr>
                    <th className="p-2">
                      <p>#</p>
                    </th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Icon
                    </th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      NAME
                    </th>

                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      CATEGORY
                    </th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      FEARUTED
                    </th>
                    <th
                      className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      ACTIONS
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-2">1</td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap flex gap-2">
                      <div
                        className={`w-[40px] h-[40px] rounded-md p-2 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                      >
                        <img
                          src="https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </td>
                    <td
                      className={`border-l pl-2 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      Women Clothing & Fashion
                    </td>

                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap text-[13px]  ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      Category
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                    >
                      <ToggleButton
                        label="Toggle Button Label"
                        isChecked={isChecked}
                        onChange={handleToggleChange}
                      />
                    </td>

                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor">
                          <FiEdit className=" text-[12px] " />
                        </button>
                        <button className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor">
                          <RiDeleteBin7Line className="text-[12px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* add category */}
        <div
          className={`px-5 py-5 rounded lg:w-[40%] w-full ${isDarkMode ? 'bg-darkColorCard' : 'bg-lightColor'}`}
        >
          <div className="flex gap-5 pb-5">
            <div
              className={` w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
            >
              <div className="px-5">
                <h2 className="lg:text-2xl text-lg font-bold mb-4">
                  Category Information
                </h2>
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                     Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="productName"
                      name="productName"
                      placeholder="Enter product name"
                      className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />
                  </div>
                </div>

                {/* slug */}
                <div className="mb-4 flex gap-4">
                  <div className="flex-1">
                    <label
                      className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      Permalink
                    </label>
                    <input
                      type="text"
                      id="Permalink"
                      name="Permalink"
                      placeholder="Permalink"
                      className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                    />
                  </div>
                </div>

                <div className="mb-4 flex-1">
                  <label
                    htmlFor="vendor1"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Parent Category
                  </label>
                  <select
                    id="vendor1"
                    name="vendor1"
                    className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody border text-darkColorText ' : 'bg-lightColor hover:border-gray-400 border-gray-300 border'}`}
                  >
                    {/* Vendor options */}
                    <option>Parent Category </option>
                    <option>Scheduled</option>
                    <option>Publish</option>
                    <option>Inactive</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                {/* Media */}
                <div className="mb-4">
                  <label
                    htmlFor="imageUpload"
                    className="block text-sm font-medium mb-2"
                  >
                    File Upload
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    name="imageUpload[]"
                    className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
                    multiple
                    onChange={handleFileSelect}
                    onDragOver={handleDragOver}
                    onDrop={handleFileDrop}
                  />
                  <div className="mt-4 flex items-center ">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="flex items-center relative ">
                        <div className="opacity">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Uploaded image ${index}`}
                            className="w-24 h-24 mr-2 mb-2 border rounded "
                          />
                        </div>
                        {/* <div className="absolute flex flex-col justify-center items-center bg-white text-black px-4  left-0 bottom-[8px]">
                          <p className="text-xs">{image.name.slice(0, 4)}</p>
                          <p className="text-xs">{image?.type}</p>
                        </div> */}
                        <IoCloseOutline
                          className=" text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-[87px] relative -left-6"
                          onClick={() => handleCancelUpload(index)}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Meta Title
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    placeholder="Enter product name"
                    className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Meta Description
                  </label>
                  <textarea
                    rows="4"
                    className={`mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText focus:outline-none' : 'text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-primaryColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                  ></textarea>
                </div>
                <Button
                  text="Submit"
                  className="bg-primaryColor py-3 lg:px-20 md:px-20  lg:w-0 md:w-0 sm:w-0 w-full text-center justify-center rounded text-white text-[14px] flex gap-2 items-center"
                  icon={FaPlus}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
