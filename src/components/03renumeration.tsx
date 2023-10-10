import clsx from "clsx";

function Renumeration() {
  return (
    <>
      <h2>Rénumération atypique sans&nbsp;équivalent</h2>
      <section className={clsx("flex flex-col gap-5", "p-5", "sm:p-10", "rounded-lg bg-slate-800")}>
        <h3>
          La rémunération chez Adventium est atypique, son évolution s'indexe automatiquement sur
          l'enrichissement en compétences et en expérience du collaborateur.
        </h3>
        <p>La rémunération fixe est basée sur les principes fondamentaux suivants :</p>
        <ul>
          <li>un fixe mensuel (qui garantit la prise en charge de 3 mois d'intermission)</li>
          <li>l'adventurier récupère au maximum le surplus du TJM.</li>
        </ul>
      </section>
    </>
  );
}

export default Renumeration;
