import CarsList from "@/components/Cars_List";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Initial_Info from "@/components/Initial_Info";
import News from "@/components/News";

export interface Car {
  createdAt: string | number | Date;
  id: number;
  marca: string;
  modelo: string;
  anio: number;
  precio: string;
  foto: string;
}

export default async function Home() {
  const cars = await getCars();

  return (
    <>
      <Header />
      <Initial_Info />
      <News cars={cars} />
      <CarsList cars={cars} />
      <Footer />
    </>
  );
}

async function getCars(): Promise<Car[]> {
  const apiUrl = process.env.CAR_FACIL_API;
  const res = await fetch(`${apiUrl}/coches`);
  if (!apiUrl) {
    throw new Error("La variable de entorno CAR_FACIL_API no está definida.");
  }
  if (!res.ok) {
    throw new Error("Error al obtener los coches");
  }
  return res.json();
}
