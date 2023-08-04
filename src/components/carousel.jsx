import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation,Autoplay } from 'swiper/modules';
import { BASE_URL } from '../utils/constants'

import "swiper/css";
import "swiper/css/navigation"
const carousel = () => {
  return (
    <div className=' h-[600px] bg-gray-300'>
      <Swiper
        loop = {true}
        spaceBetween={0}
        navigation ={true}
        modules={[Navigation,Autoplay]}
        autoplay={{
        delay: 4500
        }}
        className='h-[50%]'
      >
        <SwiperSlide>
          <img src={`${BASE_URL}/images/carousel_1.jpg`} alt="carousel image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${BASE_URL}/images/carousel_2.jpg`} alt="carousel image 1" />
        </SwiperSlide>
        <SwiperSlide className=' bg-black'>
          <video src={`${BASE_URL}/images/carousel_vid.mp4`} type="video/mp4" controls muted="muted"></video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${BASE_URL}/images/carousel_4.jpg`} alt="carousel image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${BASE_URL}/images/carousel_5.jpg`} alt="carousel image 1" />
        </SwiperSlide>
      </Swiper>
      <div className=' h-[50%] bg-gradient-to-b from-stone-950'/>
    </div>
  )
}

export default carousel