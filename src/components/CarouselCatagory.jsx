import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation} from 'swiper/modules';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { BASE_URL } from '../utils/constants'

import "swiper/css";
import "swiper/css/navigation"

const CarouselCatagory = () => {
    const navigate = useNavigate();
    const categoryResults = (category) =>{
        navigate({
            pathname: 'search',
            search: `${
            createSearchParams({
                category: `${category}`,
                searchTerm: ``
            })
            }`
        });
    }
  return (
    <div className='m-3 bg-white'>
        <div className=' text-2xl font-semibold p-3'>
            Shop By Category
        </div>
        <Swiper
            slidesPerView={5}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
        >
            <SwiperSlide className='ml-10 cursor-pointer' onClick={()=>categoryResults('Deals')}>
                <img src={`${BASE_URL}/images/category_0.jpg`}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>categoryResults('Amazon')} className='cursor-pointer'>
                <img src={`${BASE_URL}/images/category_1.jpg`}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>categoryResults('Fashion')} className='cursor-pointer'>
                <img src={`${BASE_URL}/images/category_2.jpg`}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>categoryResults('Computers')} className='cursor-pointer'>
                <img src={`${BASE_URL}/images/category_3.jpg`}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>categoryResults('Home')} className='cursor-pointer'>
                <img src={`${BASE_URL}/images/category_4.jpg`}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>categoryResults('Mobile')} className='cursor-pointer'>
                <img src={`${BASE_URL}/images/category_5.jpg`}/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default CarouselCatagory