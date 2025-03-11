import { Car } from "@/app/types/global";
import Image from "next/image";
import Link from "next/link";

function Cars_List({ cars }: { cars: Car[] }) {
  return (
    <div>
      <h1>Lista de Autos</h1>
      <ul className="grid grid-cols-2 gap-4 px-4">
        {cars.map((car) => (
          <div key={car.id}>
            <Link href={`/coches/${car.id}`}>
              <li className="relative group w-full h-32 cursor-pointer transition-opacity duration-300 group-hover:opacity-60">
                <Image
                  src={car.images[0]}
                  alt={`${car.marca} ${car.modelo}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-60"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-1 text-white transition-opacity duration-300 group-hover:opacity-60">
                  <div className="flex justify-between ">
                    <h3 className="text-sm font-bold">{car.marca}</h3>
                    <p className="text-xs mx-auto">{car.modelo}</p>
                  </div>
                  <p className="text-xs">{car.precio}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cars_List;
