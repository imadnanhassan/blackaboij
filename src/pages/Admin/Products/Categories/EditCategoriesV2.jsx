import React, { useState } from 'react'
import { GoHome } from 'react-icons/go'
import Select from 'react-select'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import { IoCloseOutline } from 'react-icons/io5'
import Button from '../../../../common/Button/Button'
import { FaPlus } from 'react-icons/fa'

export default function EditCategoriesV2() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoryPhoto, setCategoryPhoto] = useState(null)
  const [categoryPhotoPreview, setCategoryPhotoPreview] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoryCover, setCategoryCover] = useState(null)
  const [categoryCoverPreview, setCategoryCoverPreview] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoryBanners, setCategoryBanners] = useState(null)

  const [uploadedImages, setUploadedImages] = useState([])
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  // Breadcrumbs
  const pageTitle = 'Edit Category'
  const editCategory = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'CategoriesV2' },
  ]

  // File Upload
  const handleCategoryPhoto = e => {
    const file = e.target.files[0]
    setCategoryPhoto(file)
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setCategoryPhotoPreview(imageUrl)
    }
  }
  const handleCencelPhoto = () => {
    setCategoryPhoto(null)
    setCategoryPhotoPreview(null)
  }

  // category cover images
  const handleCategoryCover = e => {
    const file = e.target.files[0]
    setCategoryCover(file)
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setCategoryCoverPreview(imageUrl)
    }
  }
  const handleCencelCover = () => {
    setCategoryCover(null)
    setCategoryCoverPreview(null)
  }

  const handleCategoryBannerFileSelect = event => {
    const files = event.target.files
    setUploadedImages([...uploadedImages, ...files])
  }

  const handleCategoryBannerDragOver = event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'copy'
  }

  const handleCategoryBannerFileDrop = event => {
    event.preventDefault()
    const files = event.dataTransfer.files
    setUploadedImages([...uploadedImages, ...files])
  }

  const handleCancecategoryBannerlUpload = index => {
    const filteredImages = uploadedImages.filter((_, i) => i !== index)
    setUploadedImages(filteredImages)
  }

  // Select 2
  const productCategory2 = [
    { value: 'category', label: 'Product Category' },
    { value: 'gender', label: 'Gender' },
    { value: 'brand', label: 'Brand' },
  ]
  return (
    <div
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={editCategory} />
      <div
        className={`py-5 rounded lg:w-[850px] md:w-[750px] sm:w-[750] w-full mx-auto ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
      >
        <div className="px-5">
          <form>
            <h2 className="text-2xl font-bold mb-4">Edit category</h2>
            <div className="flex justify-end gap-3 items-center mb-5">
              <Button
                text="Update"
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                icon={FaPlus}
              ></Button>

              <Button
                text="Reset"
                className="bg-error-200 py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
              ></Button>
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
            <div className="mb-4 w-[full">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Priority
              </label>
              <input
                type="text"
                name="slug"
                placeholder="Permalink"
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
            <div className="flex gap-5 items-center">
              <div className=" w-full mr:auto ml:auto lg:mt-0 md:mt-2 mb-4 sm:mt-3">
                <div className="relative">
                  <label
                    for="productCategory"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Parent Category
                  </label>
                  <Select
                    id="productCategory2"
                    options={productCategory2}
                    placeholder="Select Option"
                    className="custom-select"
                  />
                </div>
              </div>
            </div>
            {/* Category Icon */}
            <div className="mb-4 w-full">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Category Icon
              </label>
              <input
                type="file"
                id="productName"
                name="productName"
                onChange={handleCategoryPhoto}
                className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
              />
              {categoryPhotoPreview && (
                <div className="mt-4 flex items-center  relative ">
                  <img
                    src={categoryPhotoPreview}
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

            {/* Category Cover */}
            <div className="mb-4 w-full">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Category Cover
              </label>
              <input
                type="file"
                id="productName"
                name="productName"
                onChange={handleCategoryCover}
                className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
              />
              {categoryCoverPreview && (
                <div className="mt-4 flex items-center  relative ">
                  <img
                    src={categoryCoverPreview}
                    alt="Preview"
                    className="w-36 h-36 mr-2 mb-2 border rounded "
                  />
                  <IoCloseOutline
                    onClick={handleCencelCover}
                    className=" text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-[133px] relative -left-6"
                  />
                </div>
              )}
            </div>

            {/* Category Banner */}
            <div className="mb-4 w-full">
              <label
                htmlFor="imageUpload"
                className="block text-sm font-medium mb-2"
              >
                Category banner
              </label>
              <input
                type="file"
                id="category Banner"
                name="categoryBanner"
                className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
                multiple
                onChange={handleCategoryBannerFileSelect}
                onDragOver={handleCategoryBannerDragOver}
                onDrop={handleCategoryBannerFileDrop}
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

                    <IoCloseOutline
                      className=" text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-[87px] relative -left-6"
                      onClick={() => handleCancecategoryBannerlUpload(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
