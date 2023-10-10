import DailyRateSlider from "./DailyRateSlider";
import ExperienceSlider from "./ExperienceSlider";
import YearlyWorkedDaysSlider from "./YearlyWorkedDaysSlider";

function Sliders() {
  return (
    <div className="flex w-full flex-grow flex-col gap-4">
      <ExperienceSlider />
      <DailyRateSlider />
      <YearlyWorkedDaysSlider />
    </div>
  );
}

export default Sliders;
