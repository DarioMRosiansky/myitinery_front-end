import React, { useEffect, useRef, useState } from "react";

import { cities } from "../../citiesArray"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Slide } from "./Slide";


export default function CarouselSwiper() {

  const [resized,setResized]=useState(window.innerWidth)
  let slicedArray = []
  for (let i = 0; i < cities.length / 4; i++) {
    slicedArray.push(cities.slice(4 * i, 4 * i + 4))
  }

  useEffect(()=>{
    function handleResize(){
      setResized(window.innerWidth)
    }
    addEventListener('resize',handleResize)
  })

  return (
    <div className="md:max-w-full md:w-3/5">
      <h3 className="text-center text-white font-bold text-2xl">Popular Mytineraries</h3>
      <Swiper className="mySwiper w-full md:w-3/5"
        navigation={resized<768?false:true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}>
        {
        slicedArray.map((city) => {
          return <SwiperSlide key={city.city} className="text-white grid grid-cols-2 no-wrap gap-y-1 gap-x-3">
          <Slide cities={city}></Slide>
          </SwiperSlide>
        })
      }
      </Swiper>
    </div>
  );
}
