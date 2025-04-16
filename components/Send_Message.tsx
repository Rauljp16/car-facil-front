"use client";

import Image from "next/image";

const SendMessage = () => {
  const handleClick = () => {
    const phoneNumber = "+34722783162";
    const message = "Hola, me gustaría hacerte una consulta.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        className="w-full py-1 bg-[#25D366] rounded-xl flex items-center justify-center z-50"
        onClick={handleClick}
      >
        <Image
          src="/svg/whatsApp.svg"
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
