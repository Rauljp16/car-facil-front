"use client";

import Image from "next/image";

function Call() {
  const numeroTelefono = "+34722783162";
  return (
    <a
      href={`tel:${numeroTelefono}`}
      className="w-full bg-red-500 rounded-xl flex items-center justify-center z-50"
    >
      <Image
        src="/svg/phoneWhite.svg"
        alt="icono de telefono"
        width={20}
        height={20}
        className="w-6 h-6 "
      />
      <p className="text-white font-bold tracking-wider pl-1">Llamar</p>
    </a>
  );
}

export default Call;
