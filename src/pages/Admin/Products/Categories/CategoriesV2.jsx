import { GoHome } from 'react-icons/go'
import { FaPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { IoCloseOutline } from 'react-icons/io5'
import { useState } from 'react'
import Select from 'react-select'
import Button from '../../../../common/Button/Button'
import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import ToggleButton from '../../../../common/ToggleButton/ToggleButton'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import {
  useDeleteCategoryMutation,
  // useAddCategoryMutation,
  useGetCategoryQuery,
} from '../../../../redux/features/api/category/categoryApi'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function CategoriesV2() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoryPhoto, setCategoryPhoto] = useState(null)
  const [categoryPhotoPreview, setCategoryPhotoPreview] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoryCover, setCategoryCover] = useState(null)
  const [categoryCoverPreview, setCategoryCoverPreview] = useState(null)
  const [uploadedImages, setUploadedImages] = useState(null)
  const [isChecked, setIsChecked] = useState(false)

  // const [addCategory] = useAddCategoryMutation()
  const { data: category, isLoading, refetch } = useGetCategoryQuery()
  console.log('category', category)
  const [deleteCategory] = useDeleteCategoryMutation()

  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  let userD = JSON.parse(localStorage?.getItem('userData'))
  let token = userD?.token

  // Breadcrumbs
  const pageTitle = 'Categories'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'CategoriesV2' },
  ]

  const handleCategoryPhoto = e => {
    const file = e.target.files[0]
    setCategoryPhoto(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCategoryPhotoPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCategoryThumbnail = e => {
    const file = e.target.files[0]
    setCategoryCover(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCategoryCoverPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCategoryBannerFileSelect = e => {
    console.log('e', e)
    const file = e.target.files[0]
    setUploadedImages(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImages(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // const handleCancelCategoryBannerUpload = index => {
  //   setUploadedImages(prevImages => prevImages.filter((_, i) => i !== index))
  // }

  const handleToggleChangeForCategory = categoryId => {
    return checked => {
      setIsChecked(checked)
      if (checked) {
        toast.success(`😒 Featured category ${categoryId} updated!`, {
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
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async data => {
    const preparedData = {
      ...data,
      image: data?.image[0],
      banner: data?.banner[0],
      icon: data?.icon[0],
    }

    console.log('preparedData', preparedData)
    try {
      // const response = await addCategory(preparedData);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/admins/categories/store`,
        preparedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      console.log(response)

      if (response?.data?.message) {
        toast.success(`${response?.data?.message}`, {
          position: 'bottom-right',
          autoClose: 3000,
        })
      }
      reset()
    } catch (error) {
      toast.error('Failed to add category. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }

  const handleDeleteUnit = async categorySlug => {
    console.log(categorySlug)
    try {
      const response = await deleteCategory(categorySlug)
      if (response) {
        toast.success(`${response?.data?.message}`, {
          position: 'bottom-right',
          autoClose: 3000,
        })
      }
      refetch()
    } catch (error) {
      console.error('Error deleting unit:', error)
    }
  }

  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <div className="lg:flex gap-5">
        <div
          className={`px-5 py-5 rounded lg:w-[40%] w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="flex gap-5 pb-5">
            <div
              className={` w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="px-5">
                  <h2 className="text-2xl font-bold mb-4">Add Category</h2>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      Category Name<span>*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        {...register('name', { required: true })}
                        placeholder="Enter category name"
                        className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                      />
                      {errors.categoryName && (
                        <span className="text-red-500">
                          Category name is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="priority"
                      className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      Priority<span>*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="priority"
                        name="priority"
                        {...register('priority', { required: true })}
                        placeholder="Enter Priority"
                        className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                      />
                    </div>
                  </div>
                  <div className="mb-4 hidden">
                    <label
                      htmlFor="priority"
                      className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      status<span>*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="priority"
                        name="status"
                        defaultValue="1"
                        {...register('status', { required: true })}
                        className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                      />
                    </div>
                  </div>

                  <div className=" w-full mr:auto ml:auto lg:mt-0 md:mt-2 mb-4 sm:mt-3">
                    <div className="relative">
                      <label
                        htmlFor="parent_id"
                        className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                      >
                        Parrent Category
                      </label>
                      <Select
                        options={category}
                        getOptionLabel={x => JSON.parse(x?.name)['en']}
                        getOptionValue={x => x?.id}
                        defaultValue={{
                          name: JSON.stringify({ en: 'No Parent' }),
                          id: null,
                        }}
                      />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <label
                      htmlFor="icon"
                      className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      Icon
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      {...register('icon')}
                      name="icon"
                      onChange={handleCategoryPhoto}
                      className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
                    />
                    {categoryPhotoPreview && (
                      <div className="mt-4 flex items-center relative">
                        <img
                          src={categoryPhotoPreview}
                          alt="Preview"
                          className="w-36 h-36 mr-2 mb-2 border rounded"
                        />
                        <IoCloseOutline
                          onClick={() => setCategoryPhotoPreview(null)}
                          className="text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-36 -ml-6"
                        />
                      </div>
                    )}
                  </div>

                  {/* category Cover images */}
                  <div className="mb-4">
                    <label
                      htmlFor="image"
                      className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      Thumbnail (72x72)<span>*</span>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="categoryThumbnail"
                      {...register('image')}
                      name="image"
                      onChange={handleCategoryThumbnail}
                      className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 rounded focus:outline-none focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
                    />
                    {categoryCoverPreview && (
                      <div className="mt-4 flex items-center relative">
                        <img
                          src={categoryCoverPreview}
                          alt="Thumbnail Preview"
                          className="w-36 h-36 mr-2 mb-2 border rounded"
                        />
                        <IoCloseOutline
                          onClick={() => setCategoryCoverPreview(null)}
                          className="text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-36 -ml-6"
                        />
                      </div>
                    )}
                  </div>

                  {/* Category Banner */}
                  <div className="mb-4">
                    <label
                      htmlFor="banner"
                      className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      Banner (835x200)<span>*</span>
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="banner"
                      name="banner"
                      {...register('banner')}
                      onChange={handleCategoryBannerFileSelect}
                      className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 rounded focus:outline-none focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
                    />
                    {uploadedImages && (
                      <div className="mt-4 flex items-center relative">
                        <img
                          src={uploadedImages}
                          alt="Banner Preview"
                          className="w-36 h-36 mr-2 mb-2 border rounded"
                        />
                        <IoCloseOutline
                          onClick={() => setUploadedImages(null)}
                          className="text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-36 -ml-6"
                        />
                      </div>
                    )}
                    {/* <div className="mt-4 flex items-center">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="flex items-center relative">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Uploaded image ${index}`}
                            className="w-24 h-24 mr-2 mb-2 border rounded"
                          />
                          <IoCloseOutline
                            className="text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-24 -ml-6"
                            // onClick={() =>
                            //   handleCancelCategoryBannerUpload(index)
                            // }
                          />
                        </div>
                      ))}
                    </div> */}
                  </div>

                  {isLoading ? (
                    <Button
                      text="Submiting..."
                      type="submit"
                      className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                      icon={FaPlus}
                    ></Button>
                  ) : (
                    <Button
                      text="Submit"
                      type="submit"
                      className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                      icon={FaPlus}
                    ></Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* category list */}
        <div
          className={`px-5 py-5 rounded lg:w-[60%] w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
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
                  className={`py-2 pl-3  bg-transparent w-full focus:outline-none  ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
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
                  {category?.map((items, id) => (
                    <tr key={id}>
                      <td className="p-2 text-center">{id + 1}</td>
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
                        {items && JSON.parse(items?.name)['en']}
                      </td>

                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap text-[13px]  ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        Category
                      </td>
                      <td
                        className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                        key={`${items.id}-toggle-button`}
                      >
                        <ToggleButton
                          label="Toggle Button Label"
                          isChecked={isChecked}
                          onChange={handleToggleChangeForCategory(items.id)}
                        />
                      </td>

                      <td className="border-l pl-2 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Link to={'/dashboard/categoryV2/edit'}>
                            <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor">
                              <FiEdit className=" text-[12px] " />
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDeleteUnit(items?.slug)}
                            className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                          >
                            <RiDeleteBin7Line className="text-[12px]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

{
  /* <div className="mb-4">
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
                    placeholder="Enter Meta Title"
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
                    placeholder="Meta Description"
                    className={`mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText focus:outline-none' : 'text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-primaryColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                  ></textarea>
                </div> */
}
