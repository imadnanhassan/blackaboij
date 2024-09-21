import { RxCross1 } from 'react-icons/rx'
import { useGetOrderDetailsQuery } from '../../../redux/features/api/orderDetails/orderDetails'
import { useFormattedDate } from '../../../hooks/useFormattedDate'

export default function OrderInformationModal({ isOpen, onClose, selectedId }) {
  const { data, isLoading } = useGetOrderDetailsQuery(selectedId)

  console.log(data)
  const formattedDate = useFormattedDate(data?.order?.created_at)
  if (isLoading) {
    return 'Loading...'
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

            <div className="flex items-center justify-center px-3 my-1">
              {/* <OrderInvoice products={isViewData} /> */}
              Order Invoice
            </div>
          </div>
        </div>
      )}
    </>
  )
}
