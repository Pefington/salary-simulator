import clsx from "clsx";

import DailyRateSlider from "./DailyRateSlider";
import ExperienceSlider from "./ExperienceSlider";
import YearlyWorkedDaysSlider from "./YearlyWorkedDaysSlider";

function SalaryForm() {
  return (
    <section
      className={clsx(
        "flex flex-col items-center gap-10",
        "px-7 py-10",
        "sm:px-10 ",
        "md:px-20",
        "lg:px-40",
      )}
    >
      <h1 className="text-center text-4xl font-semibold">Simulateur de Salaire</h1>
      <ExperienceSlider />
      <DailyRateSlider />
      <YearlyWorkedDaysSlider />
    </section>
  );
}

export default SalaryForm;
