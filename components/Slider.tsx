"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Car } from "@/app/types/global";

const customStyles = `
  .swiper-slide {
    transform: scaleY(0.8);
    z-index: 0;
  }
  .swiper-slide-active {
    transform: scaleY(1);
    z-index: 10;
  }
  .fraction-container {
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-size: 12px;
    color: #ffffff;
  }
`;

function Slider({ cars }: { cars: Car[] }) {
  const sortedCars = cars.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );
  const latestCars = sortedCars.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[220px] py-4 mb-20">
      <h1 className="text-2xl px-2 pb-4 pt-0">¡Novedades!</h1>
      <style>{customStyles}</style>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        slidesPerView="auto"
        centeredSlides
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          type: "fraction",
          el: ".custom-fraction",
        }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full md:w-[70%] h-full"
      >
        {latestCars.map((car, index) => (
          <SwiperSlide key={car.id} style={{ width: "auto" }}>
            <Link href={`coches/${car.id}`}>
              <div className="relative h-full w-[280px]">
                <Image
                  src={car.images[0]}
                  fill
                  alt={`${car.marca} ${car.modelo}`}
                  className="object-cover rounded-sm"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-1 rounded-b-sm ">
                  <h3 className="text-sm font-bold">{car.marca}</h3>
                  <p className="text-sm">{car.modelo}</p>
                </div>
                {activeIndex === index && (
                  <div className="fraction-container">
                    {activeIndex + 1} / {latestCars.length}
                  </div>
                )}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
