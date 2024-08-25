import React, { useState } from 'react'
import CustomerHead from './CustomerHead'

const initialOrders = [
  {
    id: 1,
    date: '2024-05-01',
    amount: '$150.00',
    productDetails: 'Product A, Product B',
    status: 'Pending',
  },
  {
    id: 2,
    date: '2024-05-02',
    amount: '$250.00',
    productDetails: 'Product C, Product D',
    status: 'Shipped',
  },
  {
    id: 3,
    date: '2024-05-03',
    amount: '$350.00',
    productDetails: 'Product E',
    status: 'Pending',
  },
  {
    id: 4,
    date: '2024-05-03',
    amount: '$350.00',
    productDetails: 'Product F',
    status: 'Success',
  },
  {
    id: 5,
    date: '2024-05-03',
    amount: '$350.00',
    productDetails: 'Product G',
    status: 'Processing',
  },
]
export default function CustomerOrder() {
  const [orders, setOrders] = useState(initialOrders)

  const cancelOrder = orderId => {
    setOrders(
      orders.map(order =>
        order.id === orderId ? { ...order, status: 'Cancelled' } : order,
      ),
    )
  }

  return (
    <div>
      <CustomerHead title="My Orders" />

      <div className="p-2 bg-white rounded-xl mb-6">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        Details
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {orders.map(order => (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {order.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {order.productDetails}
                        </td>
                        <td
                          className={`py-2 px-4 border-b text-sm font-medium ${
                            order.status === 'Success'
                              ? 'bg-green-100 text-green-700'
                              : order.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-700'
                                : order.status === 'Shipped'
                                  ? 'bg-sky-100 text-sky-700'
                                  : order.status === 'Processing'
                                    ? 'bg-purple-100 text-purple-700'
                                    : order.status === 'Cancelled'
                                      ? 'bg-red-100 text-red-700'
                                      : ''
                          }`}
                        >
                          {order.status}
                        </td>
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-end text-sm font-medium `}
                        >
                          {order.status === 'Pending' && (
                            <button
                              onClick={() => cancelOrder(order.id)}
                              className="text-red-500  rounded"
                            >
                              Cancel
                            </button>
                          )}
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
    </div>
  )
}
