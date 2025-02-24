import { Car } from "@/app/page";
import React from "react";
import Slider from "./Slider";

function News({ cars }: { cars: Car[] }) {
  return (
    <div className="">
      <Slider cars={cars} />
    </div>
  );
}

export default News;
