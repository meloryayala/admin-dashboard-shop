import {
    BellIcon as OpenIcon, CheckCircleIcon as CompleteIcon,
} from "@heroicons/react/24/outline";
import React, {JSX} from "react";

interface OrderType {
    style: string,
    icon: JSX.Element,
    textStatus: string,
}

export const verifyOrder = (receivedStatus: string, setStatusItems: React.Dispatch<React.SetStateAction<OrderType>> ) => {
    if (receivedStatus === 'pending') {
        setStatusItems({
            style: 'badge badge-outline badge-warning bg-amber-50 p-4 w-full space-x-2',
            icon: <OpenIcon className="h-7 w-7"/>,
            textStatus: 'Open'
        })
    } else if (receivedStatus === 'complete') {
        setStatusItems({
            style: 'badge badge-outline badge-success bg-teal-50 p-4 w-full space-x-2',
            icon: <CompleteIcon className="h-7 w-7"/>,
            textStatus: 'Complete'
        })
    }
}