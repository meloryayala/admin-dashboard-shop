import {
    BellIcon as OpenIcon, CheckCircleIcon as CompleteIcon,
    PaperAirplaneIcon as SendIcon
} from "@heroicons/react/24/outline";
import React, {JSX} from "react";

interface DemoType {
    style: string,
    icon: JSX.Element,
    textStatus: string,
}

export const verifyDemo = (receivedStatus: string, setStatusItems: React.Dispatch<React.SetStateAction<DemoType>> ) => {
    if (receivedStatus === 'open') {
        setStatusItems({
            style: 'badge badge-outline badge-warning bg-amber-50 px-3 py-5 w-full space-x-2',
            icon: <OpenIcon className="h-7 w-7"/>,
            textStatus: 'Open'
        })
    } else if (receivedStatus === 'send') {
        setStatusItems({
            style: 'badge badge-outline badge-warning bg-amber-50 px-3 py-5 w-full space-x-2',
            icon: <SendIcon className="h-7 w-7"/>,
            textStatus: 'Send'
        })
    } else if (receivedStatus === 'complete') {
        setStatusItems({
            style: 'badge badge-outline badge-success bg-teal-50 px-3 py-5 w-full space-x-2',
            icon: <CompleteIcon className="h-7 w-7"/>,
            textStatus: 'Complete'
        })
    }
}