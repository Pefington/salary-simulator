import clsx from "clsx";
import { useAtom, useSetAtom } from "jotai";
import ReactSlider from "react-slider";

import { lockSalary, selectedDays } from "../../state/jotai";

function YearlyWorkedDaysSlider() {
  const [workedDays, setWorkedDays] = useAtom(selectedDays);
  const setSalaryLocked = useSetAtom(lockSalary);

  const handleChange = (value: number) => {
    setSalaryLocked(false);
    setWorkedDays(value);
  };

  return (
    <div className="w-full">
      <h4 className="mb-4">
        {`Jours travaillés\u00A0:\u00A0`}
        <span className="text-adv-gold">{workedDays}</span>
      </h4>
      <ReactSlider
        ariaLabel="Jours travaillés"
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
        onChange={handleChange}
        marks={[218]}
      />
    </div>
  );
}

export default YearlyWorkedDaysSlider;
