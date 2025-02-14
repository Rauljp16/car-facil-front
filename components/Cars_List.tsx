import { Car } from "@/app/page";
import Image from "next/image";

function Cars_List({ cars }: { cars: Car[] }) {
  return (
    <div>
      <h1>Lista de Autos</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <h2>
              {car.marca} {car.modelo} ({car.anio})
            </h2>
            <p>Precio: ${car.precio}</p>
            <Image
              src={car.foto}
              alt={`${car.marca} ${car.modelo}`}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cars_List;
