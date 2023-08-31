import {FC} from "react";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";

interface ReturnButtonProp {
    onClick: ()=> void;
    page: string;
}

const ReturnButton: FC<ReturnButtonProp> = ({onClick, page}) => {

    return(
      <button onClick={onClick} className="btn btn-ghost">
          <ArrowLeftIcon className="h-6 w-6"/>
          Return {page}
      </button>
  )
}

export default ReturnButton;