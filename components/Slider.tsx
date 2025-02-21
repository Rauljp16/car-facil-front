"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Car } from "@/app/page";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const customStyles = `
  .swiper-slide {
    transform: scaleY(0.8);
    z-index: 0;
  }
  .swiper-slide-active {
  transform: scaleY(1);
      z-index: 10;
  }
`;

function Slider({ cars }: { cars: Car[] }) {
  const sortedCars = cars.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  const latestCars = sortedCars.slice(0, 5);

  const swiperParams = {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <div className="relative w-full h-[300px] py-4 mb-20">
      <h1 className="text-2xl p-2 pt-0">¡Novedades!</h1>
      <style>{customStyles}</style>
      <Swiper {...swiperParams} className="w-full h-full">
        {latestCars.map((car, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div className="relative h-full w-[280px]">
              <Image
                src={car.foto}
                layout="fill"
                objectFit="cover"
                alt={`${car.marca} ${car.modelo}`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <h3 className="text-sm font-bold">{car.marca}</h3>
                <p className="text-xs">{car.modelo}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
