"use client";

import { Car } from "@/app/types/global";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function CarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [car, setCar] = useState<Car | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCar() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_CAR_FACIL_API;
        if (!apiUrl) throw new Error("La URL de la API no está definida");

        const res = await fetch(`${apiUrl}/coches/${id}`);
        if (!res.ok) throw new Error("Error al obtener los datos del coche");

        const data: Car = await res.json();
        setCar(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      }
    }

    fetchCar();
  }, [id]);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!car) return <div className="text-gray-500">Cargando...</div>;

  return (
    <div className="w-full mx-auto py-16 ">
      <div className="w-full h-72">
        <Image
          src={car.images[0]}
          width={800}
          height={800}
          alt={`${car.marca} ${car.modelo}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <h1 className="text-xl font-bold">
          {car.marca} {car.modelo}
        </h1>
        <p className="text-sm text-gray-700">Año: {car.anio}</p>
        <p className="text-sm text-gray-700">
          Precio: ${Number(car.precio).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
