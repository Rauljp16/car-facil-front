import CarsList from "@/components/Cars_List";
import Initial_Info from "@/components/Initial_Info";
import News from "@/components/News";
import { getCars } from "./lib/Service";

export default async function Home() {
  const cars = await getCars();
  return (
    <>
      <Initial_Info />
      <News cars={cars} />
      <CarsList cars={cars} />
    </>
  );
}
