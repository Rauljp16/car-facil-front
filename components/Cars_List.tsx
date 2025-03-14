import { Car } from "@/app/types/global";
import Image from "next/image";
import Link from "next/link";

function Cars_List({ cars }: { cars: Car[] }) {
  return (
    <div>
      <h1>Todos los coches</h1>
      <ul className="p-2 bg-neutral-300">
        {cars.map((car) => (
          <div key={car.id} className="py-2 px-4 mb-4">
            <Link href={`/coches/${car.id}`}>
              <li className="flex flex-col w-full h-96 rounded-xl">
                <div className="w-full h-1/2 rounded-xl">
                  <Image
                    src={car.images[0]}
                    alt={`${car.marca} ${car.modelo}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover center rounded-t-md"
                  />
                </div>
                <div className="flex flex-col h-1/2 justify-between bg-neutral-900 text-neutral-50 rounded-b-md p-4 pt-3">
                  <div className="flex items-end gap-1">
                    <h3 className="text-base tracking-wide font-bold -mb-2">
                      {car.marca} {car.modelo}
                    </h3>
                  </div>
                  <p className="text-sm tracking-wide font-bold bg-neutral-600 w-fit py-1 px-2 rounded-2xl">
                    {car.precio} €
                  </p>
                  <div className="flex justify-between gap-2">
                    <article className="bg-neutral-600 text-xs py-1 px-2 w-full rounded-sm">
                      <p>{car.anio}</p>
                    </article>
                    <article className="bg-neutral-600 text-xs py-1 px-2 w-full rounded-sm">
                      <p>160.000 km</p>
                    </article>
                    <article className="bg-neutral-600 text-xs py-1 px-2 w-full rounded-sm">
                      <p>{car.combustible}</p>
                    </article>
                  </div>
                  <button className=" bg-greenCarFacil p-1 rounded-md">
                    Ver Detalles
                  </button>
                </div>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cars_List;
