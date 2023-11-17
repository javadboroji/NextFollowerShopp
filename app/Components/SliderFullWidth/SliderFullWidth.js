"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import '@/app/Components/SliderFullWidth/style.css'
function SliderFullWidth({data}) {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper swiper-full mt-3 mb-3">
        {data?.map((slide)=>  
         <SwiperSlide key={slide.id}> 
          <div className='slider-box'>
            <Image src={slide.src}  alt={'slider'} className='filter'/>
            <div className='absolute  left-16 p-5 z-10 jb-top-center'>
              <p className='text-stone-100   p-2 lg:p-5 text-2xl lg:text-4xl text-anmation-global'> {slide.title}</p>
              <p className='text-stone-50   p-2 p-lg-3  text-1xl text-anmation-global'> {slide.subTitle}</p>
              <button className=' py-2 px-3 py-lg-3 lg:px-5 mx-2 text-sm lg:text-1xl rounded-xl text-stone-100 btn-golbal'> By Now</button>
            </div>
          </div>
        </SwiperSlide>)
     }
     
    </Swiper>
  )
}

export default SliderFullWidth