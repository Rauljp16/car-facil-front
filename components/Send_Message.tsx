"use client";

import Image from "next/image";

const SendMessage = () => {
  const handleClick = () => {
    const phoneNumber = "+34676114408";
    const message = "Hola, me gustaría hacerte una consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col gap-4 w-full px-4 py-8">
      <h2 className="text-xl font-bold">Contacta con nosotros</h2>
      <p className="text-sm max-w-80">
        Estamos disponibles para responder a todas tus preguntas sobre nuestros
        vehículos. Haz clic en el botón para iniciar una conversación con
        nosotros.
      </p>
      <div
        className="w-fit px-4 py-1 mt-4 mx-auto bg-[#25D366] rounded-3xl flex items-center justify-center z-50"
        onClick={handleClick}
      >
        <Image
          src="/svg/WhatsApp.svg"
          alt="icono de mensajeria"
          width={120}
          height={120}
          className="w-28 h-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SendMessage;
