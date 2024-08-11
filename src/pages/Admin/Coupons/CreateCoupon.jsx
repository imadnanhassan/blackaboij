import { useSelector } from 'react-redux'
import { GoHome } from 'react-icons/go'
import { FaPlus } from 'react-icons/fa'
import Select from 'react-select'
import Breadcrumbs from '../../../common/Breadcrumbs/Breadcrumbs'
import Button from '../../../common/Button/Button'

export default function CreateCoupon() {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  // Breadcrumbs
  const pageTitle = 'Create Coupons'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Coupons' },
    { title: 'Create Coupons' },
  ]

  // Define your options for the Select component
  const customerOptions = [
    { value: 'allCustomers', label: 'All Customers' },
    { value: 'specificCustomer', label: 'Specific Customer' },

    // Add more options as needed
  ]
  const productOptions = [
    { value: 'allProducts', label: 'All Products' },
    { value: 'specificProduct', label: 'Specific Product' },
  ]
  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      {/* publish btn */}
      <div className="flex justify-end gap-3 items-center mb-5">
        <Button
          text="Add Coupons"
          className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
          icon={FaPlus}
        ></Button>

        <Button
          text="Discard Coupons"
          className="bg-error-200 py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
        ></Button>
      </div>

      {/* create coupons */}
      <div
        className={`py-5 rounded xl:w-[1200px] lg:w-[950px] md:w-[750px] sm:w-[750] w-full mx-auto ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
      >
        <div className="px-5">
          <h2 className="text-2xl font-bold mb-4">Product Information</h2>
          <div className="flex gap-5">
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Coupon Code
              </label>
              <input
                type="text"
                name="couponCode"
                placeholder="Enter Coupon Code"
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Discount Type
              </label>
              <select
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              >
                <option value="fixedamount">Fixed Amount</option>
                <option value="percentage">Percentage</option>
              </select>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Discount Amount/Percent
              </label>
              <input
                type="number"
                name="discountAmount"
                placeholder="Enter Discount Amount/Percent"
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Use Limit Per User
              </label>
              <input
                type="number"
                name="userLimit"
                placeholder="Enter Use Limit Per User"
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Total Use Limit
              </label>
              <input
                type="number"
                name="totalUseLimit"
                placeholder="Enter Total Use Limit"
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Expire Date
              </label>
              <input
                type="date"
                name="userLimit"
                placeholder="Enter Use Limit Per User"
                className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-gray-400'}`}
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Coupon For Customer
              </label>
              <Select
                id="totalUseLimit"
                name="totalUseLimit"
                options={customerOptions}
                className="copuon-select"
              />
            </div>
            <div className="mb-4 w-[50%]">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Total Use Limit
              </label>
              <Select
                id="totalUseLimit"
                name="totalUseLimit"
                options={productOptions}
                className="copuon-select"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
            >
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Message description"
              className={`mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText focus:outline-none' : 'text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-primaryColor hover:border-gray-400 border-gray-300'}`}
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  )
}
