import clsx from "clsx";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";

import { selectedExperience, selectedRate } from "../../state/jotai";
import { Years } from "../../types";
import { findTitle, getPayGrade } from "../../utils/helpers";

function ExperienceSlider() {
  const [experience, setExperience] = useAtom(selectedExperience);
  const setDailyRate = useSetAtom(selectedRate);

  const [title, setTitle] = useState(findTitle(experience));

  useEffect(() => {
    setTitle(findTitle(experience));
  }, [experience]);

  useEffect(() => {
    document.title = `Simulateur de Salaire - ${title}`;
    setDailyRate(getPayGrade(experience).minDailyRate);
  }, [experience, setDailyRate, title]);

  const getYearsLabel = (years: number = experience) => {
    if (years === 0) return "<\u00A01\u00A0an";
    if (years === 1) return `1\u00A0an`;
    if (years > 12) return `12+\u00A0ans`;
    return `${years}\u00A0ans`;
  };

  const onChange = (value: Years) => setExperience(value);

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
        )}
        trackClassName="bg-adv-gold h-1.5 rounded-full"
        min={0}
        max={13}
        value={experience}
        onChange={onChange}
        marks={[0, 3, 5, 8, 10, 13]}
      />
    </div>
  );
}

export default ExperienceSlider;
