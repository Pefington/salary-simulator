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
    console.log(newExperience);
    setExperience({ title: newExperience!.title, years: value });
  };

  return (
    <>
      <div className="">{experience.title}</div>
      <ReactSlider
        className="h-2 w-1/2 rounded-full bg-white"
        min={0}
        max={99}
        value={experience.years}
        onChange={onChange}
      />
    </>
  );
}

export default ExperienceSlider;
