import {
  FaTruck,
  FaMapMarkerAlt,
  FaBox,
  FaRegClock,
  FaGlobe,
  FaExclamationTriangle,
  FaEnvelopeOpenText,
} from 'react-icons/fa'
import useScrollToTop from '../../../hooks/useScrollToTop'

const ShippingPolicy = () => {
  useScrollToTop()
  return (
    <div className="bg-white text-gray-800 p-8 md:p-12 rounded shadow my-10 space-y-6 container mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-4">
        🚚 Shipping Policy
      </h1>
      <p className="text-sm text-gray-600 text-center">
        Last Updated: October 29, 2024
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaMapMarkerAlt className="text-black mr-2" /> Shipping Destinations
        </h2>
        <p className="text-gray-700">
          <strong>Domestic:</strong> We ship throughout France.
        </p>
        <p className="text-gray-700">
          <strong>International:</strong> Shipping is available to select
          international destinations. Fees and delivery times vary by location.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaRegClock className="text-black mr-2" /> Processing Time
        </h2>
        <p className="text-gray-700">
          Orders are processed within <strong>1-3 business days</strong>{' '}
          (excluding weekends and holidays) after payment confirmation. Expect
          slight delays during peak seasons.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaBox className="text-black mr-2" /> Shipping Options & Delivery
          Times
        </h2>
        <p className="text-gray-700">
          Estimated delivery times vary and may be influenced by factors such as
          carrier delays or customs processing.
        </p>
        <p className="text-gray-600 italic">
          📦 Note: Express shipping options are available in select regions and
          may incur additional costs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaGlobe className="text-black mr-2" /> Shipping Costs
        </h2>
        <p className="text-gray-700">
          <strong>Domestic (France):</strong> Free standard shipping on orders
          over <strong>€XX</strong>. Fees apply to smaller orders.
        </p>
        <p className="text-gray-700">
          <strong>International:</strong> Fees calculated at checkout based on
          destination and order weight.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaTruck className="text-black mr-2" /> Tracking Information
        </h2>
        <p className="text-gray-700">
          After shipment, you’ll receive a confirmation email with a tracking
          link to monitor your order.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaExclamationTriangle className="text-black mr-2" /> Customs & Duties
        </h2>
        <p className="text-gray-700">
          International orders may incur customs fees or import duties
          determined by the destination country. blackaboij is not responsible
          for these additional charges.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaMapMarkerAlt className="text-black mr-2" /> Incorrect Address
        </h2>
        <p className="text-gray-700">
          Ensure your shipping address is accurate at checkout. Re-shipping fees
          apply for returned packages due to incorrect addresses provided by the
          customer.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaEnvelopeOpenText className="text-black mr-2" /> Contact Us
        </h2>
        <p className="text-gray-700">
          For questions or assistance with your shipment, reach out to us:
        </p>
        <p className="text-gray-700 font-medium">
          blackaboij
          <br />
          13800 Istres, France
          <br />
          Email:{' '}
          <a
            href="mailto:blackaboij@gmail.com"
            className="text-indigo-600 underline"
          >
            blackaboij@gmail.com
          </a>
        </p>
      </section>
    </div>
  )
}

export default ShippingPolicy
