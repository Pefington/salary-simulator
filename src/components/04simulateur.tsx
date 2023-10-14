import clsx from "clsx";

import SalaryResult from "./04simulateur/SalaryResult";
import Sliders from "./04simulateur/Sliders";

function Simulateur() {
  return (
    <section>
      <div>
        <h2>Simulateur de Salaire</h2>
        <div className={clsx("flex flex-col gap-5", "md:flex-row md:justify-between md:gap-10")}>
          <Sliders />
          <SalaryResult />
        </div>
      </div>
    </section>
  );
}

export default Simulateur;
