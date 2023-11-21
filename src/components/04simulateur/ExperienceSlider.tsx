import clsx from "clsx";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";

import { lockSalaryAtom, selectedExperienceAtom, selectedRateAtom } from "../../state/jotai";
import { Years } from "../../types";
import { findTitle, getPayGrade } from "../../utils/helpers";

function ExperienceSlider() {
  const [selectedExperience, setSelectedExperience] = useAtom(selectedExperienceAtom);
  const setLockSalary = useSetAtom(lockSalaryAtom);
  const setSelectedRate = useSetAtom(selectedRateAtom);

  const [title, setTitle] = useState(findTitle(selectedExperience));

  useEffect(() => {
    setTitle(findTitle(selectedExperience));
  }, [selectedExperience]);

  useEffect(() => {
    document.title = `Simulateur de Salaire - ${title}`;
    setSelectedRate(getPayGrade(selectedExperience).minDailyRate);
  }, [selectedExperience, setSelectedRate, title]);

  const getYearsLabel = (years: number = selectedExperience) => {
    if (years === 0) return "<\u00A01\u00A0an";
    if (years === 1) return `1\u00A0an`;
    if (years > 12) return `12+\u00A0ans`;
    return `${years}\u00A0ans`;
  };

  const handleChange = (value: Years) => {
    setSelectedExperience(value);
    setLockSalary(false);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between">
        <h4 className="pr-12">
          {`Années\u00A0d'expérience\u00A0:\u00A0`}
          <span className="text-adv-gold">{`${getYearsLabel()}`}</span>
        </h4>
        <h3 className="font-bold text-adv-gold">Niveau : {title}</h3>
      </div>
      <ReactSlider
        ariaLabel="Années d'expérience"
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
          "bg-adv-gold",
          "rounded-full drop-shadow-lg",
          "focus:ring-4 outline-none",
          "transition-none",
        )}
        trackClassName="bg-adv-gold h-1.5 rounded-full"
        min={0}
        max={13}
        value={selectedExperience}
        onChange={handleChange}
        marks={[0, 3, 5, 8, 10, 13]}
      />
    </div>
  );
}

export default ExperienceSlider;
