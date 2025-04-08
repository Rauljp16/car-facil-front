import React from "react";
import Slider from "./Slider";
import { Car } from "@/app/types/global";

function News({ cars }: { cars: Car[] }) {
  return (
    <div>
      <Slider cars={cars} />
    </div>
  );
}

export default News;
