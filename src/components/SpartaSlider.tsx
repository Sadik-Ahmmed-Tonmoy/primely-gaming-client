"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import {
  Pagination,
  Navigation,
  FreeMode,
  Virtual,
  Autoplay,
} from "swiper/modules";

const SpartaSlider = () => {
  return (
    <div className="relative bg-yellow-400 min-h-[300px] max-w-6xl mx-auto">
      <Swiper
        // slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true} 
        pagination={false}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Virtual, Pagination, Navigation, Autoplay]}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        loop
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`${
                  isActive
                    ? "bg-red-500 p-32 scale-110 shadow-lg"
                    : "bg-blue-300 p-20 scale-90 opacity-70 mt-10"
                } transition-all duration-500`}
              >
                Slide {index + 1}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="custom-swiper-button-prev absolute left-[45%] -bottom-[10%] z-10 text-blue-500 cursor-pointer"
      >
        left
      </div>
      <div
        className="custom-swiper-button-next absolute right-[45%] -bottom-[10%] z-10 text-blue-500 cursor-pointer"
      >
        right
      </div>
    </div>
  );
};

export default SpartaSlider;
