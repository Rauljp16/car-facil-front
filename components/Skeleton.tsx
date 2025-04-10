import Image from "next/image";

export default function Skeleton() {
  return (
    <div className="w-full h-full pt-16 bg-neutral-300">
      <Image
        src="/images/loading.png"
        alt="Menu burguer"
        width={1000}
        height={1000}
        className="w-full h-96 object-scale-down"
      />
    </div>
  );
}
