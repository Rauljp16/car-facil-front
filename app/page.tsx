import Initial_Info from "@/components/Initial_Info";
import News from "@/components/News";
import { getCars } from "./lib/Service";
import Cars_list_preview from "@/components/Cars_list_preview";
import Contact from "@/components/Contact";

export default async function Home() {
  const cars = await getCars();
  return (
    <>
      <Initial_Info />
      <News cars={cars} />
      <Cars_list_preview cars={cars} />
      <Contact />
    </>
  );
}
