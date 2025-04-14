"use client";

import { Car } from "@/app/types/global";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  car: Car;
};

export default function Car_Details({ car }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full mx-auto pt-20 p-2">
      {/* Galería de imágenes */}
      <div className="mb-6">
        <div className="w-full h-80">
          <Swiper
            loop
            spaceBetween={0}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="relative w-full h-full"
          >
            {car.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full">
                  <Image
                    src={image}
                    width={1350}
                    height={750}
                    alt={`${car.marca} ${car.modelo}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="absolute bottom-2 right-2 text-sm bg-black bg-opacity-60 py-1 px-2 rounded-xl text-white">
                  {index + 1} / {car.images.length}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full h-16 pt-2 ">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop
            spaceBetween={8}
            slidesPerView={3}
            freeMode
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full h-full "
          >
            {car.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  width={800}
                  height={450}
                  alt={`${car.marca} ${car.modelo}`}
                  className="w-full h-full object-cover rounded"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Info coche */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 px-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {car.marca} {car.modelo} {car.anio}
          </h1>
          <p className="text-2xl font-bold text-red-500 mb-6">
            {Number(car.precio).toLocaleString()} €
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-gray-600">
            <span>Año: {car.anio}</span>
            <span>Kilómetros: 15.000</span>
            <span>Combustible: {car.combustible}</span>
            <span>Cambio: {car.cambio}</span>
          </div>

          <h2 className="text-xl font-semibold mb-4">Descripción</h2>
          <p className="text-gray-600 mb-8">descripcion</p>
        </div>
      </div>
    </div>
  );
}
