import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import ReactSlider from "react-slider";

import { selectedExperience, selectedRate } from "../../state/jotai";
import { getPayGrade } from "../../utils/helpers";

function DailyRateSlider() {
  const [dailyRate, setDailyRate] = useAtom(selectedRate);
  const experience = useAtomValue(selectedExperience);

  const onChange = (value: number) => setDailyRate(value);

  return (
    <div className="w-full">
      <h4 className="mb-4 text-xl">
        {`Tarif Journalier Moyen\u00A0:\u00A0`}
        <span className="text-adv-gold">{dailyRate}</span>
      </h4>
      <ReactSlider
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
          "bg-adv-gold",
        )}
        trackClassName="bg-adv-gold h-1.5 rounded-full"
        min={getPayGrade(experience).minDailyRate}
        max={1000}
        step={10}
        value={dailyRate}
        onChange={onChange}
      />
    </div>
  );
}

export default DailyRateSlider;
