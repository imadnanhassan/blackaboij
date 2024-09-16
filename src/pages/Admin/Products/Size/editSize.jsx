import { useSelector } from 'react-redux'
import Button from '../../../../common/Button/Button'
import { useGetSingleSizeQuery } from '../../../../redux/features/api/attribute/sizeApi'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect } from 'react'

export default function EditSize({ id, setIsOpen, refetch }) {
  const { handleSubmit, register, setValue } = useForm() // Added setValue
  let userD = JSON.parse(localStorage?.getItem('userData'))
  let token = userD?.token

  const {
    data: sizes,
    isLoading,
    refetch: singleDataFetch,
  } = useGetSingleSizeQuery(id, {
    refetchOnMountOrArgChange: true,
  })

  // const sizes = sizeData?.size
  console.log(sizes)

  // Pre-fill form with fetched data using useEffect
  useEffect(() => {
    if (sizes) {
      setValue('name', sizes.name)
      // Assuming you have a 'code' field in sizes
    }
  }, [sizes, setValue])

  const onSubmit = async data => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('code', data.code) // Assuming code is a property
    formData.append('id', id)

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/size/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      singleDataFetch()
      refetch()
      if (response.data && response.data.message) {
        toast.success(`${response.data.message}`, {
          position: 'bottom-right',
          autoClose: 3000,
        })
      }
      setIsOpen(false)
    } catch (error) {
      toast.error(`${error?.response?.data?.message || 'An error occurred'}`, {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }

  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  return (
    <div
      className={`px-5 py-5 rounded w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
    >
      <div className="flex gap-5 pb-5">
        <div
          className={`w-full py-4 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-5">
              {isLoading ? (
                <p>Loading...</p> // Add loading state
              ) : (
                <>
                  <div className="mb-4">
                    <label
                      htmlFor="sizeName"
                      className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                    >
                      Size Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="sizeName"
                        placeholder="Size"
                        className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                        {...register('name', { required: true })} // Connect to react-hook-form
                      />
                    </div>
                  </div>

                
                </>
              )}

              <Button
                type="submit"
                className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
                text="Update"
              ></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
