import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import ReactSlider from "react-slider";

import { BullsEyeIcon } from "../../icons";
import { lockSalary, selectedExperience, selectedRate } from "../../state/jotai";
import { getPayGrade } from "../../utils/helpers";

function DailyRateSlider() {
  const [dailyRate, setDailyRate] = useAtom(selectedRate);
  const [salaryLocked, setSalaryLocked] = useAtom(lockSalary);
  const experience = useAtomValue(selectedExperience);

  const handleChange = (value: number) => {
    setDailyRate(value);
    setSalaryLocked(false);
  };

  const handleBullseyeClick = () => {
    setSalaryLocked(false);
  };

  return (
    <div className="w-full">
      <div className="flex items-baseline">
        <h4 className="mb-4">
          {`Taux Journalier Moyen\u00A0:\u00A0`}
          <span className="text-adv-gold">{dailyRate}</span>
        </h4>
        {salaryLocked ? (
          <BullsEyeIcon
            height="14px"
            className={clsx(
              "transition-opacity duration-500 ease-in-out",
              "fill-red-500",
              "ml-2",
              "",
              "",
            )}
            title="Mode TJM cible."
            onClick={handleBullseyeClick}
          />
        ) : null}
      </div>
      <ReactSlider
        ariaLabel="Taux Journalier Moyen"
        className="my-8 flex flex-col justify-center"
        markClassName={clsx(
          "relative translate-x-full",
          "h-2 aspect-square",
          "bg-sky-950",
          "rounded-full",
          "ring-4 ring-adv-gold",
        )}
        thumbClassName={clsx(
          "h-6 aspect-square",
          "rounded-full drop-shadow-lg",
          "focus:ring-4 outline-none",
          salaryLocked ? "bg-red-500" : "bg-adv-gold",
        )}
        trackClassName="bg-adv-gold h-1.5 rounded-full"
        min={getPayGrade(experience).minDailyRate}
        max={1000}
        step={10}
        value={dailyRate}
        onChange={handleChange}
      />
    </div>
  );
}

export default DailyRateSlider;
