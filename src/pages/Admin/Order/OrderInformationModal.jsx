import { RxCross1 } from 'react-icons/rx'
import { useGetOrderDetailsQuery } from '../../../redux/features/api/orderDetails/orderDetails'
import { useFormattedDate } from '../../../hooks/useFormattedDate'
import { useSelector } from 'react-redux'
import { FaSpinner } from 'react-icons/fa6'

export default function OrderInformationModal({ isOpen, onClose, selectedId }) {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const { data, isLoading } = useGetOrderDetailsQuery(selectedId)
  const formattedDate = useFormattedDate(data?.order?.created_at)
  if (isLoading && isOpen) {
    return <FaSpinner className="animate-spin" />
  }
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 ">
          <div className="relative overflow-hidden left-[10px] text-left bg-white rounded shadow w-full lg:w-9/12 p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3
                className="text-[26px] font-bold text-[#0A0A0A] capitalize"
                id="modal-title"
              >
                Order Information
              </h3>
              <button
                onClick={onClose}
                className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
              >
                <RxCross1 size={20} />
              </button>
            </div>

            <div id="invoicePrintArea">
              <div className="flex items-start justify-between mx-8 mt-6 gap-14">
                <table className="table-auto">
                  <h3 className="py-1 px-2 text-lg font-medium border-b-2">
                    Order Information
                  </h3>
                  <tbody>
                    <tr>
                      <td className="px-2 py-1 w-[150px]">
                        <strong>Date </strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> {formattedDate}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong> Order-ID</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong>
                        {data?.order?.order_id}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Transaction-ID</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> Transaction ID
                      </td>
                    </tr>

                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Method</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> {data?.order?.payment_method}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Total Price</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> {data?.order?.amount}$
                      </td>
                    </tr>

                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Order Status</strong>
                      </td>
                      <td className="px-2 py-1 capitalize">
                        <strong>: </strong>
                        {data?.order?.status}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Order Type</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> Order Type
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="table-auto">
                  <h3 className="py-1 px-2 text-lg font-medium border-b-2">
                    Shipping Information
                  </h3>
                  <tbody>
                    <tr>
                      <td className="px-2 py-1 w-[150px]">
                        <strong>Customer Name </strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong>
                        {data?.shipping?.name}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Customer Phone</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> {data?.shipping?.phone_number}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Email</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> {data?.shipping?.email}
                      </td>
                    </tr>
                    {/* <tr>
                      <td className="px-2 py-1 w-[180px]">
                        <strong>District </strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong>
                        {data?.shipping?.city}
                      </td>
                    </tr> */}

                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>City</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong>
                        {data?.shipping?.city}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="px-3 my-1">
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
                        <th
                          className={`border-l pl-2 py-3 text-center text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          SL
                        </th>
                        <th
                          className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          PRODUCT
                        </th>

                        <th
                          className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          SIZE
                        </th>

                        <th
                          className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          COLOR
                        </th>
                        <th
                          className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          QTY
                        </th>
                        <th
                          className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                        >
                          PRICE
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      {data?.orderItems?.map((product, index) => (
                        <tr key={product.id}>
                          <td className="text-center">{++index}</td>
                          <td className="border-l pl-2 py-4 whitespace-nowrap flex gap-2">
                            <div
                              className={`w-[50px] h-[50px]  ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                            >
                              <img
                                src={`${import.meta.env.VITE_BASE_URL}/products/${product?.product.thumbnail_image}`}
                                alt=""
                                className="w-full p-1 rounded"
                              />
                            </div>
                            <span>
                              <h6
                                className={`text-[15px] pb-1 font-medium ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                              >
                                {product?.product?.name}
                              </h6>
                            </span>
                          </td>

                          <td className="border-l pl-2 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full `}
                            >
                              {product?.size?.name}
                            </span>
                          </td>

                          <td
                            className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                          >
                            {product.color?.name}
                          </td>
                          <td
                            className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                          >
                            {product.quantity}
                          </td>
                          <td
                            className={`border-l pl-2 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                          >
                            {product?.product?.price}$
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
