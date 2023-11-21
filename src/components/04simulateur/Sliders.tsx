import { RefObject } from "react";

import DailyRateSlider from "./DailyRateSlider";
import ExperienceSlider from "./ExperienceSlider";
import YearlyWorkedDaysSlider from "./YearlyWorkedDaysSlider";

interface SlidersProps {
  rateRef: RefObject<HTMLHeadingElement>;
}

function Sliders({ rateRef }: SlidersProps) {
  return (
    <div className="flex w-full flex-grow flex-col gap-4">
      <ExperienceSlider />
      <DailyRateSlider rateRef={rateRef} />
      <YearlyWorkedDaysSlider />
    </div>
  );
}

export default Sliders;
