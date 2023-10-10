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
      <h4>Rémunération annuelle brute :</h4>
      <p className="pb-6 font-bold pt-2 text-2xl text-adv-gold">{`${roundedResult} €`}</p>
      <h4>Rémunération mensuelle brute :</h4>
      <p className="pb-6 font-bold pt-2 text-2xl text-adv-gold">{`${monthlyResult} €`}</p>
      <p className="text-lg pb-2">Cette rémunération inclut :</p>
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
