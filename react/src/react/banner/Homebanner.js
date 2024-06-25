import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Pagination,Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Homebanner.css';
//SwipeCore.use([Navigation,Pagination,Autoplay])

export default function Animmate() {

  return(
    <Swiper
      modules={[Navigation, Pagination,Autoplay]}
      className = "home-banner"
      spaceBetween={50} // 슬라이드 간격
      slidesPerView={1}  // 슬라이드 를 하나 띄운다.
      navigation // 슬라이드를 내가 움직일 수 있게 버튼 생성 화살표인거
      pagination={{clickable : true}} //페이지네이션은 슬라이드 아래에 점 같은거 클릭하면 내가 원하는 페이지 감, autoplay는 자동으로 넘어가는 시간 delay 걸어줌
      autoplay= {{delay:2000}}> 
      <SwiperSlide>
        < img  className="home-img1" src="https://product-image.kurly.com/cdn-cgi/image/width=1900,height=370,quality=85/banner/main/pc/img/159de09f-e14a-403b-a5b7-bb03b0e06935.jpg" alt="슬라이드1"></img>
      </SwiperSlide>
      <SwiperSlide >
        < img className="home-img2"  src= "https://product-image.kurly.com/cdn-cgi/image/width=1900,height=370,quality=85/banner/main/pc/img/1f1bc350-70f8-42ad-b971-fc491da114fa.jpg" alt="슬라이드2"></img>
      </SwiperSlide>
      {/* <SwiperSlide className="home-img3">슬라이드3</SwiperSlide>
      <SwiperSlide className="home-img4">슬라이드4</SwiperSlide> */}
    </Swiper>

  )

}