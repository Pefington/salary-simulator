import clsx from "clsx";
import { useAtom, useAtomValue } from "jotai";

import { BullsEyeIcon } from "../../icons";
import { salaryResultAtom, showTooltipAtom } from "../../state/jotai";

function Tooltip() {
  const [showDialog, setShowDialog] = useAtom(showTooltipAtom);

  const roundedResult = Math.floor(useAtomValue(salaryResultAtom));

  return (
    <dialog
      open={showDialog}
      onClick={() => setShowDialog(false)}
      className={clsx(
        "fixed inset-0 z-50 h-screen w-screen p-10",
        "text-xl text-inherit",
        "bg-black bg-opacity-75",
        "backdrop-blur-sm",
        "transition-opacity duration-500",
        "cursor-pointer",
        showDialog && "flex flex-col items-center justify-center",
      )}
    >
      <div>
        <p className="mb-8">
          Ajustez les curseurs pour voir le salaire en fonction des variables.
          <br />
          Ceci désactivera le mode TJM cible.
        </p>
        <p className="flex flex-wrap items-baseline">
          <span className="mr-2 rounded-sm bg-sky-900 px-1 text-2xl font-bold text-adv-gold">
            {roundedResult}
          </span>
          Mode TJM cible: <br />
        </p>
        <p>
          Entrez un salaire pour obtenir le TJM nécessaire (actif:&nbsp;
          <BullsEyeIcon height="16px" className="inline fill-red-500" />)
        </p>
      </div>
    </dialog>
  );
}

export default Tooltip;
