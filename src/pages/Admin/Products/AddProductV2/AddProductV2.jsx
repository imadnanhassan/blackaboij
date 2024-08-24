import React, { useState } from 'react'
import { GoHome } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { FaPlus, FaTimes } from 'react-icons/fa'

import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../../common/Button/Button'

import ReactQuill from 'react-quill'
import Select from 'react-select'
import Barcode from 'react-barcode'
import { categories } from './CategoryData'

export default function AddProductV2() {
  const [forms, setForms] = useState([])
  const [selectedValues, setSelectedValues] = useState({})
  const [description, setDescription] = useState('')
  const [productName, setProductName] = useState('')
  const [isValidProductName, setIsValidProductName] = useState(true)

  const [selectedMainCategory, setSelectedMainCategory] = useState(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState(null)
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const handleButtonClick = e => {
    e.preventDefault()
    setForms([...forms, { id: forms.length }])
  }

  const handleRemoveForm = id => {
    setForms(forms.filter(form => form.id !== id))
    setSelectedValues(prevState => {
      const newState = { ...prevState }
      delete newState[id]
      return newState
    })
  }

  const handleSelectChange = (selectedOption, formId) => {
    setSelectedValues({
      ...selectedValues,
      [formId]: selectedOption,
    })
  }

  const handleMainCategoryChange = e => {
    setSelectedMainCategory(e)
    setSelectedSubCategory(null)
    setSelectedSubSubCategory(null)
  }

  const handleSubCategoryChange = e => {
    setSelectedSubCategory(e)
    setSelectedSubSubCategory(null)
  }

  const handleSubSubCategoryChange = e => {
    setSelectedSubSubCategory(e)
  }

  const mainCategoryOptions = categories.map(category => ({
    value: category.id,
    label: category.name,
  }))

  const subCategoryOptions = selectedMainCategory
    ? categories
        .find(category => category.id === selectedMainCategory.value)
        .subcategories.map(subcategory => ({
          value: subcategory.id,
          label: subcategory.name,
        }))
    : []

  const subSubCategoryOptions = selectedSubCategory
    ? categories
        .find(category => category.id === selectedMainCategory.value)
        .subcategories.find(
          subcategory => subcategory.id === selectedSubCategory.value,
        )
        .subsubcategories.map(subsubcategory => ({
          value: subsubcategory.id,
          label: subsubcategory.name,
        }))
    : []

  // React Quill
  const handleDescriptionChange = value => {
    setDescription(value)
  }

  const productCategory = [
    { value: 'category', label: 'Product Category' },
    { value: 'gender', label: 'Gender' },
    { value: 'brand', label: 'Brand' },
  ]

  const handleChange = e => {
    const value = e.target.value
    setProductName(value)
    setIsValidProductName(value.trim().length > 0)
  }

  // Breadcrumbs
  const pageTitle = 'Add Product'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Add Product' },
  ]
  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <form>
        <div className=" w-full">
          <div
            className={`py-5 rounded px-24 xl:max-w-7xl mx-auto ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
          >
            {/* info */}
            <div>
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  placeholder="Enter product name"
                  onChange={handleChange}
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
              </div>

              <div className="grid grid-cols-3 gap-3 my-4 ">
                <div className="w-full">
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Main Category
                  </label>
                  <div className="relative">
                    <Select
                      options={mainCategoryOptions}
                      value={selectedMainCategory}
                      onChange={handleMainCategoryChange}
                      placeholder="Select Option"
                      className="custom-select"
                    />
                  </div>
                </div>

                {selectedMainCategory && (
                  <div className="w-full">
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      Sub Category
                    </label>
                    <div className="relative">
                      <Select
                        options={subCategoryOptions}
                        value={selectedSubCategory}
                        onChange={handleSubCategoryChange}
                        placeholder="Select Option"
                        className="custom-select"
                      />
                    </div>
                  </div>
                )}

                {selectedSubCategory && (
                  <div className="w-full">
                    <label
                      className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      Sub Sub Category
                    </label>
                    <div className="relative">
                      <Select
                        options={subSubCategoryOptions}
                        value={selectedSubSubCategory}
                        onChange={handleSubSubCategoryChange}
                        placeholder="Select Option"
                        className="custom-select"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className=" w-full mr:auto ml:auto lg:mt-0 md:mt-2 mt-4 sm:mt-3">
                <div className="relative">
                  <label
                    htmlFor="productCategory"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Brand
                  </label>
                  <Select
                    id="productCategory"
                    options={productCategory}
                    placeholder="Select Option"
                    className="custom-select"
                  />
                </div>
              </div>
              {productName && isValidProductName && (
                <div className="mt-4">
                  <label
                    htmlFor="barcode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Barcode
                  </label>
                  <div className="mt-1">
                    <Barcode
                      value={
                        productName.length > 15
                          ? productName.slice(0, 15)
                          : productName
                      }
                      width={1}
                      height={50}
                      fontSize={14}
                    />
                  </div>
                </div>
              )}

              <div className="mt-4">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Product Description
                </label>
                <ReactQuill
                  value={description}
                  onChange={handleDescriptionChange}
                  theme="snow"
                  className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isDarkMode ? '' : ''}`}
                />
              </div>
            </div>
            {/* price */}
            <div>
              <div className="grid grid-cols-3 gap-5">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="productName"
                    className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Unit price <span className="text-error-200">*</span>
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    placeholder="10"
                    className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="productName"
                    className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Quantity <span className="text-error-200">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="10"
                    className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                  />
                </div>

                <div className="mb-4 w-full">
                  <label
                    htmlFor="productName"
                    className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Discount <span className="text-error-200">*</span>
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    placeholder="10"
                    className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                  />
                </div>
              </div>

              <div className="border-t mt-5">
                <p className="text-[13px] text-gray-500 my-3">
                  If you have product variant, you can select{' '}
                </p>

                <Button
                  text="Add Variant"
                  className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                  onClick={e => handleButtonClick(e)}
                  icon={FaPlus}
                ></Button>
                {forms.map(form => (
                  <div
                    key={form.id}
                    className="grid grid-cols-3 gap-3 mt-4 relative border p-4 rounded"
                  >
                    <button
                      onClick={() => handleRemoveForm(form.id)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <FaTimes />
                    </button>
                    <div className="w-full">
                      <label
                        htmlFor={`size-${form.id}`}
                        className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                      >
                        Size
                      </label>
                      <div className="relative">
                        <Select
                          // options={sizeOptions}
                          placeholder="Select Option"
                          className="custom-select"
                          onChange={selectedOption =>
                            handleSelectChange(selectedOption, form.id)
                          }
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor={`color-${form.id}`}
                        className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                      >
                        Color
                      </label>
                      <div className="relative">
                        <Select
                          // options={colorOptions}
                          placeholder="Select Option"
                          className="custom-select"
                          onChange={selectedOption =>
                            handleSelectChange(selectedOption, form.id)
                          }
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor={`campaignPhoto-${form.id}`}
                        className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                      >
                        Sleeve
                      </label>
                      <div className="relative">
                        <Select
                          // options={SleeveOption}
                          placeholder="Select Option"
                          className="custom-select"
                          onChange={selectedOption =>
                            handleSelectChange(selectedOption, form.id)
                          }
                        />
                      </div>
                    </div>
                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`discount-${form.id}`}
                        className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                      >
                        Discount <span className="text-error-200">*</span>
                      </label>
                      <input
                        type="text"
                        id={`discount-${form.id}`}
                        name={`discount-${form.id}`}
                        placeholder="10"
                        className={`form-control mt-2 p-[10px] border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-gray-400'}`}
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <label
                        htmlFor={`productImage-${form.id}`}
                        className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                      >
                        Product Photo
                      </label>
                      <input
                        type="file"
                        id={`productImage-${form.id}`}
                        name={`productImage-${form.id}`}
                        className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 rounded focus:outline-none focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* images */}
            <div>
              <h4 className="text-center py-7">Product Files & Media</h4>
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

            {/* seo */}
            <div>
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
          </div>

          <div className="flex justify-end gap-3 items-center mt-5">
            <Button
              type="submit"
              text="Add Product"
              className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
              icon={FaPlus}
            ></Button>
            <Button
              text=" Save draft"
              className="bg-[#60a5fa] py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
            ></Button>
            <Button
              text="Discard product"
              className="bg-error-200 py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
            ></Button>
          </div>
        </div>
      </form>
    </section>
  )
}
