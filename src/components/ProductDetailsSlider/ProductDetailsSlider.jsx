// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'
import { Pagination, Autoplay, Keyboard } from 'swiper/modules'

export default function ProductDetailsSlider() {
  return (
    <section className="border bg-gray-100">
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Keyboard]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        style={{
          width: '100%',
          maxWidth: '500px',
          height: 'auto',
          maxHeight: '500px',
          margin: '0 auto',
        }}
      >
        <SwiperSlide>
          <img
            src="https://react.spruko.com/synto-js/preview/assets/1-0b2eec75.png"
            alt=""
            className="md:w-500px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://react.spruko.com/synto-js/preview/assets/1-0b2eec75.png"
            alt=""
            className="md:w-500px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://react.spruko.com/synto-js/preview/assets/5-45c1b4f9.png"
            alt=""
            className="md:w-500px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://react.spruko.com/synto-js/preview/assets/1-0b2eec75.png"
            alt=""
            className="md:w-500px"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
