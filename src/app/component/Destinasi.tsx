'use client'


import React, { useState, useEffect, useRef } from "react";
import SwiperCore, { Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Destinasi() {

  const [selectedMenu, setSelectedMenu] = useState("Umrah");

  useEffect(() => {
    switch (selectedMenu){
      case "Umrah":
        setSelectedMenu("Umrah");
        break;
      case "Haji":
        setSelectedMenu("Haji");
        break;
      case "Turki":
        setSelectedMenu("Turki");
        break;
      case "Jepang":
        setSelectedMenu("Jepang");
        break;
      case "Eropa":
        setSelectedMenu("Eropa");
        break;
    }
  }, [selectedMenu])

  const carousel = {
    Umrah:['image/logo.png', 'service'],
    Haji:['logo1', 'service'],
    Turki:["logo2", "service"],
    Jepang:["logo3", "service"],
    Eropa:["logo4", "service"]
  }

  return (
    <div className="container destinasi-container" id="Destinasi">
      <p className="destinasi-title">
        <span style={{ color: "#0A4879" }}>Lihat</span> Destinasi Impianmu!
      </p>
      <div className="destinasi-btn">
        <div className="btn-group">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Pilih Destinasi
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" onClick={() => setSelectedMenu("Umrah")}>
                Umrah
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={() => setSelectedMenu("Haji")}>
                Haji
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={() => setSelectedMenu("Turki")}>
                Turki
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={() => setSelectedMenu("Jepang")}>
                Jepang
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={() => setSelectedMenu("Eropa")}>
                Eropa
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {carousel[selectedMenu].map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} style={{maxHeight:'100%'}}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
