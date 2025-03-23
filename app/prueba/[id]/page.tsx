"use client";

import { useParams } from "next/navigation";

function Page() {
  const params = useParams();
  return (
    <div className="pt-40">
      <p>pagina de prueba</p>
      <p>Coche ID: {params.id}</p>
    </div>
  );
}
//mirar por que no funciona el fetch de la api de coches.

export default Page;
