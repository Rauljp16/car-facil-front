"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Car } from "@/app/page";
import Image from "next/image";

function Slider({ cars }: { cars: Car[] }) {
  const sortedCars = cars.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const latestCars = sortedCars.slice(0, 5);

  console.log(`datos desde slide ${latestCars}`);
  return (
    <div className="relative w-full h-40 py-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className=" h-full"
        // pagination={{ clickable: true }}
      >
        {latestCars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="h-full">
              <Image
                src={car.foto}
                width={1200}
                height={1000}
                alt={`Car ${index}`}
                className="h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute swiper-button-prev left-0 top-1/2 z-10 p-2 bg-white/80 text-black rounded-full hover:bg-white">
        <Image
          src="/svg/prev.svg"
          width={24}
          height={24}
          alt="Boton prev"
          className="w-6 h-6"
        />
      </div>
      <div className="absolute swiper-button-next right-0 top-1/2 z-10 p-2 bg-white/80 text-black rounded-full hover:bg-white">
        <Image
          src="/svg/next.svg"
          width={24}
          height={24}
          alt="Boton next"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}

export default Slider;
