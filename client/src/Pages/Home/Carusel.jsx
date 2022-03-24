import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Virtual } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "../index.css";

// import required modules
import { Scrollbar, Autoplay, Navigation } from "swiper";

import img1 from "../img/leonardo-wong-7pGehyH7o64-unsplash.jpg";

const slides = [
  {
    imgSrc: img1,
    imgAlt: "asdfjh",
    href: "#",
    desc: "Quis cillum incididunt fugiat aute duis dolore.",
    title: "Новые поступления",
  },
  {
    imgSrc: img1,
    imgAlt: "sdgh",
    href: "#",
    desc: "Minim ut voluptate esse exercitation nisi non cillum.",
    title: "Распродажа",
  },
  {
    imgSrc: img1,
    imgAlt: "sdfg",
    href: "#",
    desc: "Aliquip cillum id minim reprehenderit.",
    title: "Специальные предложения",
  },
];

export default function App() {
  return (
    <div className="relative">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        rewind={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Scrollbar, Autoplay, Navigation, Virtual]}
        className="sm:rounded-xl my-4 static"
        virtual
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide} virtualIndex={index}>
            <a href={slide.href} className="group">
              <img
                src={slide.imgSrc}
                alt=""
                className="max-h-64 w-full object-center object-cover"
              />
              <span className="absolute bg-white px-6 py-2 rounded-md w-2/4 max-w-xs h-3/4 top-[12.5%] left-[12.5%] sm:left-8">
                <div className="w-full h-full flex flex-col justify-evenly items-start">
                  <h3 className="text-xl leading-tight">{slide.title}</h3>
                  <p>{slide.desc}</p>
                  <button className="py-2 px-3 rounded-md bg-gray-200 group-hover:bg-accent group-hover:text-white">
                    Перейти
                  </button>
                </div>
              </span>
            </a>
          </SwiperSlide>
        ))}
        <div className="absolute top-1/2 z-10 -translate-y-1/2 sm:-left-5">
          <SlidePrevButton />
        </div>
        <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2 sm:-right-5">
          <SlideNextButton />
        </div>
      </Swiper>
    </div>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="text-gray-900/50 relative group"
      onClick={() => swiper.slideNext()}
    >
      <div
        className="hidden sm:block sm:absolute sm:-translate-x-1.5 sm:-translate-y-1.5 h-0 w-0 
        sm:h-11 sm:w-11 rounded-full sm:bg-gray-200 sm:border-white sm:border-2 sm:group-hover:scale-[1.15] -z-10"
      ></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 sm:h-8 sm:w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      className="text-gray-900/50 relative group"
      onClick={() => swiper.slidePrev()}
    >
      <div
        className="hidden sm:block sm:absolute sm:-translate-x-1.5 sm:-translate-y-1.5 h-0 w-0 
      sm:h-11 sm:w-11 rounded-full sm:bg-gray-200 sm:border-white sm:border-2 sm:group-hover:scale-[1.15] -z-10"
      ></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 sm:h-8 sm:w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
