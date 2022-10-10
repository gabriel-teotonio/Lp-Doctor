import React from 'react'
import * as C from './style'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TitleSection } from '../Services-section/style';

import { ClientsData } from '../../data/datas';

export const Clients = () => {
  return (
    <C.Container>
      <TitleSection>Oque dizem nossos pacientes</TitleSection>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 5000,    
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >

      {ClientsData.map((item,index) => (
        <SwiperSlide
         key={index}
         >
          <div className='client'>
            <img src={item.img} alt="" />
            <h4>{item.nameTitle}</h4>
            <p>{item.comment}</p>
          </div>
        </SwiperSlide>
      ))}
       
      </Swiper>
    </C.Container>
  )
}
