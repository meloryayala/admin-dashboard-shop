import {
    BellIcon as OpenIcon,
    PaperAirplaneIcon as SendIcon
} from "@heroicons/react/24/outline";
import {JSX} from "react";

interface ExchangeType {
    style: string,
    icon: JSX.Element,
    textStatus: string,
}

export const verifyExchange = (receivedStatus: string, setStatusItems: React.Dispatch<React.SetStateAction<ExchangeType>> ) => {
    if (receivedStatus === 'open') {
        setStatusItems({
            style: 'col-span-2 badge badge-outline badge-warning bg-amber-50 p-4 w-full space-x-2',
            icon: <OpenIcon className="h-7 w-7"/>,
            textStatus: 'Open'
        })
    } else if (receivedStatus === 'send') {
        setStatusItems({
            style: 'col-span-2 badge badge-outline badge-warning bg-amber-50 p-4 w-full space-x-2',
            icon: <SendIcon className="h-7 w-7"/>,
            textStatus: 'Send'
        })
    }
}