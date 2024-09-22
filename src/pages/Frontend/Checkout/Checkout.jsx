import { useNavigate } from 'react-router-dom'
import '../HelperCss/checkout.css'
import { useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { CustomerContext } from '../../../Providers/CustomerProvider'
import { useSubmitOrderMutation } from '../../../redux/features/api/Customer/order'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { baseUrl } from '../../../hooks/useThumbnailImage'

export default function Checkout() {
  const navigate = useNavigate()
  const { loading: customerLoading, customer } = useContext(CustomerContext)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [addToCart] = useSubmitOrderMutation()
  const handleMethodChange = methodName => {
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
    return <>Loading...</>
  }

  const payment = [
    {
      id: '1',
      methodName: 'COD',
      images: "./public/cod.png",
    },
    {
      id: '2',
      methodName: 'PAYPAL',
      images: "./public/cod.png"
    },
  ]

  const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
  console.log(cartItems)
  const onSubmit = async data => {
    console.log(data, paymentMethod, cartItems)
    const formData = new FormData()
    for (let p = 0; p < cartItems.length; p++) {
      formData.append('products[]', JSON.stringify(cartItems[p]))
    }
    formData.append('customer_id', customer.currentCustomer.id)
    formData.append('payment_method', paymentMethod)
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('phone_number', data.phone_number)
    formData.append('delivery_address', data.delivery_address)
    formData.append('state', data.state)
    formData.append('city', data.city)
    formData.append('zip_code', data.zip_code)

    formData.append('amount', cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0).toFixed(2))
    formData.append(
      'amount',
      cartItems
        .reduce((total, item) => total + item.price * item.cartQuantity, 0)
        .toFixed(2),
    )
 main
    const response = await addToCart(formData)

    if (response?.data.status == 200) {
      localStorage.removeItem('cartItems')
      Swal.fire('Success', response.data.message, 'success')
      navigate('/user/orders', {
        replace: true,
      })
    } else if (response?.data.status == 401) {
      response.data.errors.forEach(el => toast.error(el))
    } else {
      Swal.fire('Error', response.data.message, 'error')
    }
  }

  console.log(cartItems)
  return (
    <section className="es_container px-3 py-8 xl:py-28">
      <form
        action=""
        className="checkout_wrapper"
        onSubmit={handleSubmit(onSubmit)}
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

                {...register('name', { required: true })}

                {...register('name', { required: true })}

              />
              {errors.name?.type === 'required' && (
                <p className="text-error-200 font-mono text-sm" role="alert">
                  Name is required
                </p>
              )}
            </div>

            <div className="address_item">
              <label htmlFor="">Email Adress</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register('email', { required: true })}
              />
              {errors.email?.type === 'required' && (
                <p className="text-error-200 font-mono text-sm" role="alert">
                  Email is required
                </p>
              )}
            </div>

            <div className="address_item">
              <label htmlFor="">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                {...register('phone_number', { required: true })}
              />
              {errors.phone_number?.type === 'required' && (
                <p className="text-error-200 font-mono text-sm" role="alert">
                  Phone Number is required
                </p>
              )}
            </div>

            <div className="address_item">
              <label htmlFor="">Street Address</label>
              <input
                type="text"
                placeholder="Type Your Address"
                {...register('delivery_address', { required: true })}
              />
              {errors.delivery_address?.type === 'required' && (
                <p className="text-error-200 font-mono text-sm" role="alert">
                  Delivery Address is required
                </p>
              )}
            </div>

            <div className="address_item">
              <label htmlFor="">City Name</label>
              <input
                type="text"
                placeholder="Your City Name"
                {...register('city', { required: true })}
              />
              {errors.city?.type === 'required' && (
                <p className="text-error-200 font-mono text-sm" role="alert">
                  City name is required
                </p>
              )}
            </div>

            <div className="address_item">
              <label htmlFor="">State Name</label>
              <input
                type="text"
                placeholder="Your State Name"
                {...register('state', { required: true })}
              />
              {errors.state?.type === 'required' && (
                <p className="text-error-200 font-mono text-sm" role="alert">
                  State is required
                </p>
              )}
            </div>

            <div className="address_item w-[100vw]">
              <label htmlFor="">Zip/Postal Code</label>
              <input
                type="text"
                placeholder="City Name"
                {...register('zip_code', { required: true })}
              />
              {errors.zip_code?.type === 'required' && (
                <p className="text-error-200 font-mono text-sm" role="alert">
                  Zipe code is required
                </p>
              )}
            </div>
          </div>

          <div className='grid w-[100%]  items-center gap-2'>
            <div className="payment_wrapper ">
              <div className="sumury_title">Select Payment Method</div>

              <div className="payment_item_wraper grid grid-cols-2 lg:gap-14 gap-2 ">
                {payment.slice(0, 5).map(method => (
                  <label className="payment_item border rounded-[2px]" key={method.id}>
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
              </div>
              {/* submit button */}
              <div className="submit_button mt-5 lg:mt-8">
                <button type="submit" className="main_btn">
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout_right">
          <div className="order_sumury">
            <div className=' '>
              <div className="text-base font-semibold"> Product Summery</div>
              <div className='h-[1px] bg-gray-300 w-[70%]  my-3'></div>

            </div>
            <div className="summery_total_product ">
              <div className='flex justify-between'>
                <div>Total Items </div>
                <div className='text-base font-semibold'>{cartItems.length} pcs</div>
              </div>

              <div className='flex justify-between'>
                <div>Shipping </div>
                <div className='text-base font-semibold'> 45 $</div>
              </div>
              <div className='h-[1px] bg-gray-300 w-full  my-1'></div>

              <div className='flex justify-between'>
                <div className='text-base font-semibold'>Sub Total </div>
                <div className='text-base font-semibold'>2850 $ </div>
              </div>


            </div>


          </div>

          {/* add to cart all data product here  */}
          <div className='lg:py-10 py-5'>
            {
              cartItems.map((item, index) => (

                <div key={index} className='bg-white p-5 border-b'>
                  <div className='flex  '>
                    <div className='size-20'>
                      <img
                        className='h-full w-full rounded-sm'
                        src={`${baseUrl}/products/${item?.thumbnail_image}`}
                        alt={item?.name} />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-md font-medium'>{item?.name}</h1>
                      <h2 className='text-md font-medium'>$ {item?.price}</h2>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>


        </div>
      </form>
    </section>
  )
}
