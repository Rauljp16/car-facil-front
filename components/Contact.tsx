import Image from "next/image";
import SendMessage from "./Send_Message";
import Call from "./Call";

export default function Contact() {
  return (
    <div id="contact" className="pt-8 pb-2">
      <div className="flex flex-col gap-8 px-4">
        <div>
          <h2 className="text-3xl font-thin mb-6">Información de Contacto</h2>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-4">
              <Image
                src="/svg/location.svg"
                alt="icono de localización"
                width={20}
                height={20}
                className="w-6 h-6 "
              />

              <p>Camino de los soldados nº265, 30169 San Gines, Murcia</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/svg/phone.svg"
                alt="icono de teléfono"
                width={20}
                height={20}
                className="w-6 h-6 "
              />

              <p>+34 722 783 162</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/svg/email.svg"
                alt="icono de email"
                width={20}
                height={20}
                className="w-6 h-6 "
              />

              <a href="mailto:carfacilmurcia@gmail.com">
                carfacilmurcia@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/svg/clock.svg"
                alt="icono de reloj para horario"
                width={20}
                height={20}
                className="w-6 h-6 "
              />

              <div>
                <p>Lun - Vie: 9:00 - 14:00, 17:00 - 20:30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[330px] rounded-lg overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=37.951660, -1.179734&hl=es&z=14&output=embed"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-6 px-4">
        <h2 className="text-3xl font-thin">Contacta con nosotros</h2>
        <p className="text-sm max-w-80">
          Estamos disponibles para responder a todas tus preguntas sobre
          nuestros vehículos. Haz clic en el botón para iniciar una conversación
          con nosotros o llámanos!
        </p>
        <div className="flex gap-4 pt-4">
          <Call />
          <SendMessage />
        </div>
      </div>
    </div>
  );
}
