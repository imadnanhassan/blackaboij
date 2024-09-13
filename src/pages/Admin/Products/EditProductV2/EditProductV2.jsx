import React, { useEffect, useState } from 'react'
import { GoHome } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { FaPlus } from 'react-icons/fa'

import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../../common/Button/Button'

import ReactQuill from 'react-quill'

import { useGetColorQuery } from '../../../../redux/features/api/color/colorApi'
import { useGetSizeQuery } from '../../../../redux/features/api/attribute/sizeApi'
import { Controller, useForm } from 'react-hook-form'
import {
  useAddProductMutation,
  useGetProductCategoryListQuery,
  useEditProductQuery,
  useUpdateProductMutation,
  useDeleteProductGalleryImageMutation
} from '../../../../redux/features/api/product/productApi'
import { toast } from 'react-toastify'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { InfinitySpin } from 'react-loader-spinner'
import { baseUrl } from '../../../../hooks/useThumbnailImage'
// import SkeletonLoader from '../../../../common/Skeleton Loader/SkeletonLoader'

export default function EditProductV2() {
  // const [description, setDescription] = useState('')
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedSize, setSelectedSize] = useState([])
  const [selectedColor, setSelectedColor] = useState([])
  const {id} = useParams();
  
  
  const [galleryPreviews, setGalleryPreviews] = useState([])
  const [thumbnailPreview, setThumbnailPreview] = useState(null)

  const { data: categories } = useGetProductCategoryListQuery()
  const { data: size } = useGetSizeQuery()
  const { data: color } = useGetColorQuery()
  const [addProduct] = useAddProductMutation()
  const {data: productInfo, isLoading} = useEditProductQuery(id);
  const [updateProduct, {isLoading: updateIsPending}] = useUpdateProductMutation();
  const [deleteGalleryImage] = useDeleteProductGalleryImageMutation();
  // const [] = 
  
  console.log(productInfo)

  const product = productInfo?.product;
  const navigate = useNavigate();

  
  // Handle gallery image selection
  const handleGalleryChange = e => {
    const files = Array.from(e.target.files)
    const previews = files.map(file => URL.createObjectURL(file))
    setGalleryPreviews(previews)
  }

  // Handle thumbnail image selection
  const handleThumbnailChange = e => {
    const file = e.target.files[0]
    setThumbnailPreview(URL.createObjectURL(file))
  }

  // Remove a single gallery image preview
  const handleGalleryRemove = async (e,index, id = null) => {
    if(id == null){
      
      setGalleryPreviews(prev => prev.filter((_,i) => i != index))
    }else{
        Swal.fire({
          title: 'Are you sure?',
          text: 'Do you really want to delete this product?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'Cancel',
        }).then(async result => {
          if (result.isConfirmed) {
            try {
              const deleteResponse = await deleteGalleryImage(id)
              if (deleteResponse?.data.status == 200) {
                e.target.closest('div').remove();
                toast.success(deleteResponse?.data?.message, {
                  position: 'bottom-right',
                  autoClose: 3000,
                })
              } else if (response?.data.status == 404) {
                toast.error(deleteResponse?.data?.message, {
                  position: 'bottom-right',
                  autoClose: 3000,
                })
              } else if (deleteResponse?.data.status == 402) {
                toast.error(deleteResponse?.data?.message, {
                  position: 'bottom-right',
                  autoClose: 3000,
                })
              } else {
                toast.error('Somthing wrong, please try again ', {
                  position: 'bottom-right',
                  autoClose: 3000,
                })
              }
            } catch (error) {
              toast.error('Failed to delete the product. Please try again.', {
                position: 'bottom-right',
                autoClose: 3000,
              })
            }
          }
        })
    }


  }

  // Remove thumbnail image preview
  const handleThumbnailRemove = () => {
    setThumbnailPreview(null)
  }

  useEffect(() =>{
    const checkProductFound = () => {
      if(product?.status === 404){
        Swal.fire('Error',product.message,'error')
            return navigate('/dashboard/products-list',{
            replace: true
          })
      }
    }

    checkProductFound();
  },[isLoading, product])

  useEffect(() => {
    
    const convertStringIdToArray = (stringId) => {
      const id = JSON.parse(stringId)
      const arr = id?.split(',').map(Number);
      return arr;
    }

    const colorsArrFindId = (datas) => {
      const ids = datas?.map(el => el.color_id);
      return ids
    }
    const sizesArrFindId = (datas) => {
      const ids = datas?.map(el => el.size_id);
      return ids
    }
    
    if(product){
      setSelectedCategories(convertStringIdToArray(product?.category_id))
      setSelectedColors(colorsArrFindId(productInfo?.colors))
      setSelectedSizes(sizesArrFindId(productInfo?.sizes))
    }
  },[product])


  const categoryList = categories?.categories ?? []
  const sizeData = size?.sizes || []
  const colordata = color?.colors || []

  const toggleData = (e, id, type) => {
    if (type == 'category') {
      setSelectedCategories(prev =>
        prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id],
      )
      if (e.target.checked) {
        setSelectedCategory([...selectedCategory, id])
      } else {
        const currentSelectedCategory = selectedCategory.filter(
          item => item != id,
        )
        setSelectedCategory(currentSelectedCategory)
      }
    } else if (type == 'size') {
      setSelectedSizes(prev =>
        prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id],
      )
      if (e.target.checked) {
        setSelectedSize([...selectedSize, id])
      } else {
        const currentSelectedSize = selectedSize.filter(item => item != id)
        setSelectedSize(currentSelectedSize)
      }
    } else if (type == 'color') {
      setSelectedColors(prev =>
        prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id],
      )
      if (e.target.checked) {
        setSelectedColor([...selectedColor, id])
      } else {
        const currentSelectedColor = selectedColor.filter(item => item != id)
        setSelectedColor(currentSelectedColor)
      }
    }
  }
  // console.log(selectedCategory, 'category')
  // console.log(selectedSize, 'size')
  // console.log(selectedColor, 'color')

  // add product
  const { register, handleSubmit, reset, control } = useForm()

  const onSubmit = async data => {
    console.log({
      data,
      selectedCategories,
      selectedColors,
      selectedSizes
    })
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('slug', data.slug)
    formData.append('id',id)
    formData.append('category_id', selectedCategories)
    formData.append('thumbnail_image', data.thumbnail_image[0])
    formData.append('description', data.description)
    formData.append('price', data.price)
    // formData.append('discount_price', data.discount_price)
    formData.append('quantity', data.quantity)
    // formData.append('discount_type', data.discount_type)
    if(data.gallery.length > 0){
      for(let i = 0; i<data.gallery.length;i++){
        formData.append('gallery[]',data.gallery[i])
      }
    }

    for(let c = 0; c<selectedColors.length;c++){
      formData.append('colors[]', selectedColors[c])
    }
    for(let s = 0; s<selectedSizes.length;s++){
      formData.append('sizes[]', selectedSizes[s])
    }
    formData.append('metaDescription',data.metaDescription)
    formData.append('metaTitle',data.metaTitle)


    try {
      const response = await updateProduct(formData)
      console.log(response)
      if(response?.data?.status === 200){
        toast.success(response.data.message)
      }else if(response?.data?.status === 401){
        response.data.errors.forEach(el => toast.error(el))
      }else if(response?.data?.status === 402){
        toast.error(response.data.message)
      }else{
        toast.error('Something went wrong. Please try again.')
      }
      // reset()
    } catch (error) {
      toast.error('Failed to add product.')
    }
  }

 

  // if (isLoading) {
  //   return <SkeletonLoader />
  // }
  const pageTitle = 'Edit Product'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Edit Product' },
  ]
  
  if (isLoading) {
    return (
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    )
  }

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
                  {...register('name', { required: true })}
                  placeholder="Enter product name"
                  defaultValue={product?.name}
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
                {/* {errors.name && <span>This field is required</span>} */}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Slug
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  {...register('slug', { required: true })}
                  placeholder="Enter Product Slug"
                  defaultValue={product?.slug}
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                />
                {/* {errors.name && <span>This field is required</span>} */}
              </div>

              <div className="p-4 border rounded-lg shadow-sm bg-white">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Categories</h3>
                </div>

                <div className="mb-4 border-b border-gray-200">
                  <ul className="flex space-x-4 text-sm font-medium">
                    <li className="cursor-pointer text-blue-600 border-b-2 border-blue-600">
                      All Categories
                    </li>
                  </ul>
                </div>

                <div className="max-h-40 overflow-y-auto">
                  <ul className="space-y-2">
                    {categoryList.length > 0 ? (
                      categoryList.map(category => (
                        <li key={category.id}>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category.id)}
                              onChange={e =>
                                toggleData(e, category.id, 'category')
                              }
                              className="form-checkbox text-blue-600 rounded"
                            />
                            <span className="text-sm text-gray-700">
                              {category.name}
                            </span>
                          </div>

                          {category.sub_categories?.length > 0 && (
                            <ul className="ml-6 mt-2 space-y-1">
                              {category.sub_categories.map(subCategory => (
                                <li
                                  key={subCategory.id}
                                  className="flex items-center space-x-2"
                                >
                                  <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(
                                      subCategory.id,
                                    )}
                                    onChange={e =>
                                      toggleData(e, subCategory.id, 'category')
                                    }
                                    className="form-checkbox text-blue-600 rounded"
                                  />
                                  <span className="text-sm text-gray-700">
                                    {subCategory.name}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-gray-500">
                        No categories available
                      </li>
                    )}
                  </ul>
                </div>
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
                  defaultValue={product?.product_description}
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
              </div>
            </div>
            {/* price */}
            <div className="mt-4">
              <h4 className="text-center py-7">Product Price</h4>
              <div className="grid grid-cols-3 gap-5">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="productName"
                    className={`block text-[12px] font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Unit price <span className="text-error-200">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="10"
                    defaultValue={product?.price}
                    className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                    {...register('price', { required: true })}
                  />
                  {/* {errors.unitPrice && <span>This field is required</span>} */}
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
                    defaultValue={product?.quantity}
                    className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                    {...register('quantity')}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-4 border rounded-lg shadow-sm bg-white w-full">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Sizes</h3>
                  </div>

                  <div className="mb-4 border-b border-gray-200">
                    <ul className="flex space-x-4 text-sm font-medium">
                      <li className="cursor-pointer text-primaryColor border-b-2 border-primaryColor">
                        All Sizes
                      </li>
                    </ul>
                  </div>

                  <div className="max-h-40 overflow-y-auto">
                    <ul className="space-y-2">
                      {sizeData.length > 0 ? (
                        sizeData.map(size => (
                          <li
                            key={size.id}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              checked={selectedSizes.includes(size.id)}
                              onChange={e => toggleData(e, size.id, 'size')}
                              className="form-checkbox text-primaryColor rounded"
                            />
                            <span className="text-sm text-gray-700">
                              {size.name}
                            </span>
                          </li>
                        ))
                      ) : (
                        <li className="text-sm text-gray-500">
                          No sizes available
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="p-4 border rounded-lg shadow-sm bg-white w-full">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Colors</h3>
                  </div>

                  <div className="mb-4 border-b border-gray-200">
                    <ul className="flex space-x-4 text-sm font-medium">
                      <li className="cursor-pointer text-primaryColor border-b-2 border-primaryColor">
                        All Colors
                      </li>
                    </ul>
                  </div>

                  <div className="max-h-40 overflow-y-auto">
                    <ul className="space-y-2">
                      {colordata.length > 0 ? (
                        colordata.map(color => (
                          <li
                            key={color.id}
                            className={`flex items-center space-x-2 ${
                              selectedColors.includes(color.id)
                                ? 'bg-green-100 p-2 rounded'
                                : 'bg-gray-100 p-2 rounded'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={selectedColors.includes(color.id)}
                              onChange={e => toggleData(e, color.id, 'color')}
                              className="form-checkbox text-primaryColor rounded"
                            />
                            <div
                              className="w-6 h-6 rounded-full"
                              style={{ backgroundColor: color.code }}
                            ></div>
                            <div>
                              <span className="text-sm text-gray-700">
                                {color.name}
                              </span>
                            </div>
                          </li>
                        ))
                      ) : (
                        <li className="text-sm text-gray-500">
                          No colors available
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* images */}
            <div>
              <h4 className="text-center py-7">Product Files & Media</h4>
              <div className="flex gap-4">
                <div className="mb-4 w-full">
                  <label
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Gallery Images (600x600)
                  </label>
                  <input
                    type="file"
                    className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 rounded focus:outline-none focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
                    {...register('gallery')}
                    multiple
                    onChange={handleGalleryChange}
                  />
                  <div className="grid grid-cols-5 gap-2 mt-2">
                    {galleryPreviews.map((preview, index) => (
                      <div key={index} className="relative ">
                        <img
                          src={preview}
                          alt={`Gallery Image ${index + 1}`}
                          className="w-24 h-24 object-cover rounded"
                        />
                        <button
                          type="button"
                          onClick={(e) => handleGalleryRemove(e,index)}
                          className="absolute top-0 right-0 px-2 bg-red-500 text-white rounded-[26%]"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                    {
                      galleryPreviews.length == 0 ? productInfo?.galleries?.map((image, index) => (
                        <div key={index} className="relative ">
                          <img
                            src={`${baseUrl}/products/${image?.name}`}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-24 h-24 object-cover rounded"
                          />
                          <button
                            type="button"
                            onClick={(e) => handleGalleryRemove(e,index,image?.id)}
                            className="absolute top-0 right-0 px-2 bg-red-500 text-white rounded-[26%]"
                          >
                            &times;
                          </button>
                      </div>
                      )) : ''
                    }
                  </div>
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
                    {...register('thumbnail_image')}
                    onChange={handleThumbnailChange}
                  />
                  {thumbnailPreview && (
                    <div className="relative mt-2">
                      <img
                        src={thumbnailPreview}
                        alt="Thumbnail Preview"
                        className="w-24 h-24 object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={handleThumbnailRemove}
                        className="absolute top-0 left-[70px] px-2 bg-red-500 text-white rounded-[26%]"
                      >
                        &times;
                      </button>
                    </div>
                  )}
                  {
                    !thumbnailPreview && (
                      <div className="relative mt-2">
                        <img
                          src={`${baseUrl}/products/${product?.thumbnail_image}`}
                          alt="Thumbnail Preview"
                          className="w-24 h-24 object-cover rounded"
                        />
                      </div>
                    )
                  }
                </div>
              </div>
            </div>

            {/* seo */}
            <div>
              <h4 className="text-center py-7">Product SEO</h4>
              <div className="mb-4">
                <label
                  htmlFor="metaTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Meta Title
                </label>
                <input
                  type="text"
                  id="metaTitle"
                  name="metaTitle"
                  placeholder="Enter meta title"
                  defaultValue={product?.meta_title}
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                  {...register('metaTitle')}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="metaDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Meta Description
                </label>
                <textarea
                  id="metaDescription"
                  name="metaDescription"
                  placeholder="Enter meta description"
                  defaultValue={product?.meta_description}
                  className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
                  {...register('metaDescription')}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 items-center mt-5">
            <Button
              type="submit"
              text="Updated Product"
              className={`py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center bg-primaryColor`}
              icon={FaPlus}
            ></Button>
          </div>
        </div>
      </form>
    </section>
  )
}
