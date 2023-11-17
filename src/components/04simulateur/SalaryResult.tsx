import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useRef } from "react";

import { BullsEyeIcon } from "../../icons";
import {
  lockSalaryAtom,
  salaryResultAtom,
  selectedDaysAtom,
  selectedExperienceAtom,
  selectedRateAtom,
} from "../../state/jotai";
import { getDailyRateFromTarget } from "../../utils/getDailyRate";
import { getYearlyGrossSalary } from "../../utils/getSalary";

function SalaryResult() {
  const experience = useAtomValue(selectedExperienceAtom);
  const days = useAtomValue(selectedDaysAtom);

  const [salaryLocked, setSalaryLocked] = useAtom(lockSalaryAtom);
  const [rate, setRate] = useAtom(selectedRateAtom);
  const [salary, setSalary] = useAtom(salaryResultAtom);

  const salaryInputRef = useRef<HTMLInputElement>(null);

  const roundedResult = Math.floor(salary);
  const monthlyResult = Math.floor(salary / 12);

  useEffect(
    () => setSalary(getYearlyGrossSalary(experience, rate, days)),

    [experience, rate, days, setSalary],
  );

  useEffect(() => {
    if (salaryLocked) {
      const inputTimeout = setTimeout(() => {
        salaryInputRef.current?.select();
        setRate(getDailyRateFromTarget(experience, salary, days));
      }, 1000);

      return () => clearTimeout(inputTimeout);
    } else salaryInputRef.current?.blur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salaryLocked, salary]);

  const handleClick = () => {
    setSalaryLocked(true);
    salaryInputRef.current?.select();
  };

  const handleChange = (target: EventTarget & HTMLInputElement) => {
    const value = target.value.replace(/\D/g, "");

    setSalary(parseInt(value) || salary);
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
          className="w-20 rounded-sm bg-sky-900 text-center text-2xl font-bold text-adv-gold"
          type="text"
          value={roundedResult}
          onClick={handleClick}
          onChange={({ target }) => handleChange(target)}
        />
        <span className="-ml-[12.5px] mr-auto text-2xl font-bold text-adv-gold">€</span>
        {salaryLocked ? (
          <BullsEyeIcon
            height="16px"
            className="fill-red-500 duration-500"
            title="Mode TJM cible."
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
