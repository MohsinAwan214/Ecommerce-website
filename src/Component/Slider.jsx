// import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import  useProduct from '../hooks/useProduct';

function Swip({index}) {
  return <div className='bdr h-96 w-60'>{index}</div>
}


export default function Slider() {
const {products} = useProduct('limit=10&skip=30')

  return (


    <div>

<Swiper
      spaceBetween={50}
      modules={[Navigation,Pagination,Autoplay]}
      autoplay={{delay:1500, pauseOnMouseEnter:true}}
      pagination={{clickable:true}}
      navigation
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
        {products?.map((item)=>(
      <SwiperSlide>
            <Card
            key={item.id}
            id={item.id}
            Name={item.title} 
            image={item.thumbnail} 
            className1="hidden" 
            discountPercentage={item.discountPercentage}
            price={item.price} 
            rating={item.rating}
            
            />
          </SwiperSlide>
          ))}
     
    
    </Swiper>

    </div>
  )
}
