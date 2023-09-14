import {useEffect, useState} from "react";
import {
    CheckCircleIcon as CompleteIcon,
} from "@heroicons/react/24/outline";
import {enumCases} from "../constants/cases";
import {verifyExchange} from "../utils/fnVerifyExchange";
import {verifyOrder} from "../utils/fnVerifyOrder";
import {verifyRepair} from "../utils/fnVerifyRepair";
import {verifyDemo} from "../utils/fnVerifyDemo";


const useFilterStat = (caseType: string, receivedStatus: string) => {
    const [statusItems, setStatusItems] = useState({
        style: 'badge badge-outline badge-success bg-teal-50 p-4 w-full space-x-2',
        icon: <CompleteIcon className="h-7 w-7"/>,
        textStatus: receivedStatus
    })


    const verifyStatus = async () => {
       switch (caseType) {
           case enumCases.ORDER: {
               verifyOrder(receivedStatus, setStatusItems)
               return statusItems
           }
           case enumCases.EXCHANGE: {
               verifyExchange(receivedStatus, setStatusItems)
               return statusItems
           }
           case enumCases.REPAIR: {
               verifyRepair(receivedStatus, setStatusItems)
               return statusItems
           }
           case enumCases.DEMO: {
               verifyDemo(receivedStatus, setStatusItems)
               return statusItems
           }
       }
           return {...statusItems}
    }

    useEffect(()=> {
       verifyStatus()
    })

    return(
        statusItems
    )

}

export default useFilterStat;