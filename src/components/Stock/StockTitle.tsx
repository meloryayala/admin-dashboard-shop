import {FC} from "react";
import {PencilSquareIcon as EditIcon} from "@heroicons/react/24/solid";

interface StockTitleProp {
    title: string;
}

const StockTitle: FC<StockTitleProp> = ({ title }) => {
  return(
      <div className="flex justify-between mb-4">
          <h2 className="text-xl font-medium">{title}</h2>
          <button className="btn btn-ghost">
              <EditIcon className="h- w-6"/>
          </button>
      </div>
  )
}

export default StockTitle;

