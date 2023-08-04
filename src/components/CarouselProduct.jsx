import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation} from 'swiper/modules';
import { Link } from 'react-router-dom'

import "swiper/css";
import "swiper/css/navigation"
import { BASE_URL } from '../utils/constants';

const CarouselProduct = () => {
  return (
    <div className='m-3 bg-white'>
        <div className=' font-semibold text-2xl p-3'>
            Best Sellers
        </div>
        <Swiper
            slidesPerView={7}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className='pl-10'  
        >
                {Array.from({length:9},(_,i)=>
                    <SwiperSlide key={i}>
                        <Link to={`/product/${i}`}>
                            <img src={`${BASE_URL}/images/product_${i}_small.jpg`}/>
                        </Link>
                        
                    </SwiperSlide>
                    )
                }
        </Swiper>
    </div>    
  )
}

export default CarouselProduct