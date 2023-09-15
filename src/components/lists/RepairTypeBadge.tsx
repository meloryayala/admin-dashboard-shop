import {FC} from "react";
import {
    GlobeAsiaAustraliaIcon
} from "@heroicons/react/24/outline";

interface RepairTypeBadgeProp {
    repairType: string
}

const RepairTypeBadge: FC<RepairTypeBadgeProp> = ({repairType}) => {
    return(
        <div className="badge bg-secondary-content/10 px-3 py-5 w-full space-x-2">
            <GlobeAsiaAustraliaIcon className="h-7 w-7" />
            <p className="font-medium">{repairType === ''? 'In analysis' : repairType }</p>
        </div>
    )
}

export default RepairTypeBadge;