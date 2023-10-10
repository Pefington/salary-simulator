import clsx from "clsx";

import SalaryResult from "./04simulateur/SalaryResult";
import Sliders from "./04simulateur/Sliders";

function Simulateur() {
  return (
    <>
      <h2
        className={clsx("text-center font-semibold", "pb-2 pt-6", "text-4xl", "sm:pt-10", "", "")}
      >
        Simulateur de Salaire
      </h2>
      <section
        className={clsx(
          "flex flex-col gap-5",
          "p-5",
          "sm:p-10",
          "md:flex-row md:justify-between md:gap-10",
          "",
        )}
      >
        <Sliders />
        <SalaryResult />
      </section>
    </>
  );
}

export default Simulateur;
