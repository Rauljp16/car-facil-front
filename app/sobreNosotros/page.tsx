"use client";
import Call from "@/components/Call";
import SendMessage from "@/components/Send_Message";
import Link from "next/link";

function page() {
  return (
    <section className="pb-8 pt-32 px-4 max-w-6xl mx-auto bg-[#f1f1f1d8]">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Sobre Nosotros</h1>
        <div className="w-40 h-1 bg-neutral-800 mx-auto"></div>
      </div>
      <div className="mb-12">
        <p className="text-lg text-neutral-700 mb-6">
          En <span className="font-semibold">Car Fácil</span>, nos dedicamos a
          la compraventa de vehículos de segunda mano con un enfoque centrado en
          la transparencia, calidad y satisfacción del cliente. Hemos ayudado a
          muchas personas a encontrar el vehículo perfecto para sus necesidades
          a precios competitivos.
        </p>
        <p className="text-lg text-neutral-700">
          Nuestro equipo de profesionales cuenta con amplia experiencia en el
          sector, lo que nos permite ofrecer un servicio personalizado y de
          confianza a todos nuestros clientes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-neutral-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-2 text-xl">🚗</span> Nuestra Misión
          </h2>
          <p className="text-neutral-700">
            Proporcionar a nuestros clientes vehículos de segunda mano de
            calidad, garantizando transparencia en todo el proceso de
            compraventa y ofreciendo un servicio personalizado que genere
            confianza y satisfacción.
          </p>
        </div>
        <div className="bg-neutral-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <span className="mr-2 text-xl">👥</span> Nuestra Visión
          </h2>
          <p className="text-neutral-700">
            Ser reconocidos en el mercado de vehículos de segunda mano,
            destacando por nuestra honestidad, calidad de servicio y compromiso
            con la satisfacción del cliente.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Nuestros Valores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="text-center p-4">
          <div className="bg-neutral-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🛡️</span>
          </div>
          <h3 className="font-bold mb-2">Confianza</h3>
          <p className="text-neutral-700">
            Trabajamos para ganarnos la confianza de nuestros clientes con total
            transparencia en cada operación.
          </p>
        </div>
        <div className="text-center p-4">
          <div className="bg-neutral-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🏆</span>
          </div>
          <h3 className="font-bold mb-2">Calidad</h3>
          <p className="text-neutral-700">
            Todos nuestros vehículos pasan controles de calidad antes de ser
            puestos a la venta.
          </p>
        </div>
        <div className="text-center p-4">
          <div className="bg-neutral-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">👍</span>
          </div>
          <h3 className="font-bold mb-2">Compromiso</h3>
          <p className="text-neutral-700">
            Nos comprometemos a ofrecer el mejor servicio y asesoramiento
            personalizado a cada cliente.
          </p>
        </div>
      </div>
      <div className="bg-neutral-50 p-8 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <span className="text-xl mr-3 mt-1">⏱️</span>
            <div>
              <h3 className="font-bold mb-2">Nuestra xperiencia</h3>
              <p className="text-neutral-700">
                Nuestra experiencia y trayectoria nos avala. Ayudamos a nuestros
                clientes a encontrar su vehículo ideal.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-xl mr-3 mt-1">🛡️</span>
            <div>
              <h3 className="font-bold mb-2">Garantía en nuestros vehículos</h3>
              <p className="text-neutral-700">
                Ofrecemos garantía en nuestros vehículos para que puedas comprar
                con total tranquilidad.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-xl mr-3 mt-1">🚗</span>
            <div>
              <h3 className="font-bold mb-2">Amplio catálogo</h3>
              <p className="text-neutral-700">
                Disponemos de una gran variedad de vehículos para adaptarnos a
                todas las necesidades y presupuestos.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-xl mr-3 mt-1">👥</span>
            <div>
              <h3 className="font-bold mb-2">Atención personalizada</h3>
              <p className="text-neutral-700">
                Nuestro equipo de profesionales te asesorará durante todo el
                proceso para que encuentres el vehículo que mejor se adapte a
                tus necesidades.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4">
        <h2 className="text-2xl font-thin">
          ¿Quieres conocer más sobre nosotros o ver nuestros vehículos?
        </h2>
        <div className="flex w-full justify-start">
          <Link
            href={"coches/todos"}
            className="text-white bg-red-500 p-2 rounded-xl px-3 font-bold shadow-neutral-600 cursor-pointer"
          >
            Todos los coches
          </Link>
        </div>
        <div className="flex gap-4">
          <Call />
          <SendMessage />
        </div>
      </div>
    </section>
  );
}

export default page;
