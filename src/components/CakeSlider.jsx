import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function CakeSlider() {
  return (
    <>
    <div className=''>
      <Swiper
        // spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./Images/slider1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/slider2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Images/slider3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Images/slider4.jpeg" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
