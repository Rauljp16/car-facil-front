"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Car } from "@/app/types/global";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarPage() {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCar() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_CAR_FACIL_API;
        if (!apiUrl) throw new Error("La URL de la API no está definida");

        const res = await fetch(`${apiUrl}/coches/${id}`);
        if (!res.ok) throw new Error("Error al obtener los datos del coche");

        const data: Car = await res.json();
        setTimeout(() => {
          setCar(data);
          setIsLoading(false);
        }, 2000);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
        setIsLoading(false);
      }
    }

    if (id) {
      fetchCar();
    }
  }, [id]);

  if (isLoading) return <div className="text-gray-500">Cargando...nuevo</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!car) return <div className="text-gray-500">Cargando...</div>;

  return (
    <div className="w-full mx-auto py-16">
      {/* Image Gallery */}
      <div className="mb-6">
        <div className="w-full h-64">
          <Swiper
            loop={true}
            spaceBetween={0}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full h-full"
          >
            {car.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  width={1350}
                  height={750}
                  alt={`${car.marca} ${car.modelo}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 text-xs bg-black bg-opacity-60 py-1 px-2 rounded-xl text-white">
                  {index + 1} / {car.images.length}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full h-16 pt-2">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={8}
            slidesPerView={3}
            freeMode={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full h-full"
          >
            {car.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  width={800}
                  height={450}
                  alt={`${car.marca} ${car.modelo}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Car Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 px-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {car.marca} {car.modelo} {car.anio}
          </h1>
          <p className="text-2xl font-bold text-red-500 mb-6">
            {Number(car.precio).toLocaleString()} €
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Año: {car.anio}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Kilómetros: 15.000 </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Combustible: {car.combustible}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>Cambio: {car.cambio}</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Descripción</h2>
          <p className="text-gray-600 mb-8">descripcion</p>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-sm shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-4">
              Contactar al vendedor
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xs text-gray-700 ">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-gray-700 ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs text-gray-700 ">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs text-gray-700 ">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm"
                  defaultValue="Me interesa este coche. ¿Podría proporcionarme más información?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 px-4 rounded-sm hover:bg-orange-600 transition-colors"
              >
                Enviar mensaje
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center space-x-2 text-gray-600">
              <span>UBICACION por determinar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
