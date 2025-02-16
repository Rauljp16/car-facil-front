import Image from "next/image";
import React from "react";

function Initial_Info() {
  return (
    <section className="relative flex flex-col w-full h-screen">
      <div className="absolute -z-10 -top-32 right-0 w-1/4 h-2/4 bg-contrast blur-[1px] border "></div>
      <div className="flex justify-center w-full h-2/3">
        <article className="relative top-20 left-4 flex flex-col w-16 h-1/2 gap-2">
          <Image
            src="/images/coche10.png"
            alt=""
            width={80}
            height={80}
            className="w-full object-cover aspect-square"
          />
          <Image
            src="/images/coche9.png"
            alt=""
            width={80}
            height={80}
            className="w-full object-cover aspect-square"
          />
          <Image
            src="/images/coche6.png"
            alt=""
            width={80}
            height={80}
            className="w-full object-cover aspect-square"
          />
        </article>
        <article className="relative w-80 h-full pt-24 pb-4 -z-10 right-4">
          <Image
            src="/images/coche12.png"
            alt=""
            width={1000}
            height={1400}
            className=" w-full h-full object-cover "
          />
        </article>
      </div>
      <div className="flex flex-col justify-between w-full h-1/3 px-4 pt-4 pb-10">
        <h1 className="text-5xl font-thin">Un coche para tí</h1>
        <p className="text-xs w-3/4">
          Encuentra el coche perfecto para ti, con opciones que se adaptan a tu
          estilo y presupuesto.
        </p>
        <div className="flex gap-4 w-full max-w-80">
          <button className="flex w-full items-center justify-center gap-3 bg-black rounded-2xl text-xs text-white px-5 py-2">
            Ver Coches
            <Image
              src="/svg/arrow_green.svg"
              alt="arrow"
              width={16}
              height={16}
            />
          </button>
          <button className="flex w-full items-center justify-center gap-3 border-[1px] border-black rounded-2xl text-xs text-black px-5 py-2">
            Ubicación
            <Image src="/svg/arrow.svg" alt="arrow" width={16} height={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Initial_Info;
