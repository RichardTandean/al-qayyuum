'use client'
// Destinasi.js

import React, { useState } from "react";
import DestinasiCarousel from "./Destinasi_carousel";

export default function Destinasi() {
  const [activeMenu, setActiveMenu] = useState("Umrah");

  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
  };

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
              <a className="dropdown-item" onClick={() => handleMenuChange("Umrah")}>
                Umrah
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={() => handleMenuChange("Haji")}>
                Haji
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={() => handleMenuChange("Turki")}>
                Turki
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={() => handleMenuChange("Jepang")}>
                Jepang
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={() => handleMenuChange("Eropa")}>
                Eropa
              </a>
            </li>
          </ul>
        </div>
      </div>
      <DestinasiCarousel activeMenu={activeMenu} />
    </div>
  );
}
