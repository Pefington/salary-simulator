import clsx from "clsx";
import { useAtom } from "jotai";
import ReactSlider from "react-slider";

import { selectedDays } from "./state/jotai";

function YearlyWorkedDaysSlider() {
  const [workedDays, setWorkedDays] = useAtom(selectedDays);

  const onChange = (value: number) => setWorkedDays(value);

  return (
    <div className="w-full max-w-5xl">
      <h3 className="mb-4 text-lg">
        {`Jours travaillés\u00A0:\u00A0`}
        <span className="text-adv-gold">{workedDays}</span>
      </h3>
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
        min={152}
        max={235}
        value={workedDays}
        onChange={onChange}
        marks={[218]}
      />
    </div>
  );
}

export default YearlyWorkedDaysSlider;
