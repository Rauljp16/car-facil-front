import { Car } from "@/app/types/global";
import Image from "next/image";
import Link from "next/link";

function Cars_List({ cars }: { cars: Car[] }) {
  return (
    <div>
      <h1>Todos los coches</h1>
      <ul className="p-2 bg-neutral-300">
        {cars.map((car) => (
          <li key={car.id} className="py-2 px-4 mb-4">
            <div className="flex flex-col w-full h-96 rounded-xl">
              <div className="w-full h-1/2 rounded-xl">
                <Image
                  src={car.images[0]}
                  alt={`${car.marca} ${car.modelo}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover center rounded-t-md"
                />
              </div>
              <div className="flex flex-col h-1/2 justify-between bg-neutral-800 text-neutral-50 rounded-b-md p-4 pt-3">
                <div className="flex items-end gap-1">
                  <h3 className="text-base tracking-wide font-bold -mb-2">
                    {car.marca} {car.modelo}
                  </h3>
                </div>
                <p className="text-sm tracking-wide font-bold bg-neutral-600 w-fit py-1 px-2 rounded-2xl">
                  {car.precio} €
                </p>
                <div className="flex justify-between gap-2">
                  <article className="flex bg-neutral-600 text-xs items-center px-2 py-1 w-full rounded-sm gap-1">
                    <Image
                      src="/svg/calendar.svg"
                      alt="svg calendar"
                      width={16}
                      height={16}
                      className=" h-full"
                    />
                    <p className="text-xs pt-[2px] mx-auto">{car.anio}</p>
                  </article>
                  <article className="flex bg-neutral-600 text-xs items-center px-2 py-1 w-full rounded-sm gap-1">
                    <Image
                      src="/svg/km.svg"
                      alt="svg kilometers"
                      width={14}
                      height={14}
                      className=" h-full"
                    />
                    <p className="text-xs pt-[2px] mx-auto">160.000 km</p>
                  </article>
                  <article className="flex bg-neutral-600 text-xs items-center px-2 py-1 w-full rounded-sm gap-1">
                    <Image
                      src="/svg/fuel.svg"
                      alt="svg fuel"
                      width={16}
                      height={16}
                      className=" h-full"
                    />
                    <p className="text-xs pt-[2px] mx-auto">
                      {car.combustible}
                    </p>
                  </article>
                </div>
                <Link href={`/coches/${car.id}`}>
                  <button className=" bg-greenCarFacil w-full p-1 rounded-md">
                    Ver Detalles
                  </button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cars_List;
