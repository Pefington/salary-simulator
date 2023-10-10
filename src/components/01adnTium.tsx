import clsx from "clsx";

function ADNTium() {
  return (
    <>
      <h2>ADN&nbsp;TIUM - Valoriser vos&nbsp;talents</h2>
      <section className={clsx("flex flex-col gap-5", "p-5", "sm:p-10", "rounded-lg bg-slate-800")}>
        <h3>
          Notre mission "Valoriser les talents". C'est une mission humaine avant tout, avec 3
          piliers :
        </h3>
        <ul>
          <li>La montée en compétences individuelle et en équipe est l'ADN d'Adventium.</li>
          <li>
            Une aventure collective dans un grand esprit d'équipe, accompagnée et soutenue par des
            dirigeants qui sont aussi des opérationnels, ce qui permet à chacun de trouver sa place.
          </li>
          <li>
            Une rémunération transparente, atypique et unique sur le marché, qui valorise le profil
            en temps réel.
          </li>
        </ul>
      </section>
    </>
  );
}

export default ADNTium;
