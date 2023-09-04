import {FC} from "react";
import {PlusIcon} from "@heroicons/react/20/solid";

interface NewCaseButtonProps {
    caseType: string;
    caseColor: string;
}

const NewCaseButton: FC<NewCaseButtonProps> = ({caseType, caseColor}) => {
  return(
      <button className={`btn ${caseColor}`} >
          <PlusIcon className="h-7 w-7" />
          {caseType}
      </button>
  )
}

export default NewCaseButton;