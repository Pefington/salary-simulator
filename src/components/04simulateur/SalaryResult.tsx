import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";

import { salaryResult, selectedDays, selectedExperience, selectedRate } from "../../state/jotai";
import { updateYearlyGrossSalary } from "../../utils/calculator";

function SalaryResult() {
  const result = useAtomValue(salaryResult);
  const experience = useAtomValue(selectedExperience);
  const rate = useAtomValue(selectedRate);
  const days = useAtomValue(selectedDays);

  const setSalaryResult = useSetAtom(salaryResult);

  const roundedResult = Math.floor(result);
  const monthlyResult = Math.floor(result / 12);

  useEffect(() => {
    const newSalary = updateYearlyGrossSalary(experience, rate, days);
    setSalaryResult(newSalary);
  }, [experience, rate, days, setSalaryResult]);

  return (
    <div className="flex min-w-max flex-col md:pl-5">
      <h4>Rémunération annuelle brute&nbsp;:</h4>
      <p className="pb-6 pt-2 text-2xl font-bold text-adv-gold">{`${roundedResult} €`}</p>
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
