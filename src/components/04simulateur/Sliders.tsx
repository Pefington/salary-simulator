import { RefObject } from "react";

import DailyRateSlider from "./DailyRateSlider";
import ExperienceSlider from "./ExperienceSlider";
import YearlyWorkedDaysSlider from "./YearlyWorkedDaysSlider";

interface SlidersProps {
  levelRef: RefObject<HTMLHeadingElement>;
}

function Sliders({ levelRef }: SlidersProps) {
  return (
    <div className="flex w-full flex-grow flex-col gap-4">
      <ExperienceSlider levelRef={levelRef} />
      <DailyRateSlider />
      <YearlyWorkedDaysSlider />
    </div>
  );
}

export default Sliders;
