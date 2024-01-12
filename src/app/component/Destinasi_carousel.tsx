'use client'

import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const DestinasiCarousel = ({ activeMenu }) => {
  const carouselData = {
    Umrah: ["Slide 1", "Slide 2", "Slide 3"],
    Haji: ["Slide A", "Slide B", "Slide C"],
    Turki: ["Slide X", "Slide Y", "Slide Z"],
    Jepang: ["Slide I", "Slide II", "Slide III"],
    Eropa: ["Slide M", "Slide N", "Slide O"],
  };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {carouselData[activeMenu].map((slide, index) => (
        <SwiperSlide key={index}>
          <div>{slide}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DestinasiCarousel;
