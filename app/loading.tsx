export default function Loading() {
  return (
    <>
      <div className="p-4 pt-16 bg-neutral-200 max-w-md mx-auto animate-pulse">
        <div className="relative w-80 h-72 mx-auto px-8 mb-10">
          <div className="absolute top-0 left-2 flex flex-col gap-2 overflow-x-auto">
            <div className="w-12 h-12 bg-neutral-400 z-10"></div>
            <div className="w-12 h-12 bg-neutral-400 z-10"></div>
            <div className="w-12 h-12 bg-neutral-400 z-10"></div>
          </div>

          <div className="absolute top-4 left-10 w-64 h-full bg-neutral-300"></div>
        </div>
        <div className="flex flex-col h-48 justify-between mb-4">
          {/* Title */}
          <div className="h-8 w-64 bg-neutral-400 rounded"></div>

          <div className="flex flex-col gap-3">
            <div className="h-4 w-full bg-neutral-400 rounded"></div>
            <div className="h-4 w-5/6 bg-neutral-400 rounded"></div>
          </div>

          {/* Buttons */}
          <div className="flex w-full gap-4 pr-4">
            <div className="h-10 w-full bg-neutral-400 rounded-full"></div>
            <div className="h-10 w-full bg-neutral-200 rounded-full border border-neutral-400"></div>
          </div>

          {/* Section title */}
          <div className="relative top-4 left-1 h-6 w-32 bg-neutral-400 rounded"></div>
        </div>
      </div>
      <div className="flex w-full h-48 overflow-hidden">
        {/* <div className="relative flex gap-4"> */}
        <div className="relative -left-4 top-4 w-1/6 h-40 bg-neutral-400"></div>
        <div className="w-5/6 h-40 bg-neutral-400"></div>
        <div className="relative -right-4 top-4 w-1/6 h-40 bg-neutral-400"></div>
        {/* </div> */}
      </div>
    </>
  );
}
