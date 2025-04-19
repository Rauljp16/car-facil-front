export default function Loading() {
  return (
    <div className="pt-20 p-2">
      <div className="relative w-full h-80 bg-neutral-300">
        <div className="absolute bottom-2 right-2 w-12 h-8 bg-neutral-400 rounded-xl"></div>
      </div>
      <div className="w-full h-16 pt-2 flex gap-2">
        <div className="w-full h-full bg-neutral-300"></div>
        <div className="w-full h-full bg-neutral-300"></div>
        <div className="w-full h-full bg-neutral-300"></div>
      </div>
      <div className="w-full p-4 mt-4 border border-neutral-300 rounded-md">
        <div className="w-full h-32 bg-neutral-300"></div>
        <div className="flex gap-2 mt-2">
          <div className="w-full h-24 bg-neutral-300"></div>
          <div className="w-full h-24 bg-neutral-300"></div>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="w-full h-24 bg-neutral-300"></div>
          <div className="w-full h-24 bg-neutral-300"></div>
        </div>
      </div>
    </div>
  );
}
