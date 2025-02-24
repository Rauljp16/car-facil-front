import Image from "next/image";

interface CarPageProps {
  params: { id: string };
}

export default async function CarPage({ params }: CarPageProps) {
  const { id } = params;

  const apiUrl = process.env.CAR_FACIL_API;
  const res = await fetch(`${apiUrl}/coches/${id}`);

  if (!res.ok) {
    return <div>No se encontró el coche con ID {id}</div>;
  }

  const car = await res.json();

  return (
    <div>
      <h1>
        {car.marca} {car.modelo}
      </h1>
      <Image
        src={car.foto}
        width={800}
        height={800}
        alt={`${car.marca} ${car.modelo}`}
        className="w-full h-full object-cover"
      />
      <p>Año: {car.anio}</p>
      <p>Precio: {car.precio}</p>
    </div>
  );
}
