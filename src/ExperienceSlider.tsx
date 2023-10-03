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

    setExperience({ title: newExperience!.title, years: value });
  };

  const yearsLabel = (years: number = experience.years) => {
    if (years === 0) return "Première année";
    if (years === 1) return `1 an`;
    if (years > 12) return `12+ ans`;
    return `${years}\u00A0ans`;
  };

  return (
    <div className="w-full max-w-5xl">
      <h2 className="mb-4 text-2xl font-semibold text-adv-gold">{experience.title}</h2>
      <h3 className="mb-4 text-lg">
        {`Développement en entreprise\u00A0:\u00A0`}
        <br className="sm:hidden" />
        <span className="text-adv-gold">{`${yearsLabel()}`}</span>
      </h3>
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
          experience.title.includes("Junior") && "bg-lime-400",
          experience.title.includes("Intermédiaire") && "bg-adv-gold",
          experience.title.includes("Senior") && "bg-orange-500",
          "rounded-full drop-shadow-lg",
          "focus:ring-4 outline-none",
        )}
        trackClassName="bg-adv-gold h-1.5 rounded-full"
        min={0}
        max={13}
        value={experience.years}
        onChange={onChange}
        marks={[0, 3, 5, 8, 10]}
      />
    </div>
  );
}

export default ExperienceSlider;
