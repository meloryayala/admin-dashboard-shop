import {FC} from "react";

interface SubmitButtonProps {
    buttonTitle: string;
    color: string;
}

const SubmitButton:FC<SubmitButtonProps> = ({buttonTitle, color}) => {
  return(
      <button className={`btn ${color} w-full`}>
          {buttonTitle}
      </button>
  )
}

export default SubmitButton;