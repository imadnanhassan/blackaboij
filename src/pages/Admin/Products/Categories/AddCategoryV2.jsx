import React from 'react'
import Button from '../../../../common/Button/Button'
import { FaPlus, FaSpinner } from 'react-icons/fa'

import { useSelector } from 'react-redux'
import { useAddCategoryMutation } from '../../../../redux/features/api/category/categoryApi'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export default function AddCategoryV2() {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [addCategory, { isLoading: isSubmitting }] = useAddCategoryMutation()

  const onSubmit = async data => {
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('status', data.status)
      formData.append('banner', data.banner)
      if (data.parent_id) {
        formData.append('parent_id', data.parent_id)
      }
      reset()
      const response = await addCategory(formData).unwrap()
      console.log('Server Response:', response)
      toast.success('Category added successfully!')
    } catch (error) {
      console.error('Error adding category:', error)
      toast.error('Failed to add category.')
    }
  }

  return (
    <div
      className={`px-5 py-5 rounded w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
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
                    placeholder="Enter category name"
                    {...register('name', {
                      required: 'Category name is required',
                    })}
                    className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="status"
                  className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                >
                  Status<span>*</span>
                </label>
                <div className="relative">
                  <select
                    id="status"
                    {...register('status', {
                      required: 'Status is required',
                    })}
                    className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                  >
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                  {errors.status && (
                    <span className="text-red-500">
                      {errors.status.message}
                    </span>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <FaPlus />
                    Submit
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
