import Image from "next/image";
import React from "react";

function Initial_Info() {
  return (
    <section className="relative top-32 w-full max-w-[1200px] min-h-screen pl-4">
      <div className="absolute -z-10 -top-32 right-0 w-1/4 h-2/4 bg-contrast blur-[1px] border "></div>
      <div className="flex justify-between">
        <article className="relative -top-8 flex flex-col gap-2">
          <Image
            src="/images/coche4.jpg"
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 object-cover"
          />
          <Image
            src="/images/coche5.jpg"
            alt=""
            width={100}
            height={100}
            className="w-16 h-16 object-cover"
          />
          <Image
            src="/images/coche3.jpg"
            alt=""
            width={100}
            height={100}
            className="w-16 h-16 object-cover"
          />
        </article>
        <article className="relative  right-4 -z-10 ">
          <Image
            src="/images/coche1.jpg"
            alt=""
            width={1000}
            height={1200}
            className="w-auto h-[400px] object-cover"
          />
        </article>
      </div>
      <div className="py-6">
        <h1 className="text-5xl">Car Fácil</h1>
        <div>
          <p className="text-xs w-3/4 py-6">
            Encuentra el coche perfecto para ti, con opciones que se adaptan a
            tu estilo y presupuesto.
          </p>
          <div className="flex gap-4">
            <button className="flex gap-2 bg-black rounded-2xl text-xs text-white px-5 py-1">
              Ver Coches
              <Image
                src="/svg/arrow_green.svg"
                alt="arrow"
                width={16}
                height={16}
              />
            </button>
            <button className="flex gap-2 border-[1px] border-black rounded-2xl text-xs text-black px-5 py-1">
              Ubicación
              <Image src="/svg/arrow.svg" alt="arrow" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Initial_Info;
