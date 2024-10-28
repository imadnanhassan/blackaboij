import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const NewsLatter = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubscribe = async e => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.')
      return
    }

    // EmailJS configuration
    const templateParams = {
      subscriber_email: email,
      from_name: 'Blackaboij',
      to_name: 'Blackaboij',
    }

    try {
      await emailjs.send(
        'service_eh51n81',
        'template_8woax9g',
        templateParams,
        'BYsTX70SvWK867fmm',
      )

      setMessage('Thank you for subscribing!')
      setEmail('')
    } catch (error) {
      console.error('Failed to send email:', error)
      setMessage('Subscription failed. Please try again.')
    }
  }

  return (
    <section>
      <div className="h-[300px] my-[50px] md:my-[100px] bg-slate-200 flex flex-col justify-center items-center">
        <h1 className="mb-[10px] text-center md:text-3xl text-xl font-bold">
          Newsletter
        </h1>
        <p className="text-center text-[#646464] md:text-[16px] text-[12px] px-5 md:px-0">
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:py-8 py-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border md:text-[15px] text-[12px] border-[#b1b1b1] md:py-3 py-[6px] pl-2 bg-transparent focus:outline-none text-gray-600 w-[250px]"
          />
          <button
            onClick={handleSubscribe}
            className="relative cursor-pointer flex items-center justify-center px-6 py-3 hover:text-black overflow-hidden font-custom font-medium tracking-tighter text-white bg-black group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-300 group-hover:w-full group-hover:h-56"></span>
            <span className="relative whitespace-nowrap md:text-[16px] flex items-center gap-3 text-[12px]">
              Subscribe
            </span>
          </button>
        </div>
        {message && (
          <p className="text-center text-green-600 mt-4">{message}</p>
        )}
      </div>
    </section>
  )
}

export default NewsLatter
