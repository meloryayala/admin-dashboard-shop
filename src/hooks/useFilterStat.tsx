import {useEffect, useState} from "react";
import {
    CheckCircleIcon as CompleteIcon,
} from "@heroicons/react/24/outline";
import {enumCases} from "../constants/cases";
import {verifyExchange} from "../utils/fnVerifyExchange";


const useFilterStat = (caseType: string, receivedStatus: string) => {
    const [statusItems, setStatusItems] = useState({
        style: 'col-span-2 badge badge-outline badge-success bg-teal-50 p-4 w-full space-x-2',
        icon: <CompleteIcon className="h-7 w-7"/>,
        textStatus: 'Complete'
    })


    const verifyStatus = async () => {
       switch (caseType) {
           case enumCases.ORDER: {
               return console.log('order')
           }
           case enumCases.EXCHANGE: {
               verifyExchange(receivedStatus, setStatusItems)
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