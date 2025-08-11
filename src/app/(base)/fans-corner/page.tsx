"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Pagination, Mousewheel } from "swiper/modules";
import Image from "next/image";

export default function FansSlider() {
  const fans = [
    {
      id: "01",
      name: "Fan's Name",
      img: "https://i.ibb.co.com/ccMt2Nmq/3b6f066e-859c-4208-bc76-59db773b56bd.jpg",
      bg: "bg-black",
      textColor: "text-white",
      btnBorder: "border-[#d3a262]",
      btnText: "text-white",
    },
    {
      id: "02",
      name: "Fan's Name",
      img: "https://i.ibb.co.com/ccMt2Nmq/3b6f066e-859c-4208-bc76-59db773b56bd.jpg",
      bg: "bg-white",
      textColor: "text-black",
      btnBorder: "border-[#d3a262]",
      btnText: "text-black",
    },
    {
      id: "03",
      name: "Fan's Name",
      img: "https://i.ibb.co.com/ccMt2Nmq/3b6f066e-859c-4208-bc76-59db773b56bd.jpg",
      bg: "bg-white",
      textColor: "text-black",
      btnBorder: "border-[#d3a262]",
      btnText: "text-white",
    },
    {
      id: "04",
      name: "Fan's Name",
      img: "https://i.ibb.co.com/ccMt2Nmq/3b6f066e-859c-4208-bc76-59db773b56bd.jpg",
      bg: "bg-black",
      textColor: "text-white",
      btnBorder: "border-[#d3a262]",
      btnText: "text-black",
    },
    {
      id: "05",
      name: "Fan's Name",
      img: "https://i.ibb.co.com/ccMt2Nmq/3b6f066e-859c-4208-bc76-59db773b56bd.jpg",
      bg: "bg-black",
      textColor: "text-white",
      btnBorder: "border-[#d3a262]",
      btnText: "text-white",
    },
    {
      id: "06",
      name: "Fan's Name",
      img: "https://i.ibb.co.com/ccMt2Nmq/3b6f066e-859c-4208-bc76-59db773b56bd.jpg",
      bg: "bg-white",
      textColor: "text-black",
      btnBorder: "border-[#d3a262]",
      btnText: "text-black",
    },
  ];

  return (
    <div className="w-full h-screen">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel
        pagination={{ clickable: true }}
        modules={[Pagination, Mousewheel]}
        className="w-full h-full"
      >
        {Array.from({ length: Math.ceil(fans.length / 2) }).map((_, i) => {
          const leftFan = fans[i * 2];
          const rightFan = fans[i * 2 + 1];

          return (
            <SwiperSlide key={i}>
              <div className="flex w-full h-full">
                {/* Left */}
                {leftFan && (
                  <div
                    className={`w-1/2 flex flex-col justify-between items-center p-6 ${leftFan.bg}`}
                  >
                    {/* Top */}
                    <div
                      className={`flex items-center justify-center gap-4 text-4xl font-bold ${leftFan.textColor}`}
                    >
                      <span className="opacity-20 text-6xl">{leftFan.id}</span>
                      <span>{leftFan.name}</span>
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex items-center justify-center w-[450px] h-[600px]">
                      <Image
                        src={leftFan.img}
                        alt={leftFan.name}
                        width={450}
                        height={600}
                      />
                    </div>

                    {/* Button */}
                    <button
                      className={`mt-6 px-6 py-2 border ${leftFan.btnBorder} ${leftFan.btnText} hover:bg-[#d3a262] hover:text-white transition`}
                    >
                      FAN&#39;S INSTAGRAM
                    </button>
                  </div>
                )}

                {/* Right */}
                {rightFan && (
                  <div
                    className={`w-1/2 flex flex-col justify-between items-center p-6 ${rightFan.bg}`}
                  >
                    {/* Top */}
                    <div
                      className={`flex items-center justify-center gap-4 text-4xl font-bold ${rightFan.textColor}`}
                    >
                      <span className="opacity-20 text-6xl">{rightFan.id}</span>
                      <span>{rightFan.name}</span>
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex items-center justify-center w-[450px] h-[600px]">
                      <Image
                        src={leftFan.img}
                        alt={leftFan.name}
                        width={450}
                        height={600}
                      />
                    </div>

                    {/* Button */}
                    <button
                      className={`mt-6 px-6 py-2 border ${rightFan.btnBorder} ${rightFan.btnText} hover:bg-[#d3a262] hover:text-white transition`}
                    >
                      FAN&#39;S INSTAGRAM
                    </button>
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
