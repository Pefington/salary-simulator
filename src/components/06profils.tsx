import clsx from "clsx";

function Profils() {
  return (
    <>
      <h2>Pour devenir Adventurier</h2>
      <section className={clsx("flex flex-col gap-5", "p-5", "sm:p-10", "rounded-lg bg-slate-800")}>
        <h3>Les profils recherchés</h3>
        <p>Développeur Full Stack Craft :</p>
        <ul>
          <li>bonnes pratiques et leur partage</li>
          <li>expériences du TDD, BDD, DDD</li>
          <li>ouverture d'esprit</li>
          <li>esprit d'équipe, sens de l'entraide et du partage</li>
          <li>curieux et à l'écoute</li>
          <li>motivé par l'envie d'apprendre, le travail bien fait.</li>
        </ul>
      </section>
    </>
  );
}

export default Profils;
