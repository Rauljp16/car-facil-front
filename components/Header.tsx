import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
      <Image
        src="/images/logo.png"
        alt="Logo Car Facil"
        width={100}
        height={100}
        className="w-14"
      />
      <button className=" text-textColor text-sm">Contacto</button>
    </div>
  );
}

export default Header;
