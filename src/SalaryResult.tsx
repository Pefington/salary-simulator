import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";

import { salaryResult, selectedDays, selectedExperience, selectedRate } from "./state/jotai";
import { updateYearlyGrossSalary } from "./utils/calculator";

function SalaryResult() {
  const result = useAtomValue(salaryResult);
  const experience = useAtomValue(selectedExperience);
  const rate = useAtomValue(selectedRate);
  const days = useAtomValue(selectedDays);

  const setSalaryResult = useSetAtom(salaryResult);

  useEffect(() => {
    const newSalary = updateYearlyGrossSalary(experience, rate, days);
    setSalaryResult(newSalary);
  }, [experience, rate, days, setSalaryResult]);

  return (
    <div className="w-full max-w-5xl">
      <h3 className="mb-4 text-4xl">
        {`Salaire Annuel Brut\u00A0:\u00A0`}
        <span className="text-adv-gold">{`${Math.floor(result)}\u00A0€`}</span>
      </h3>
    </div>
  );
}

export default SalaryResult;
