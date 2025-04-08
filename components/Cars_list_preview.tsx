import { Car } from "@/app/types/global";
import Image from "next/image";
import Link from "next/link";

function Cars_List({ cars }: { cars: Car[] }) {
  const carsPreview = cars.slice(0, 3);

  return (
    <div>
      <ul className="flex flex-col p-6 gap-6 bg-neutral-300">
        {carsPreview.map((car) => (
          <li key={car.id} className="">
            <div className="flex flex-col w-full h-80 rounded-xl">
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
                <div className="flex items-end gap-4">
                  <h3 className="text-base tracking-wide font-bold">
                    {car.marca} {car.modelo}
                  </h3>
                  <p className="text-sm text-red-500 tracking-wide ">
                    {car.precio} €
                  </p>
                </div>
                <div className="flex justify-between gap-2">
                  <article className="flex bg-neutral-600 text-xs items-center p-1 w-full rounded gap-1">
                    <Image
                      src="/svg/calendar.svg"
                      alt="svg calendar"
                      width={16}
                      height={16}
                      className="w-4"
                    />
                    <p className="text-xs pt-[2px] mx-auto">{car.anio}</p>
                  </article>
                  <article className="flex bg-neutral-600 text-xs items-center p-1 w-full rounded gap-1">
                    <Image
                      src="/svg/km.svg"
                      alt="svg kilometers"
                      width={14}
                      height={14}
                      className="w-4"
                    />
                    <p className="text-xs pt-[2px] mx-auto">{car.km}</p>
                  </article>
                  <article className="flex bg-neutral-600 text-xs items-center p-1 w-full rounded gap-1">
                    <Image
                      src="/svg/fuel.svg"
                      alt="svg fuel"
                      width={16}
                      height={16}
                      className=" w-4"
                    />
                    <p className="text-xs pt-[2px] mx-auto">
                      {car.combustible}
                    </p>
                  </article>
                </div>
                <Link href={`coches/${car.id}`}>
                  <button className=" bg-greenCarFacil w-full p-1 rounded-2xl">
                    Ver Detalles
                  </button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex w-full justify-end pr-6 pb-4 -mt-4 bg-neutral-300">
        <Link
          href={"coches/todos"}
          className="bg-red-500 text-white text-sm px-2 py-1 rounded-2xl cursor-pointer"
        >
          Ver todos
        </Link>
      </div>
    </div>
  );
}

export default Cars_List;
