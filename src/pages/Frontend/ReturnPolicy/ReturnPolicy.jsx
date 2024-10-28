import React from 'react'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import useScrollToTop from '../../../hooks/useScrollToTop'

const ReturnPolicy = () => {
    useScrollToTop()
  return (
    <div className="container mx-auto p-8 bg-white rounded my-10 border shadow border-gray-200">
      <h1 className="text-4xl font-bold mb-2 text-gray-800 text-center">
        📦 Return Policy
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Last Updated: 10-29-2024
      </p>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          📝 1. Overview
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At <span className="font-semibold">blackaboij</span>, we want you to
          be completely satisfied with your purchase. If you're not fully happy,
          you may return your items within the specified time frame under the
          terms outlined below. Please read the conditions carefully.
        </p>
      </section>

      {/* Eligibility for Returns */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          ✅ 2. Eligibility for Returns
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>
            Items can be returned within{' '}
            <span className="font-semibold">14 days</span> of receiving your
            order, per French consumer laws.
          </li>
          <li>
            Items must be <span className="font-semibold">unused</span>, in
            their original condition, with all tags and packaging intact.
          </li>
          <li>
            Personalized products or final sale items may not be eligible for
            return. Please refer to the product description for any specific
            exclusions.
          </li>
        </ul>
      </section>

      {/* Return Process */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          🚚 3. Return Process
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          To initiate a return, please follow these steps:
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-gray-600">
          <li>
            Contact our Customer Support at{' '}
            <a
              href="mailto:blackaboij@gmail.com"
              className="text-blue-600 underline"
            >
              blackaboij@gmail.com
            </a>{' '}
            within the 14-day return period and provide your order details.
          </li>
          <li>
            Carefully package the items, including the original packing slip or
            proof of purchase.
          </li>
          <li>
            Ship the items to the address provided in our return instructions.
            Return shipping costs are your responsibility unless the item was
            incorrect or defective upon arrival.
          </li>
        </ol>
      </section>

      {/* Refunds */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          💸 4. Refunds
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Once your return is received and inspected, we will notify you of the
          approval or rejection of your refund. Approved returns will be
          refunded to the original payment method within{' '}
          <span className="font-semibold">7–14 business days</span>.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>
            <span className="font-semibold">Shipping fees:</span> Non-refundable
            unless the item was incorrect or defective.
          </li>
          <li>
            <span className="font-semibold">Exchange requests:</span> For size
            or color exchanges, please return the original item and place a new
            order.
          </li>
        </ul>
      </section>

      {/* Damaged or Defective Items */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          🔧 5. Damaged or Defective Items
        </h2>
        <p className="text-gray-600 leading-relaxed">
          If your item arrives damaged or defective, please notify us within 7
          days of receipt. We will arrange for a replacement or refund at no
          additional cost.
        </p>
      </section>

      {/* Contact Us */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
          📞 6. Contact Us
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          For questions or further assistance with your return, please contact
          us:
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

export default ReturnPolicy
