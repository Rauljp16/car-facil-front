import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu_burguer from "./Menu_burguer";

function Header() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 ">
        <Link href={"/"} className="cursor-pointer z-30">
          <Image
            src="/images/logo3.png"
            alt="Logo Car Facil"
            width={100}
            height={100}
            className="w-20"
          />
        </Link>
        <Menu_burguer />
      </div>
      <div className="absolute -z-10 top-0 right-0 w-1/4 h-60 bg-contrast"></div>
    </>
  );
}

export default Header;
