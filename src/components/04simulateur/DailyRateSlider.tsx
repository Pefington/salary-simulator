import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import ReactSlider from "react-slider";

import { BullsEyeIcon } from "../../icons";
import { lockSalaryAtom, selectedExperienceAtom, selectedRateAtom } from "../../state/jotai";
import { getPayGrade } from "../../utils/helpers";

function DailyRateSlider() {
  const [selectedRate, setSelectedRate] = useAtom(selectedRateAtom);
  const [lockSalary, setLockSalary] = useAtom(lockSalaryAtom);
  const selectedExperience = useAtomValue(selectedExperienceAtom);

  const handleChange = (value: number) => {
    setSelectedRate(value);
    setLockSalary(false);
  };

  const handleBullseyeClick = () => {
    setLockSalary(false);
  };

  return (
    <div className="w-full">
      <div className="flex items-baseline">
        <h4 className="mb-4">
          {`Taux Journalier Moyen\u00A0:\u00A0`}
          <span className="text-adv-gold">{selectedRate}</span>
        </h4>
        {lockSalary ? (
          <BullsEyeIcon
            height="14px"
            className="ml-2 fill-red-500 duration-500"
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
          lockSalary ? "bg-red-500" : "bg-adv-gold",
          "transition-none",
        )}
        trackClassName="bg-adv-gold h-1.5 rounded-full"
        min={getPayGrade(selectedExperience).minDailyRate}
        max={1000}
        step={10}
        value={selectedRate}
        onChange={handleChange}
      />
    </div>
  );
}

export default DailyRateSlider;
