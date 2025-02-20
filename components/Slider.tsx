"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Importa los estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Car } from "@/app/page";
import Image from "next/image";

// Estilos personalizados
const customStyles = `
  .swiper-slide {
    transition: all 0.5
  }
  .swiper-slide-active {
    z-index: 2;
  }
`;

function Slider({ cars }: { cars: Car[] }) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const sortedCars = cars.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const latestCars = sortedCars.slice(0, 5);

  // Configuración del slider
  const swiperParams = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
  };

  // Funciones de navegación personalizadas
  const goNext = () => {
    if (swiper) swiper.slideNext();
  };

  const goPrev = () => {
    if (swiper) swiper.slidePrev();
  };

  return (
    <div className="relative w-full h-60 py-4 mb-20">
      <h1 className="text-2xl p-2 pt-0">¡Novedades!</h1>
      <style>{customStyles}</style>
      <Swiper {...swiperParams} onSwiper={setSwiper} className="h-full">
        {latestCars.map((car, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative h-full w-full">
              <Image
                src={car.foto}
                layout="fill"
                objectFit="cover"
                alt={`Car ${index}`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <h3 className="text-sm font-bold">{car.marca}</h3>
                <p className="text-xs">{car.modelo}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={goPrev}
        className="absolute left-[40%] -bottom-16 z-10 p-[2px] bg-neutral-700/40 rounded-lg hover:bg-white "
      >
        <Image
          src="/svg/prev.svg"
          width={24}
          height={24}
          alt="Botón prev"
          className="w-6 h-6"
        />
      </button>
      <button
        onClick={goNext}
        className="absolute right-[40%] -bottom-16 z-10 p-[2px] bg-neutral-700/40 rounded-lg hover:bg-white "
      >
        <Image
          src="/svg/next.svg"
          width={24}
          height={24}
          alt="Botón next"
          className="w-6 h-6"
        />
      </button>
    </div>
  );
}

export default Slider;
