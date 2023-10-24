import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef } from "react";

import { EditIcon } from "../../icons";
import {
  lockSalary,
  salaryResult,
  selectedDays,
  selectedExperience,
  selectedRate,
} from "../../state/jotai";
import { getYearlyGrossSalary } from "../../utils/getSalary";

function SalaryResult() {
  const experience = useAtomValue(selectedExperience);
  const rate = useAtomValue(selectedRate);
  const days = useAtomValue(selectedDays);

  const [salaryLocked, setSalaryLocked] = useAtom(lockSalary);
  const [result, setResult] = useAtom(salaryResult);

  const salaryInputRef = useRef<HTMLInputElement>(null);

  const roundedResult = Math.floor(result);
  const monthlyResult = Math.floor(result / 12);

  useEffect(() => {
    const newSalary = getYearlyGrossSalary(experience, rate, days);
    setResult(newSalary);
  }, [experience, rate, days, setResult]);

  useEffect(() => {
    if (salaryLocked) {
      salaryInputRef.current?.select();
    }
  }, [salaryLocked]);

  const handleLockSalary = () => {
    setSalaryLocked(!salaryLocked);
  };

  return (
    <div className="flex min-w-max flex-col md:pl-5">
      <h4>Rémunération annuelle brute&nbsp;:</h4>
      <div
        className={clsx(
          "flex items-baseline gap-4",
          "max-w-min",
          "[&>:not(svg)]:mb-6 [&>:not(svg)]:mt-2",
          "",
          "",
        )}
      >
        {salaryLocked ? (
          <>
            <input
              ref={salaryInputRef}
              className={clsx(
                "text-2xl font-bold text-adv-gold",
                "max-w-[70px]",
                "max-h-[40px]",
                "bg-sky-950",
                "",
              )}
              type="text"
              value={roundedResult}
              onChange={({ target }) => setResult(Number(target.value))}
            />
            <span className="-ml-[12.5px] text-2xl font-bold text-adv-gold">€</span>
          </>
        ) : (
          <p className={clsx("text-2xl font-bold text-adv-gold", "", "", "", "", "")}>
            {roundedResult}&nbsp;€
          </p>
        )}

        <EditIcon
          height="25px"
          className={clsx(
            "translate-y-[3px]",
            "transition-opacity duration-500 ease-in-out",
            salaryLocked ? "fill-red-500" : "fill-adv-gold/50",
            "hover:cursor-pointer hover:fill-adv-gold/100",
            "",
            "",
            "",
          )}
          onClick={handleLockSalary}
        />
      </div>
      <h4>Rémunération mensuelle brute&nbsp;:</h4>
      <p className="pb-6 pt-2 text-2xl font-bold text-adv-gold">{`${monthlyResult} €`}</p>
      <p className="pb-2 text-lg">Cette rémunération inclut&nbsp;:</p>
      <ul>
        <li>Transports</li>
        <li>Tickets restaurant</li>
        <li>Prévoyance</li>
        <li>*RTT</li>
      </ul>
    </div>
  );
}

export default SalaryResult;
