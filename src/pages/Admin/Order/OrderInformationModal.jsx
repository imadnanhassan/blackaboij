import { RxCross1 } from 'react-icons/rx'
import OrderTracking from './OrderTracking'

export default function OrderInformationModal({
  isOpen,
  onClose,
  tableData,
  selectedId,
}) {
  const selectedData = tableData.find(item => item.id === selectedId)
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
                {' '}
                Order Information{' '}
              </h3>
              <button
                onClick={onClose}
                className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
              >
                <RxCross1 size={20} />
              </button>
            </div>

            <div id="invoicePrintArea">
              <section className="bg-white py-5 rounded-md overflow-x-auto overflow-hidden">
                <OrderTracking />
              </section>

              <div className="flex items-start justify-between mx-8 mt-6 gap-14">
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td className="px-2 py-1 w-[150px]">
                        <strong>Date </strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> Date
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong> Order-ID</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong>
                        order ID
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
                        <strong>Payment Status</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> Payment Status
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Method</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> {selectedData.paymentMethod}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong> Total Price</strong>
                      </td>
                      <td className="px-2 py-1">{selectedData.amount}</td>
                    </tr>
                    {/* {isViewData?.coupon_id && (
                  <>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong> Coupon</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong> {isViewData?.coupon_id?.coupon_code}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong> Coupon Bill</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong>{' '}
                        {isViewData?.coupon_id?.coupon_amount}{' '}
                        {isViewData?.coupon_id?.coupon_type}
                      </td>
                    </tr>
                  </>
                )} */}
                    <tr className="">
                      <td className="px-2 py-1">
                        <strong>Order Status</strong>
                      </td>
                      <td className="px-2 py-1">
                        <strong>: </strong>
                        {selectedData?.deliveryStatus}
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
                  {selectedData && (
                    <tbody>
                      <tr>
                        <td className="px-2 py-1 w-[150px]">
                          <strong>Customer Name </strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong>
                          {selectedData.customerName}
                        </td>
                      </tr>
                      <tr className="">
                        <td className="px-2 py-1">
                          <strong>Customer Phone</strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong> {selectedData.phone}
                        </td>
                      </tr>
                      <tr className="">
                        <td className="px-2 py-1">
                          <strong>Division</strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong> Division
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-1 w-[180px]">
                          <strong>District </strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong>
                          District
                        </td>
                      </tr>

                      <tr className="">
                        <td className="px-2 py-1">
                          <strong>City</strong>
                        </td>
                        <td className="px-2 py-1">
                          <strong>: </strong>
                          City
                        </td>
                      </tr>
                    </tbody>
                  )}
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
