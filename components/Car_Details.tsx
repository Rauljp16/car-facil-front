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
import SendMessage from "./Send_Message";

type Props = {
  car: Car;
};

export default function Car_Details({ car }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const formatNumber = new Intl.NumberFormat("es-ES", {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <div className="w-full mx-auto pt-20 p-2">
      {/* Galería de imágenes */}
      <div>
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
      <div className=" flex flex-col gap-4 border border-neutral-200 rounded p-4 mt-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="tracking-wide font-bold text-2xl">
              {car.marca} {car.modelo}
            </p>
            <p className="text-sm">
              {car.anio} | {car.combustible}
            </p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className=" text-2xl text-green-600 font-bold">{car.precio} €</p>
            <p className="text-sm border w-fit border-neutral-300 rounded-xl px-2 py-[1px]">
              precio negociable
            </p>
          </div>
        </div>

        <div className="border-b border-neutral-200"></div>
        <div className="flex flex-wrap gap-4">
          <div className="flex w-full gap-4">
            <article className="flex flex-col items-center border border-neutral-200 w-full rounded py-2">
              <Image
                src="/svg/kmBlack.svg"
                alt="icono de kilometros"
                width={20}
                height={20}
                className="w-6 h-6 "
              />
              <p>{car.km}</p>
            </article>
            <article className="flex flex-col items-center border border-neutral-200 w-full rounded py-2">
              <Image
                src="/svg/fuelBlack.svg"
                alt="icono de combustible"
                width={20}
                height={20}
                className="w-6 h-6 "
              />
              <p>{car.combustible}</p>
            </article>
          </div>
          <div className="flex w-full gap-4">
            <article className="flex flex-col items-center border border-neutral-200 w-full rounded py-2">
              <Image
                src="/svg/gearbox.svg"
                alt="icono tipo de cambio de marchas"
                width={20}
                height={20}
                className="w-6 h-6 "
              />
              <p>{car.cambio}</p>
            </article>
            <article className="flex flex-col items-center border border-neutral-200 w-full rounded py-2">
              <Image
                src="/svg/carDoor.svg"
                alt="icono de car Door"
                width={20}
                height={20}
                className="w-6 h-6 "
              />
              <p>{car.puertas}</p>
            </article>
          </div>
        </div>

        <h1 className="text-lg font-bold -mb-1">Especificaciones</h1>
        <div className="flex flex-col gap-2">
          <article className="flex justify-between bg-neutral-200 px-2 py-1 rounded">
            <p>Año</p>
            <p className="font-bold text-neutral-600">{car.anio}</p>
          </article>
          <article className="flex justify-between bg-neutral-200 px-2 py-1 rounded">
            <p>Kilometros</p>
            <p className="font-bold text-neutral-600">
              {car.km.toLocaleString()}
            </p>
          </article>
          <article className="flex justify-between bg-neutral-200 px-2 py-1 rounded">
            <p>Combustible</p>
            <p className="font-bold text-neutral-600">{car.combustible}</p>
          </article>
          <article className="flex justify-between bg-neutral-200 px-2 py-1 rounded">
            <p>Transmisión</p>
            <p className="font-bold text-neutral-600">{car.cambio}</p>
          </article>
          <article className="flex justify-between bg-neutral-200 px-2 py-1 rounded">
            <p>CV</p>
            <p className="font-bold text-neutral-600">{car.cv}</p>
          </article>
          <article className="flex justify-between bg-neutral-200 px-2 py-1 rounded">
            <p>Motor</p>
            <p className="font-bold text-neutral-600">
              {formatNumber.format(Number(car.motor))}
            </p>
          </article>
          <article className="flex justify-between bg-neutral-200 px-2 py-1 rounded">
            <p>Plazas</p>
            <p className="font-bold text-neutral-600">{car.plazas}</p>
          </article>
          <article className="flex justify-between bg-neutral-200 px-2 py-1 rounded">
            <p>Puertas</p>
            <p className="font-bold text-neutral-600">{car.puertas}</p>
          </article>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-xl font-bold">¿Quieres saber más?</h2>
        <p className="text-sm ">
          Contacta con nosotros para más información sobre este coche.
        </p>
        <SendMessage />
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
