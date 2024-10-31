import React from 'react'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import useScrollToTop from '../../../hooks/useScrollToTop'

const TermsAndConditions = () => {
    useScrollToTop()
  return (
    <div className="container mx-auto p-8 bg-white rounded my-10 border shadow border-gray-200">
      <h1 className="text-4xl font-bold mb-2 text-gray-800 text-center">
        📜 Terms and Conditions
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last Updated: 10-29-2024
      </p>

      {/* General Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          🏢 1. General Information
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to <span className="font-semibold">blackaboij</span>! These
          Terms and Conditions govern your use of our website and the purchase
          of products from us. By using our website, you agree to these terms.
        </p>
        <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Company Name:</span> blackaboij
          </li>
          <li>
            <span className="font-semibold">Business Address:</span> 13800
            Istres, France
          </li>
          <li>
            <span className="font-semibold">Contact Email:</span>{' '}
            blackaboij@gmail.com
          </li>
          <li>
            <span className="font-semibold">Applicable Law:</span> French law
            and EU e-commerce regulations
          </li>
        </ul>
      </section>

      {/* Product Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          📦 2. Product Information
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We strive to provide accurate descriptions and images for our products
          (e.g., t-shirts, pants, hoodies, shoes, and accessories). Minor color
          or appearance variations may occur due to screen settings or
          production differences, which do not qualify for refunds.
        </p>
      </section>

      {/* Orders and Acceptance */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          📧 3. Orders and Acceptance
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>
            After placing an order, you will receive a confirmation email
            summarizing your items and prices.
          </li>
          <li>
            We reserve the right to refuse or cancel an order due to pricing
            errors, stock limitations, or other valid reasons. If an order is
            canceled, you will be notified and refunded.
          </li>
        </ul>
      </section>

      {/* Prices and Payment */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          💰 4. Prices and Payment
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>
            <span className="font-semibold">Prices:</span> Listed in [currency]
            and include VAT as required by French law. Shipping fees are
            calculated at checkout.
          </li>
          <li>
            <span className="font-semibold">Payment Methods:</span> We accept
            major credit cards and other secure payment options, processed
            securely.
          </li>
          <li>
            <span className="font-semibold">Promotions:</span> Any discounts are
            subject to specific terms and may not be combined unless explicitly
            stated.
          </li>
        </ul>
      </section>

      {/* Shipping and Delivery */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          🚚 5. Shipping and Delivery
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>
            Estimated delivery times are shown at checkout. Please allow extra
            time during peak seasons or for international orders.
          </li>
          <li>
            Shipping fees are calculated at checkout based on destination and
            order weight.
          </li>
          <li>
            We are not liable for delays caused by third-party shipping or
            customs delays. Contact us for lost or damaged packages.
          </li>
        </ul>
      </section>

      {/* Returns and Refunds */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          🔄 6. Returns and Refunds
        </h2>
        <p className="text-gray-600 leading-relaxed">
          For information on returns, please review our{' '}
          <span className="text-blue-600 underline">Return Policy</span>.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          ⚖️ 7. Limitation of Liability
        </h2>
        <p className="text-gray-600 leading-relaxed">
          blackaboij is not responsible for any indirect, incidental, or
          consequential damages arising from using our website or products, to
          the extent permitted by law.
        </p>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          🧩 8. Intellectual Property
        </h2>
        <p className="text-gray-600 leading-relaxed">
          All content, including images, text, graphics, and logos, is the
          property of blackaboij. You may not use, reproduce, or distribute our
          content without permission.
        </p>
      </section>

      {/* Privacy Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          🔒 9. Privacy Policy
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Please refer to our{' '}
          <span className="text-blue-600 underline">Privacy Policy</span> for
          information on how we collect, use, and protect your personal
          information.
        </p>
      </section>

      {/* User Conduct */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          🚫 10. User Conduct
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>
            Do not engage in any activity that disrupts our website or violates
            applicable laws.
          </li>
          <li>
            Do not use false information when registering or placing an order.
          </li>
          <li>
            Do not reproduce, duplicate, copy, sell, or exploit any part of our
            website or products.
          </li>
        </ul>
      </section>

      {/* Changes to Terms and Conditions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          🔄 11. Changes to Terms and Conditions
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We may update these Terms and Conditions periodically. Please check
          this page for any changes.
        </p>
      </section>

      {/* Contact Us */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          📞 12. Contact Us
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          If you have any questions or concerns, please contact us:
        </p>
        <address className="bg-gray-100 p-4 rounded-md text-gray-700 leading-relaxed">
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-600" /> 13800 Istres,
            France
          </p>
          <p className="flex items-center mt-2">
            <FaEnvelope className="mr-2 text-gray-600" />
            <a
              href="mailto:blackaboij@gmail.com"
              className="text-blue-600 underline"
            >
              blackaboij@gmail.com
            </a>
          </p>
        </address>
      </section>
    </div>
  )
}

export default TermsAndConditions
