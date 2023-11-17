import clsx from "clsx";
import { useSetAtom } from "jotai";
import { useRef } from "react";

import { showTooltipAtom } from "../state/jotai";
import SalaryResult from "./04simulateur/SalaryResult";
import Sliders from "./04simulateur/Sliders";
import Tooltip from "./04simulateur/Tooltip";

function Simulateur() {
  const setShowTooltip = useSetAtom(showTooltipAtom);

  const levelRef = useRef<HTMLHeadingElement>(null);

  return (
    <section>
      <Tooltip />
      <div>
        <h2>
          Simulateur de Salaire{" "}
          <span
            className={clsx(
              "ml-2 rounded-full bg-sky-900 px-2",
              "cursor-help",
              "text-2xl",
              "hover:bg-adv-gold hover:text-sky-900",
            )}
            title="Instructions"
            onClick={() => setShowTooltip(true)}
          >
            ?
          </span>
        </h2>
        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:gap-10">
          <Sliders levelRef={levelRef} />
          <SalaryResult />
        </div>
      </div>
    </section>
  );
}

export default Simulateur;
