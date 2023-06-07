import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function SwiperApp(props) {

  const setval = ["하나","둘","셋","넷"];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
          setval.map((v,i)=><SwiperSlide key={i}>{props.mm+'/'+v}</SwiperSlide>)
        }
        
      </Swiper>
    </>
  );
}
