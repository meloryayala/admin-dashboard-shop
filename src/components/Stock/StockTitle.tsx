import {FC} from "react";
import {PencilSquareIcon as EditIcon} from "@heroicons/react/24/solid";

interface StockTitleProp {
    title: string;
    setDisableInput: () => void;
}

const StockTitle: FC<StockTitleProp> = ({ title, setDisableInput }) => {
  return(
      <div className="flex justify-between mb-4">
          <h2 className="text-xl font-medium">{title}</h2>
          <button onClick={setDisableInput} className="btn btn-ghost">
              <EditIcon className="h- w-6"/>
          </button>
      </div>
  )
}

export default StockTitle;

