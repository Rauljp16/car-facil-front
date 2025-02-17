"use client";

import { Car } from "@/app/page";

function Slider({ cars }: { cars: Car[] }) {
  console.log(`datos desde slide ${cars}`);
  return <div>Slider</div>;
}

export default Slider;
