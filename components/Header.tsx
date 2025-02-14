import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <Image
        src="/images/logo.png"
        alt="Logo Car Facil"
        width={100}
        height={100}
        className="w-14"
      />
      <button className=" text-textColor font-rubik text-sm">Contacto</button>
    </div>
  );
}

export default Header;
