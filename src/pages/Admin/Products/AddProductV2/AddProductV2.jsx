import React, { useState } from 'react'
import { GoHome } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { FaPlus, FaTimes } from 'react-icons/fa'

import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../../common/Button/Button'

import ReactQuill from 'react-quill'
import Select from 'react-select'
import { useGetColorQuery } from '../../../../redux/features/api/color/colorApi'
import { useGetSizeQuery } from '../../../../redux/features/api/attribute/sizeApi'
import { useGetCategoryQuery } from '../../../../redux/features/api/category/categoryApi'
import { Controller, useForm } from 'react-hook-form'
import { useAddProductMutation } from '../../../../redux/features/api/product/productApi'

export default function AddProductV2() {
  const [forms, setForms] = useState([])
  const [selectedValues, setSelectedValues] = useState({})
  // const [description, setDescription] = useState('')
  const [metaKeywords, setMetaKeywords] = useState([])
  const [selectedMainCategory, setSelectedMainCategory] = useState(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState(null)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const { data: color } = useGetColorQuery()
  const { data: size } = useGetSizeQuery()
  const { data: categories } = useGetCategoryQuery()

  // add product
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const [submitProduct] = useAddProductMutation()

  const onSubmit = async data => {
    try {
      // Process gallery images
      const galleryImages = Array.from(data.galleryImages).map(file => {
        return { name: file.name, type: file.type, size: file.size }
      })

      // Process thumbnail image
      const thumbnailImage = {
        name: data.thumbnailImage[0].name,
        type: data.thumbnailImage[0].type,
        size: data.thumbnailImage[0].size,
      }

      // Prepare the final data to send to the API
      const productData = {
        title: data.title,
        mainCategory: data.mainCategory,
        subCategory: data.subCategory,
        description: data.description,
        unitPrice: data.unitPrice,
        quantity: data.quantity || null,
        discount: data.discount || null,
        hasVariants: data.hasVariants || false,
        variantSize: data.variantSize || null,
        variantColor: data.variantColor || null,
        galleryImages,
        thumbnailImage,
        metaTitle: data.metaTitle || '',
        metaDescription: data.metaDescription || '',
        metaKeywords: metaKeywords || '',
      }

      // Submit the product data
      await submitProduct(productData)

      alert('Product added successfully!')
    } catch (error) {
      console.error('Error adding product:', error)
      alert('Failed to add product.')
    }
  }

  // all category
  const categoryList = Array.isArray(categories?.categories)
    ? categories.categories
    : []

  // all size
  const sizeData = size?.sizes || []
  const sizesOption = sizeData.map(size => ({
    value: size.id,
    label: size.name,
  }))

  // all colors
  const colordata = color?.colors || []
  const colorsOption = colordata.map(color => ({
    value: color.id,
    label: color.name,
  }))

  const mainCategoryOptions = categoryList
    .filter(
      category =>
        category.parent_id === null && category.sub_categories?.length > 0,
    )
    .map(category => ({
      value: category.id,
      label: category.parent_name,
    }))
  const subCategoryOptions = selectedMainCategory
    ? categoryList
        .find(category => category.id === selectedMainCategory.value)
        ?.sub_categories.map(subcategory => ({
          value: subcategory.id,
          label: subcategory.name,
        })) || []
    : []

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
    console.log('Selected Option:', selectedOption) // Debugging line
    setSelectedValues({
      ...selectedValues,
      [formId]: selectedOption,
    })
  }

  const handleMainCategoryChange = e => {
    setSelectedMainCategory(e)
    setSelectedSubCategory(null)
  }

  const handleSubCategoryChange = e => {
    setSelectedSubCategory(e)
  }

  // const handleDescriptionChange = value => {
  //   setDescription(value)
  // }

  const handleAddMetaKeyword = () => {
    const keyword = document.getElementById('newMetaKeyword').value.trim()
    if (keyword && !metaKeywords.includes(keyword)) {
      setMetaKeywords([...metaKeywords, keyword])
      document.getElementById('newMetaKeyword').value = ''
    }
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register('title', { required: true })}
                  placeholder="Enter product name"
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
                {errors.title && <span>This field is required</span>}
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
                      {...register('mainCategory', { required: true })}
                    />
                    {errors.mainCategory && <span>This field is required</span>}
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
                        {...register('subCategory', { required: true })}
                      />
                      {errors.subCategory && (
                        <span>This field is required</span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Product Description
                </label>

                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <ReactQuill
                      theme="snow"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Enter product description here..."
                      className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isDarkMode ? '' : ''}`}
                    />
                  )}
                />
                {/* <ReactQuill
                  value={description}
                  onChange={handleDescriptionChange}
                  theme="snow"
                  className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${isDarkMode ? '' : ''}`}
                /> */}
                {errors.description && <span>This field is required</span>}
              </div>
            </div>
            {/* price */}
            <div className="mt-4">
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
                    {...register('unitPrice', { required: true })}
                  />
                  {errors.unitPrice && <span>This field is required</span>}
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
                    {...register('quantity')}
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
                    {...register('discount')}
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
                          options={sizesOption}
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
                          options={colorsOption}
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
                        price <span className="text-error-200">*</span>
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
                    {...register('galleryImages', { required: true })}
                    multiple
                  />
                  {errors.galleryImages && <span>This field is required</span>}
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
                    {...register('thumbnailImage', { required: true })}
                  />
                  {errors.thumbnailImage && <span>This field is required</span>}
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
                  {...register('metaTitle')}
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
                    {...register('metaKeywords')}
                  />
                  <Button
                    text="Add"
                    onClick={handleAddMetaKeyword}
                    className="bg-[#60a5fa] mt-2 w-[100px] justify-center py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                  ></Button>
                  <ul>
                    {metaKeywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                      >
                        {keyword}
                        <button
                          type="button"
                          onClick={() =>
                            setMetaKeywords(
                              metaKeywords.filter((k, i) => i !== index),
                            )
                          }
                          className="ml-2 text-red-500"
                        >
                          <FaTimes />
                        </button>
                      </span>
                    ))}
                  </ul>
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
                  {...register('metaDescription')}
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
