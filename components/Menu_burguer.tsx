"use client";
import Image from "next/image";

function Menu_burguer() {
  const toogleMenu = () => {
    console.log("menu burguer");
  };
  return (
    <>
      <div onClick={toogleMenu} className="z-50">
        <Image
          src="/svg/menu_burguer.svg"
          alt="Menu burguer"
          width={20}
          height={20}
          className="w-8 h-8 cursor-pointer z-10"
        />
      </div>
      <div className="absolute w-full h-28 left-0 top-0 z-50 -translate-y-32 transition-all ease-in-out-300 bg-neutral-300 shadow-lg">
        <ul className="flex w-full h-full flex-col items-center justify-around">
          <li>Todos los coches</li>
          <li>Contacto</li>
          <li>Sobre nosotros</li>
        </ul>
      </div>
    </>
  );
}

export default Menu_burguer;
