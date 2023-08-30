import {FC} from "react";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";

interface ReturnButtonProp {
    onClick: ()=> void
}

const ReturnButton: FC<ReturnButtonProp> = ({onClick}) => {

    return(
      <button onClick={onClick} className="btn btn-ghost">
          <ArrowLeftIcon className="h-6 w-6"/>
          Return last orders
      </button>
  )
}

export default ReturnButton;