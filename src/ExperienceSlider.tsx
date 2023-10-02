import clsx from "clsx";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";

import experienceLevels from "./data/experience.json";

function ExperienceSlider() {
  const [experience, setExperience] = useState({ title: "Junior", years: 0 });

  useEffect(() => {
    document.title = experience.title;
  }, [experience]);

  const onChange = (value: number) => {
    const newExperience = experienceLevels.find(
      (level) => value >= level.minExperience && value <= level.maxExperience,
    );
    let label = value.toString();
    if (value === 0) label = "Débutant";

    setExperience({ title: newExperience!.title, years: value });
  };

  const yearsLabel = (years: number = experience.years) => {
    if (years === 0) return "Débutant";
    if (years === 1) return `1 an`;
    if (years > 12) return `12+ ans`;
    return `${years} ans`;
  };

  return (
    <div className="w-3/4 flex-1">
      <h2 className="mb-4 text-2xl font-semibold text-adv-gold">{experience.title}</h2>
      <h3 className="mb-4 text-xl">{`Expérience en développement : ${yearsLabel()}`}</h3>
      <ReactSlider
        className="my-8 flex flex-col justify-center"
        markClassName="relative bg-sky-950 h-2 aspect-square rounded-full ring-4 ring-adv-gold/75 translate-x-full"
        thumbClassName={clsx(
          "h-6 aspect-square",
          "bg-adv-gold",
          "rounded-full drop-shadow-lg",
          "focus:ring-4 outline-none",
        )}
        trackClassName="bg-adv-gold/75 h-1.5 rounded-full"
        min={0}
        max={13}
        value={experience.years}
        onChange={onChange}
        marks={true}
      />
    </div>
  );
}

export default ExperienceSlider;
