import clsx from "clsx";

function Intermission() {
  return (
    <>
      <h2>Pas d'inter-contrat mais intermission</h2>
      <section className={clsx("flex flex-col gap-5", "p-5", "sm:p-10", "rounded-lg bg-slate-800")}>
        <h3>
          Ainsi, nous parlons d'Inter-mission, et non d'intercontrat, lorsque le collaborateur se
          trouve entre 2 missions.
        </h3>
        <p>À nos yeux, cette période offre de multiples opportunités pour :</p>
        <ul>
          <li>
            Renforcer ses compétences grâce à l'accès illimité aux formations et améliorer son
            positionnement ;
          </li>
          <li>Capter une nouvelle technologie et la transmettre à l'équipe ;</li>
          <li>
            Travailler une réorientation de son Cap Carrière, en lien avec la stratégie de
            l'entreprise.
          </li>
        </ul>
      </section>
    </>
  );
}

export default Intermission;
