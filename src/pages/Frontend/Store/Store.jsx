import useScrollToTop from "../../../hooks/useScrollToTop";

const Store = () => {
    // scroll page to top
   useScrollToTop();
    return (
      <section className="bg-black text-white">
        <div className="relative">
          <img
            className="w-full md:h-[500px] h-[300px] object-cover"
            src="https://i.ibb.co/qBcV9St/IMG-1796-1296x.webp"
            alt="Store Image"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h1 className="md:text-[120px] text-[50px] pb-8 text-white">
              Black Stores
            </h1>
            <p className="my-4">
              <button className="px-[30px] py-4 bg-black text-[#b1b1b1] border border-gray-500 hover:text-white transition-colors duration-300">
                Find our Stores
              </button>
            </p>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        </div>

        <div className="mx-[20px] md:mx-0 py-16 px-2 md:px-4 lg:px-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                <p>13800 Istres, France</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:blackaboij@gmail.com"
                    className="underline hover:text-gray-300"
                  >
                    blackaboij@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a
                    href="tel:+33662023969"
                    className="underline hover:text-gray-300"
                  >
                    +33 6 62 02 39 69
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-4 bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-4 bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-4 bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-semibold uppercase transition-colors duration-300 hover:bg-gray-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    )
};

export default Store;
