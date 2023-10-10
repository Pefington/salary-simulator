import clsx from "clsx";

function Contact() {
  return (
    <>
      <h2>Prenez contact dès maintenant</h2>
      <section className={clsx("flex flex-col gap-5", "p-5", "sm:p-10", "rounded-lg bg-slate-800")}>
        <h3>
          Télephone :{" "}
          <a
            href="tel:+33646600082"
            className="text-adv-gold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            06 46 60 00 82
          </a>
        </h3>
        <h3>
          Adresse :{" "}
          <a
            href="https://maps.app.goo.gl/JfsPaW255Zht1q269"
            className="text-adv-gold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            67, rue St Jacques 75005 Paris
          </a>
        </h3>
        <h3>
          Email :{" "}
          <a
            href="mailto:societe@adventium.fr"
            className="text-adv-gold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            societe@adventium.fr
          </a>
        </h3>
      </section>
    </>
  );
}

export default Contact;
