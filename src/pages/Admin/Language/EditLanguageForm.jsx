import Button from '../../../common/Button/Button'
import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { FaPlus } from 'react-icons/fa'

const EditLanguageForm = ({
  onSubmit,
  flags,
  language,
  control,
  handleSubmit,
  errors,
  register,
  isDarkMode,
  isLoading,
}) => {
  return isLoading ? (
    <>Loading...</>
  ) : (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              defaultValue={language?.name}
              {...register('name')}
              placeholder="Enter name"
              className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <label
              htmlFor="productCategory"
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Select Icon
            </label>
            <Controller
              name="icon"
              control={control}
              defaultValue={{ label: language?.icon, value: language?.icon }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={flags}
                  getOptionLabel={option => (
                    <div className="flex items-center">
                      <img
                        src={option?.value}
                        alt={option.label}
                        className="w-6 h-4 mr-2"
                      />
                      <span>{option?.name}</span>
                    </div>
                  )}
                  placeholder="Select Option"
                  className="custom-select"
                />
              )}
            />
            {errors?.icon && (
              <p className="text-error-200 mt-1 font-extralight">
                {errors?.icon?.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="productCode"
            className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
          >
            Code
          </label>
          <input
            type="text"
            id="productCode"
            defaultValue={language?.code}
            {...register('code')}
            placeholder="Enter Code"
            className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
          />
        </div>

        <Button
          text="Update"
          type="submit"
          className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
          icon={FaPlus}
        ></Button>
      </form>
    </>
  )
}

export default EditLanguageForm
