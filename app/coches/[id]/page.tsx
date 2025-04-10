import Car_Details from "@/components/Car_Details";
import { getCarById } from "@/app/lib/Service";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const car = await getCarById(id);

  if (!car) return notFound();

  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Car_Details car={car} />;
      </Suspense>
    </>
  );
}
