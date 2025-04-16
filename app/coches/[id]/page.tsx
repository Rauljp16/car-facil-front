import Car_Details from "@/components/Car_Details";
import { getCarById } from "@/app/lib/Service";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const car = await getCarById(id);

  if (!car) return notFound();

  return (
    <>
      <Car_Details car={car} />
    </>
  );
}
