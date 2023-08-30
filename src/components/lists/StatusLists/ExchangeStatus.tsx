import {FC} from "react";
import {
    CheckCircleIcon as CompleteIcon,
} from "@heroicons/react/24/outline";

interface ExchangeStatusProp {
    exchangeStatus: string
}

const ExchangeStatus: FC<ExchangeStatusProp> = ({exchangeStatus}) => {
    return(
        <div className="col-span-2 badge badge-outline badge-success bg-teal-50 p-4 w-full space-x-2">
            <CompleteIcon className="h-7 w-7" />
            <p className="font-medium">{exchangeStatus}</p>
        </div>
    )
}

export default ExchangeStatus;