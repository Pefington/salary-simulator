import clsx from "clsx";

function Adventuriers() {
  return (
    <>
      <h2>Adventuriers&nbsp;est au&nbsp;coeur de&nbsp;la&nbsp;stratégie</h2>
      <section className={clsx("flex flex-col gap-5", "p-5", "sm:p-10", "rounded-lg bg-slate-800")}>
        <h3>
          La montée en compétences technologique et l'accompagnement sur le développement personnel
          est garanti par :
        </h3>
        <ul>
          <li>La co-construction d'une feuille de route ou "Cap Carrière",</li>
          <li>des formations & certifications sur les méthodes et les technos,</li>
          <li>des ateliers soft skills,</li>
          <li>des rencontres craft,</li>
          <li>des séances de partage et retours d'expériences.</li>
        </ul>
      </section>
    </>
  );
}

export default Adventuriers;
