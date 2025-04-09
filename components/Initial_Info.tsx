import Image from "next/image";
import Link from "next/link";
import React from "react";

function Initial_Info() {
  return (
    <section className="relative flex flex-col w-full h-[calc(100vh-20vh)]">
      <div className="flex justify-center w-full h-[65%]">
        <article className="relative top-16 flex flex-col w-[13%] max-w-12 h-1/2 gap-2">
          <Image
            src="/images/coche10.png"
            alt=""
            width={80}
            height={80}
            className="w-full h-auto object-cover aspect-square"
          />
          <Image
            src="/images/coche9.png"
            alt=""
            width={80}
            height={80}
            className="w-full h-auto object-cover aspect-square"
          />
          <Image
            src="/images/coche6.png"
            alt=""
            width={80}
            height={80}
            className="w-full h-auto object-cover aspect-square"
          />
        </article>
        <article className="relative w-64 h-full pt-[85px] -z-10 right-4">
          <Image
            src="/images/coche12.png"
            alt=""
            width={1000}
            height={1400}
            className=" w-full h-full object-cover "
          />
        </article>
      </div>
      <div className="flex flex-col justify-between w-full h-[35%] p-4">
        <h1 className="text-4xl font-thin">Un coche para tí</h1>
        <p className="text-sm w-full max-w-80">
          Encuentra el coche perfecto para ti, con opciones que se adaptan a tu
          estilo y presupuesto.
        </p>
        <div className="flex gap-4 w-full max-w-80">
          <Link
            href={"coches/todos"}
            className="flex w-full items-center justify-evenly bg-black rounded-2xl text-sm text-white py-2"
          >
            Ver Coches
            <Image
              src="/svg/arrow_green.svg"
              alt="arrow"
              width={16}
              height={16}
            />
          </Link>
          <Link
            href="#contact"
            className="flex w-full items-center justify-evenly border-[1px] border-black rounded-2xl text-sm text-black py-2"
          >
            Contacto
            <Image src="/svg/arrow.svg" alt="arrow" width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Initial_Info;
