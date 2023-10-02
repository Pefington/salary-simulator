import ExperienceSlider from "./ExperienceSlider"

function SalaryForm() {
  return (
    <section className="p-10 flex flex-col gap-5 items-center">
      <h1 className="text-4xl font-semibold text-center">Simulateur de Salaire</h1>
      <ExperienceSlider />
    </section>
  )
}

export default SalaryForm
