import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full text-sm bg-neutral-800 py-6 pb-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Link href={"/"} className="cursor-pointer z-30">
                <Image
                  src="/images/logo3.png"
                  alt="Logo Car Facil"
                  width={100}
                  height={100}
                  className="w-20"
                />
              </Link>
            </div>
            <p className="text-white">
              Tu concesionario de confianza para encontrar el coche perfecto.
              Ofrecemos vehículos de segunda mano con garantía y al mejor
              precio.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg text-red-500 font-medium border-l-2 border-greenCarFacil pl-3">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link
                  href={"coches/todos"}
                  className="hover:text-green-500 transition-colors"
                >
                  Todos los coches
                </Link>
              </li>
              <li>
                <Link
                  href="/#novedades"
                  className="hover:text-green-500 transition-colors"
                >
                  Novedades
                </Link>
              </li>
              <li>
                <Link
                  href="sobreNosotros"
                  className="hover:text-green-500 transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/people/Car-f%C3%A1cil-Pol%C3%ADgono-San-Gin%C3%A9s-Murcia/100063117345205/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/facebook.svg"
                  alt="svg facebook"
                  width={14}
                  height={14}
                  className="w-4 h-4 hover:drop-shadow-xl transition-all duration-500"
                />
              </a>
              <a
                href="https://www.facebook.com/people/Car-f%C3%A1cil-Pol%C3%ADgono-San-Gin%C3%A9s-Murcia/100063117345205/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/svg/instagram.svg"
                  alt="svg kilometers"
                  width={14}
                  height={14}
                  className="w-4"
                />
              </a>
            </div>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg text-red-500 font-medium border-l-2 border-greenCarFacil pl-3">
              Contacto
            </h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-center gap-2">
                <Image
                  src="/svg/locationWhite.svg"
                  alt="svg mapa"
                  width={14}
                  height={14}
                  className="w-4"
                />
                <span>
                  Camino de los soldados nº265, 30169 San Gines, Murcia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/svg/phoneWhite.svg"
                  alt="svg telefono"
                  width={14}
                  height={14}
                  className="w-4"
                />
                <span>+34 722 783 162</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/svg/emailWhite.svg"
                  alt="svg email"
                  width={14}
                  height={14}
                  className="w-4"
                />
                <span>carfacilmurcia@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/svg/clockWhite.svg"
                  alt="svg horario"
                  width={14}
                  height={14}
                  className="w-4"
                />
                <span>Lun - Vie: 9:00 - 14:00, 17:00 - 20:30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white mt-4 mb-3"></div>

        {/* Copyright */}
        <div className="flex flex-col w-full md:flex-row items-start justify-between text-sm gap-3 text-white">
          <div className="flex w-fit gap-2 text-[10px]">
            <Link href="#" className="hover:text-green-500 transition-colors">
              Política de privacidad
            </Link>
            <Link href="#" className="hover:text-green-500 transition-colors">
              Términos y condiciones
            </Link>
            <Link href="#" className="hover:text-green-500 transition-colors">
              Cookies
            </Link>
          </div>
          <p className="w-fit ">
            © {new Date().getFullYear()} CarFácil. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
