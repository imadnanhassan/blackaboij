import { Link } from 'react-router-dom'
import '../HelperCss/checkout.css'

export default function Checkout() {
    const payment = [
      {
        id: '1',
        methodName: 'COD',
        images:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fcash-on-delivery-truck-icon_6350450.html&psig=AOvVaw3VftUI8LeMbQTWXsVg1GdY&ust=1726598511682000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjWxOqOyIgDFQAAAAAdAAAAABAE',
      },
      {
        id: '2',
        methodName: 'Paypal',
        images: 'https://i.ibb.co/n3q9t6z/BLACKNOV0954-360x.webp',
      },
    ]
    return (
        <section className="es_container px-3 py-8 xl:py-28">
            <form action="" className="checkout_wrapper">
                <div className="checkout_left">
                    <div className="cart_order_title">
                        <h2>Shipping Address </h2>
                    </div>

                    <div className="checkout_address">
                        <div className="address_item">
                            <label htmlFor="">First Name</label>
                            <input type="text" placeholder="Your First Name" />
                        </div>

                        {/* <div className="address_item">
                            <label htmlFor="">Last Name</label>
                            <input type="text" placeholder="Your Last Name" />
                        </div> */}

                        {/* <div className="address_item">
                            <label htmlFor="">Company (Optional)</label>
                            <input type="text" placeholder="Your Last Name" />
                        </div> */}

                        <div className="address_item">
                            <label htmlFor="">Email Adress</label>
                            <input type="email" placeholder="Enter Your Email" />
                        </div>

                        <div className="address_item">
                            <label htmlFor="">Phone Number</label>
                            <input type="tel" placeholder="Enter Phone Number" />
                        </div>

                        <div className="address_item">
                            <label htmlFor="">Street Address</label>
                            <input type="text" placeholder="Type Your Address" />
                        </div>

                        <div className="address_item">
                            <label htmlFor="">City Name</label>
                            <input type="text" placeholder="Your City Name" />
                        </div>

                        <div className="address_item">
                            <label htmlFor="">State Name</label>
                            <input type="text" placeholder="Your State Name" />
                        </div>

                        {/* <div className="address_item">
                            <label htmlFor="">Country</label>
                            <input type="text" placeholder="Your Country Name" />
                        </div> */}

                        <div className="address_item w-[100vw]">
                            <label htmlFor="">Zip/Postal Code</label>
                            <input type="text" placeholder="City Name" />
                        </div>
                    </div>
                </div>

                <div className="checkout_right">
                    <div className="order_sumury">
                        <div className="sumury_title">Order Summery</div>
                        <div className="summery_total_product">
                            <span>Total Items : </span>
                            <span>03</span>
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
                                    <input type="radio" name="payment" />
                                    <span className="payment_image">
                                        <img src={method.images} alt="" />
                                        {method.methodName}
                                    </span>
                                </label>
                            ))}
                        </div>
                        {/* submit button */}
                        <div className="submit_button">
                            <Link>
                                <button type="submit" className="main_btn">
                                    Confirm Order
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
