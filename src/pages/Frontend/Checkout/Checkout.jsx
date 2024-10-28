import { useNavigate } from 'react-router-dom'
import '../HelperCss/checkout.css'

import { useContext, useEffect, useState } from 'react'
import { CustomerContext } from '../../../Providers/CustomerProvider'
import { useSubmitOrderMutation } from '../../../redux/features/api/Customer/order'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { baseUrl } from '../../../hooks/useThumbnailImage'
import { useDispatch } from 'react-redux'
import { removeAllProduct } from '../../../redux/features/cart/cartSlice'
import { FaStarOfLife } from 'react-icons/fa6'
import { FaEuroSign, FaSpinner } from 'react-icons/fa'
import axios from 'axios'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import FrontLoader from '../../../common/FrontLoader/FrontLoader'

export default function Checkout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading: customerLoading, customer } = useContext(CustomerContext)
  const [addToCart] = useSubmitOrderMutation()
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [isOpenPaypal, setOpenPaypal] = useState(false)
  const [loading, setLoading] = useState(false)

  const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState(null)
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartData, setCartData] = useState([])

  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    cityName: '',
    stateName: '',
    zipCode: '',
  })

  const handleChange = e => {
    setCheckoutForm({
      ...checkoutForm,
      [e.target.name]: e.target.value,
    })
  }

  let cartItems = []
  useEffect(() => {
    cartItems = localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
    setCartData(cartItems)
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item?.price) * item?.cartQuantity,
        0,
      ),
    )
  }, [])

  const handleMethodChange = methodName => {
    if (methodName == 'PAYPAL') {
      setOpenPaypal(true)
    } else setOpenPaypal(false)
    setPaymentMethod(methodName)
  }
  useEffect(() => {
    if (!customer && !customerLoading) {
      navigate('/signin', {
        replace: true,
      })
    }
  }, [customerLoading])

  if (customerLoading) {
    return <FrontLoader></FrontLoader>
  }

  const payment = [
    {
      id: '1',
      methodName: 'COD',
      images: './public/cod.png',
    },
    {
      id: '2',
      methodName: 'PAYPAL',
      images: './public/cod.png',
    },
  ]

  const onSubmit = async (e, details = null) => {
    if (e != 'paypal') {
      e.preventDefault()
    }
    // Start loading
    setLoading(true)

    for (let datas in checkoutForm) {
      if (checkoutForm[datas] === '') {
        toast.error(`${datas} is required.`)
        setLoading(false)
        return // Stop execution if a required field is missing
      }
    }

    const formData = new FormData()
    for (let p = 0; p < cartData.length; p++) {
      formData.append('products[]', JSON.stringify(cartData[p]))
    }
    formData.append('customer_id', customer.currentCustomer.id)
    formData.append('payment_method', paymentMethod)
    formData.append('name', checkoutForm.name)
    formData.append('email', checkoutForm.email)
    formData.append('phone_number', checkoutForm.phoneNumber)
    formData.append('delivery_address', checkoutForm.streetAddress)
    formData.append('state', checkoutForm.stateName)
    formData.append('city', checkoutForm.cityName)
    formData.append('zip_code', checkoutForm.zipCode)

    if (details != null) {
      if (details?.status == 'COMPLETED') {
        formData.append('payment_status', 1)
      }
    }

    formData.append(
      'amount',
      cartData
        .reduce((total, item) => total + item.price * item.cartQuantity, 0)
        .toFixed(2),
    )

    // const response = await addToCart(formData)

    // if (response?.data.status == 200) {
    //   dispatch(removeAllProduct())
    //   Swal.fire('Success', response.data.message, 'success')
    //   navigate('/user/orders', {
    //     replace: true,
    //   })
    // } else if (response?.data.status == 401) {
    //   response.data.errors.forEach(el => toast.error(el))
    // } else {
    //   Swal.fire('Error', response.data.message, 'error')
    // }

    try {
      const response = await addToCart(formData)

      if (response?.data.status === 200) {
        dispatch(removeAllProduct())
        Swal.fire('Success', response.data.message, 'success')
        navigate('/user/orders', { replace: true })
      } else if (response?.data.status === 401) {
        response.data.errors.forEach(error => toast.error(error))
      } else {
        Swal.fire('Error', response.data.message, 'error')
      }
    } catch (error) {
      console.error('Order submission error:', error)
    } finally {
      // Stop loading
      setLoading(false)
    }
  }

  const handlePayPalApprove = async (data, actions, billingData) => {
    try {
      const response = await axios.post('/api/capture-paypal-transaction', {
        paymentID: data.paymentID,
        payerID: data.payerID,
        billingData,
      })

      if (response.data.state === 'approved') {
        setPaidFor(true)
        alert('Order placed and payment successful via PayPal!')
      }
    } catch (err) {
      setError('Error capturing PayPal payment: ' + err.message)
    }
  }

  const onSubmitPayPal = data => {
    handlePayPalApprove(null, null, data)
  }

  return (
    <section className="es_container px-3 py-8 xl:py-28">
      <form
        action=""
        id="checkout_form"
        className="checkout_wrapper"
        onSubmit={onSubmit}
      >
        <div className="checkout_left">
          <div className="cart_order_title">
            <h2>Shipping Address </h2>
          </div>

          <div className="checkout_address">
            <div className="address_item">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Your First Name"
                name="name"
                onChange={handleChange}
                value={checkoutForm.name}
              />
            </div>

            <div className="address_item">
              <label htmlFor="">Email Adress</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                required
                onChange={handleChange}
                value={checkoutForm.email}
              />
            </div>

            <div className="address_item">
              <label htmlFor="">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                required
                onChange={handleChange}
                value={checkoutForm.phoneNumber}
              />
            </div>

            <div className="address_item">
              <label htmlFor="">Street Address</label>
              <input
                type="text"
                placeholder="Type Your Address"
                name="streetAddress"
                required
                onChange={handleChange}
                value={checkoutForm.streetAddress}
              />
            </div>

            <div className="address_item">
              <label htmlFor="">City Name</label>
              <input
                type="text"
                placeholder="Your City Name"
                name="cityName"
                required
                onChange={handleChange}
                value={checkoutForm.cityName}
              />
            </div>

            <div className="address_item">
              <label htmlFor="">State Name</label>
              <input
                type="text"
                placeholder="Your State Name"
                name="stateName"
                required
                onChange={handleChange}
                value={checkoutForm.stateName}
              />
            </div>

            <div className="address_item w-[100vw]">
              <label htmlFor="">Zip/Postal Code</label>
              <input
                type="text"
                placeholder="City Name"
                name="zipCode"
                required
                onChange={handleChange}
                value={checkoutForm.zipCode}
              />
            </div>
          </div>

          <div className="grid w-[100%]  items-center gap-2">
            <div className="payment_wrapper ">
              <div className="sumury_title">Select Payment Method</div>

              <div className="payment_item_wraper grid grid-cols-2 lg:gap-14 gap-2 ">
                {payment.slice(0, 5).map(method => (
                  <label
                    className="payment_item border rounded-[2px]"
                    key={method.id}
                  >
                    <input
                      onChange={() => handleMethodChange(method.methodName)}
                      type="radio"
                      name="payment"
                    />
                    <span className="payment_image">
                      <img src={method.images} alt="" />
                      {method.methodName}
                    </span>
                  </label>
                ))}

                {isOpenPaypal && (
                  <PayPalScriptProvider
                    options={{
                      'client-id':
                        'AVfoR-tZPEgTMoNi874J0c6knk0jdNMeDQFwaZC53Qv-2tToJ6czUwqTJI6KlR-Y_iY3BiHRivdfb1O0',
                    }}
                  >
                    <PayPalButtons
                      createOrder={async (data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: totalPrice, // Set your price here
                              },
                            },
                          ],
                        })
                      }}
                      onApprove={async (data, actions) => {
                        return actions.order.capture().then(function (details) {
                          onSubmit('paypal', details)
                        })
                      }}
                      onError={err => console.log('Error: ' + err.message)}
                    />
                  </PayPalScriptProvider>
                )}

                {/* Success message */}
                {paidFor && <div>Payment successful and order placed!</div>}
              </div>

              {/* submit button */}
              <div className="submit_button mt-5 lg:mt-8">
                <button
                  type="submit"
                  disabled={loading || paymentMethod === 'PAYPAL'}
                  onClick={onSubmit}
                  className="main_btn flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <p className=" flex items-center justify-center gap-2">
                      <FaSpinner className="animate-spin" />
                      Processing...
                    </p>
                  ) : (
                    'Confirm Order'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout_right">
          <div className="order_sumury">
            <div>
              <div className="text-base font-semibold">Product Summary</div>
              <div className="h-[1px] bg-gray-300 w-[70%] my-3"></div>
            </div>
            <div className="summery_total_product">
              <div className="flex justify-between">
                <div>Total Items</div>
                <div className="text-base font-semibold">
                  {cartData.length} pcs
                </div>
              </div>

              <div className="flex justify-between">
                <div>Shipping</div>
                <div className="text-base font-semibold">00</div>
              </div>
              <div className="h-[1px] bg-gray-300 w-full my-1"></div>

              <div className="flex justify-between">
                <div className="text-base font-semibold">Sub Total</div>
                <div className="text-base font-semibold flex items-center">
                  <div>
                    <FaEuroSign className="text-xs text-gray-500"></FaEuroSign>
                  </div>
                  {/* Calculate the subtotal dynamically */}
                  <div>{totalPrice}</div>
                </div>
              </div>
            </div>
          </div>

          {/* add to cart all data product here */}
          <div className="lg:py-10 py-5">
            {cartItems.map((item, index) => (
              <div key={index} className="bg-white p-5 border-b">
                <div className="flex">
                  <div className="size-20">
                    <img
                      className="h-full w-full rounded-sm"
                      src={`${baseUrl}/products/${item?.thumbnail_image}`}
                      alt={item?.name}
                    />
                  </div>
                  <div className="pl-5">
                    <h1 className="text-md font-medium">{item?.name}</h1>
                    <div>
                      <div className="flex items-center gap-1 border-b-2 pb-1 border-dashed">
                        <div className="text-md font-light flex items-center">
                          <div>
                            <FaEuroSign className="text-xs text-gray-500"></FaEuroSign>
                          </div>

                          <div>{item?.price}</div>
                        </div>
                        <div>
                          <FaStarOfLife className="text-[8px] text-gray-500" />{' '}
                        </div>

                        <div className="font-light">{item?.cartQuantity}</div>
                      </div>

                      <div className="flex items-center gap-1">
                        <div>
                          <FaEuroSign className="text-xs text-gray-500"></FaEuroSign>
                        </div>
                        <div className="text-md font-light">
                          {Number(item?.price) * item?.cartQuantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </section>
  )
}
