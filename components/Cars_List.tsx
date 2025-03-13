import { Car } from "@/app/types/global";
import Image from "next/image";
import Link from "next/link";

function Cars_List({ cars }: { cars: Car[] }) {
  return (
    <div>
      <h1>Todos los coches</h1>
      <ul className="p-2 bg-neutral-600">
        {cars.map((car) => (
          <div key={car.id} className="py-2 px-4">
            <Link href={`/coches/${car.id}`}>
              <li className="flex flex-col w-full h-80 rounded-xl">
                <div className="w-full h-1/2 rounded-xl">
                  <Image
                    src={car.images[0]}
                    alt={`${car.marca} ${car.modelo}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover center rounded-t-md"
                  />
                </div>
                <div className="h-1/2 bg-black text-neutral-50 rounded-b-md">
                  <div className="flex justify-between ">
                    <h3 className="text-sm font-bold">{car.marca}</h3>
                    <p className="text-xs mx-auto">{car.modelo}</p>
                  </div>
                  <p className="text-xs">{car.precio}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0  transition-opacity duration-300"></div>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cars_List;
