import clsx from "clsx";
import { useState } from "react";
import ReactSlider from "react-slider";

function DailyRateSlider() {
  const [dailyRate, setDailyRate] = useState(350);

  const onChange = (value: number) => {
    setDailyRate(value);
  };

  return (
    <div className="w-full max-w-5xl">
      <h3 className="mb-4 text-lg">
        {`Tarif Journalier Moyen\u00A0:\u00A0`}
        <span className="text-adv-gold">{dailyRate}</span>
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
          "rounded-full drop-shadow-lg",
          "focus:ring-4 outline-none",
          "bg-adv-gold",
        )}
        trackClassName="bg-adv-gold h-1.5 rounded-full"
        min={350}
        max={1000}
        step={10}
        value={dailyRate}
        onChange={onChange}
      />
    </div>
  );
}

export default DailyRateSlider;
