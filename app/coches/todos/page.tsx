import { getCars } from "@/app/lib/Service";
import Cars_List from "@/components/Cars_List";

export default async function CochesTodosPage() {
  const cars = await getCars();
  return (
    <div className="py-16">
      <Cars_List cars={cars} />
    </div>
  );
}
