import { useNavigate } from 'react-router-dom'
import '../HelperCss/checkout.css'
import { useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { CustomerContext } from '../../../Providers/CustomerProvider'
import { useSubmitOrderMutation } from '../../../redux/features/api/Customer/order'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

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
      images:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fcash-on-delivery-truck-icon_6350450.html&psig=AOvVaw3VftUI8LeMbQTWXsVg1GdY&ust=1726598511682000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjWxOqOyIgDFQAAAAAdAAAAABAE',
    },
  ]

  const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
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
    formData.append(
      'amount',
      cartItems
        .reduce((total, item) => total + item.price * item.cartQuantity, 0)
        .toFixed(2),
    )
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
        </div>

        <div className="checkout_right">
          <div className="order_sumury">
            <div className="sumury_title">Order Summery</div>
            <div className="summery_total_product">
              <span>Total Items : </span>
              <span>{cartItems.length}</span>
            </div>
            <div className="summury_total_price">
              <span>Shipping : </span>
              <span> 45 $</span>
            </div>
            <div className="summury_total_price">
              <span>Sub Total : </span>
              <span>2850 $ </span>
            </div>
          </div>

          <div className="payment_wrapper">
            <div className="sumury_title">Select Payment Method</div>

            <div className="payment_item_wraper">
              {payment.slice(0, 5).map(method => (
                <label className="payment_item" key={method.id}>
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
            <div className="submit_button">
              <button type="submit" className="main_btn">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
