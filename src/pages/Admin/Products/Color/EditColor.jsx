import { useSelector } from 'react-redux'
import Button from '../../../../common/Button/Button'
import { useForm } from 'react-hook-form'
import { useGetSingleColorQuery } from '../../../../redux/features/api/color/colorApi'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function EditColor({ id, setIsOpen, refetch }) {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const { handleSubmit, register } = useForm()
  let userD = JSON.parse(localStorage?.getItem('userData'))
  let token = userD?.token
  const {
    data: colorData,
    isLoading,
    refetch: singleDataFetch,
  } = useGetSingleColorQuery(id, {
    refetchOnMountOrArgChange: true,
  })
  const colors = colorData?.color

  const onSubmit = async data => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('code', data.code)
    formData.append('id', id)

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admin/color/update`,
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

  return isLoading ? (
    <>Loading...</>
  ) : (
    <div className="flex gap-5 pb-5">
      <div
        className={` w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="px-5">
          <h2 className="lg:text-2xl sm:text-xl text-lg font-bold mb-4">
            Add New Color{' '}
          </h2>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Color Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                defaultValue={colors?.name}
                {...register('name')}
                placeholder="Black"
                className={`mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Color Code
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                name="code"
                placeholder="#000000"
                {...register('code')}
                defaultValue={colors?.code}
                className={`mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
              />
              <input
                type="color"
                id="favcolor"
                name="code"
                {...register('code')}
                className=" rounded-md shadow-sm  focus:ring-indigo-300 focus:ring-opacity-50"
              />
            </div>
          </div>

          <Button
            text="Update"
            type="submit"
            className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
          ></Button>
        </form>
      </div>
    </div>
  )
}
