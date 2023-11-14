import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef } from "react";

import { BullsEyeIcon } from "../../icons";
import {
  lockSalary,
  salaryResult,
  selectedDays,
  selectedExperience,
  selectedRate,
} from "../../state/jotai";
import { getDailyRateFromTarget } from "../../utils/getDailyRate";
import { getYearlyGrossSalary } from "../../utils/getSalary";

function SalaryResult() {
  const experience = useAtomValue(selectedExperience);
  const days = useAtomValue(selectedDays);

  const [salaryLocked, setSalaryLocked] = useAtom(lockSalary);
  const [rate, setRate] = useAtom(selectedRate);
  const [salary, setSalary] = useAtom(salaryResult);

  const salaryInputRef = useRef<HTMLInputElement>(null);

  const roundedResult = Math.floor(salary);
  const monthlyResult = Math.floor(salary / 12);
  const maxWidth = roundedResult.toString().length * 14;

  useEffect(
    () => setSalary(getYearlyGrossSalary(experience, rate, days)),

    [experience, rate, days, setSalary],
  );

  useEffect(() => salaryInputRef.current?.select(), [salaryLocked]);

  const handleClick = () => {
    setSalaryLocked(false);
    salaryInputRef.current?.select();
  };

  const handleChange = (target: EventTarget & HTMLInputElement) => {
    const value = target.value.replace(/\D/g, "");

    setSalary(parseInt(value) || salary);
  };

  const handleSubmitSalary = () => {
    setRate(getDailyRateFromTarget(experience, salary, days));
    salaryInputRef.current?.blur();
    setSalaryLocked(true);
  };

  const handleBullseyeClick = () => {
    setSalary(getYearlyGrossSalary(experience, rate, days));
    setSalaryLocked(false);
  };

  return (
    <div className="flex flex-col md:pl-5">
      <h4>Rémunération annuelle brute&nbsp;:</h4>
      <div
        className={clsx(
          "flex items-baseline gap-4",
          "[&>:not(svg)]:mb-6 [&>:not(svg)]:mt-2",
          "max-w-min",
        )}
      >
        <input
          ref={salaryInputRef}
          aria-label="Salaire Annuel Brut"
          style={{ maxWidth: `${maxWidth}px` }}
          className={clsx(
            "text-2xl font-bold text-adv-gold",
            salaryLocked ? "bg-transparent" : "bg-sky-950",
          )}
          disabled={salaryLocked}
          type="text"
          value={roundedResult}
          onClick={handleClick}
          onChange={({ target }) => handleChange(target)}
          onKeyDown={({ key }) => key === "Enter" && handleSubmitSalary()}
        />
        <span className="-ml-[12.5px] mr-auto text-2xl font-bold text-adv-gold">€</span>

        {salaryLocked ? (
          <BullsEyeIcon
            height="16px"
            className={clsx("transition-opacity duration-500 ease-in-out", "fill-red-500")}
            title="Mode TJM cible."
            onClick={handleBullseyeClick}
          />
        ) : null}
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
