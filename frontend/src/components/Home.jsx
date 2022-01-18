import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import Products from "./Products";

// install Swiper modules
SwiperCore.use([Pagination]);

function Home() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper pagination={pagination} className="mySwiper">
        <SwiperSlide>
          {" "}
          <img
            className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
            src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            alt="Nike Air"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
            src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            alt="Nike Air"
          />
        </SwiperSlide>
       
      </Swiper>
      <Products/>
    </>
  );
}

export default Home;
