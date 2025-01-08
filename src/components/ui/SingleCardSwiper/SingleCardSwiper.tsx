"use client";
import { ChevronsRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SingleCardSwiper.css";

import { Slide } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper as TSwiper } from "swiper/types";

export default function SingleCardSwiper({
  slidesData,
  setSelectedItemIndex,
}: {
  slidesData: Slide[];
  setSelectedItemIndex?: (index: number) => void;
}) {
  const swiperRef = useRef<TSwiper | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);

      swiperRef.current.on("slideChange", () => {
        setIsBeginning(swiperRef.current!.isBeginning);
        setIsEnd(swiperRef.current!.isEnd);
        setActiveIndex(swiperRef.current!.realIndex); // Use realIndex for actual slide
      });
    }
  }, []);

  useEffect(() => {
    if (setSelectedItemIndex) {
      setSelectedItemIndex(activeIndex);
    }
  }, [activeIndex, setSelectedItemIndex]);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500, // Slide duration (ms)
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        modules={[FreeMode, EffectCoverflow, Pagination, Navigation, Autoplay]} // Include Autoplay module
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full relative h-full group mx-auto dark:border-0 border overflow-hidden rounded-md dark:text-white text-black cursor-pointer">
              <figure className="w-full h-full rounded-md overflow-hidden">
                <Image
                  className={`h-full w-full ${
                    index === activeIndex
                      ? "scale-100 group-hover:scale-105"
                      : ""
                  } rounded-lg object-cover transition-all duration-300`}
                  src={slide?.heroImage}
                  height={1000}
                  width={300}
                  alt="image"
                />
              </figure>
              <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 bg-gradient-to-b from-[#fff0] via-[#3f3f3f5b] to-[#00000069]"></div>
              {index === activeIndex && (
                <Link href={`/tournament/cross-platform/${slide?.title}`}>
                  <article className="p-4 space-y-2 absolute -bottom-10 group-hover:bottom-0 transition-all duration-300">
                    <div className="text-base dark:text-white text-blue-600 font-normal group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1 transition-all duration-300">
                      {slide?.title}
                      <span>
                        <ChevronsRight />
                      </span>
                    </div>
                  </article>
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`custom-swiper-button-prev ${isBeginning ? "disabled" : ""}`}
      >
        {"<"}
      </div>
      <div className={`custom-swiper-button-next ${isEnd ? "disabled" : ""}`}>
        {">"}
      </div>
    </>
  );
}
