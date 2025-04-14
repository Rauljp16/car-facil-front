"use client";

import { Car } from "@/app/types/global";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, A11y } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type Props = {
  car: Car;
};

export default function Car_Details({ car }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full mx-auto pt-20 p-2">
      {/* Galería de imágenes */}
      <div className="mb-6">
        {/* Swiper Principal (Galería Grande) */}
        <div className="w-full h-80">
          <Swiper
            loop
            spaceBetween={0}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            // 1. Añade A11y a los módulos
            modules={[FreeMode, Navigation, Thumbs, A11y]}
            // 5. Añade 'group' si quieres usar hover para mostrar/ocultar botones con CSS/Tailwind
            className="relative w-full h-full group"
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
                <div className="absolute flex gap-1 bottom-2 right-2 text-sm bg-neutral-900 bg-opacity-60 py-1 px-2 rounded-xl text-white">
                  <p className="text-red-500 font-bold">{index + 1}</p>
                  <p>/</p>
                  <p>{car.images.length}</p>
                </div>
              </SwiperSlide>
            ))}
            {/* Los elementos .swiper-button-prev y .swiper-button-next se añaden aquí */}
            <div className="absolute w-full flex items-center p-2 justify-between h-full top-0 left-0 text-xl font-bold text-white">
              <button className="custom-prev flex items-center justify-center bg-neutral-900 bg-opacity-60 px-2 pt-1 pb-1 rounded-lg z-10">
                {"<"}
              </button>
              <button className="custom-next flex items-center justify-center  bg-neutral-900 bg-opacity-60 px-2 pt-1 pb-1 rounded-lg z-10">
                {">"}
              </button>
            </div>
          </Swiper>
        </div>

        {/* Swiper Secundario (Thumbnails) */}
        <div className="w-full h-16 pt-2 ">
          <Swiper
            onSwiper={setThumbsSwiper}
            // 4. loop=false es generalmente mejor para thumbnails
            loop={false}
            spaceBetween={8}
            slidesPerView={3} // Ajusta cuántos thumbs quieres mostrar a la vez
            freeMode={true}
            // 4. watchSlidesProgress es importante para la sincronización de thumbs
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="w-full h-full thumbnail-swiper"
          >
            {car.images.map((image, index) => (
              // 4. Añade cursor-pointer para indicar que son clickables
              <SwiperSlide key={index} className="cursor-pointer">
                <Image
                  src={image}
                  width={800} // Puedes ajustar estos tamaños si es necesario
                  height={450}
                  alt={`${car.marca} ${car.modelo} thumbnail ${index + 1}`}
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
            {/* Asegúrate que car.precio es un número o string convertible */}
            {Number(car.precio).toLocaleString("es-ES", {
              style: "currency",
              currency: "EUR",
            })}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-gray-600">
            {/* Asegúrate que los datos existen en tu tipo Car */}
            <span>Año: {car.anio}</span>
            <span>
              Kilómetros: {car.km ? car.km.toLocaleString("es-ES") : "N/A"} km
            </span>
            <span>Combustible: {car.combustible}</span>
            <span>Cambio: {car.cambio}</span>
          </div>

          <h2 className="text-xl font-semibold mb-4">Descripción</h2>
          <p className="text-gray-600 mb-8">descripción hardcodeada.</p>
        </div>
      </div>
      <style jsx global>{`
        .thumbnail-swiper .swiper-slide img {
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .thumbnail-swiper .swiper-slide-thumb-active img {
          opacity: 1;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
