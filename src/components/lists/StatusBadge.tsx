import {FC} from "react";
import useFilterStat from "../../hooks/useFilterStat";

interface StatusBadgeProps {
    caseStatus: string;
    caseType: string;
}

const StatusBadge: FC<StatusBadgeProps> = ({caseStatus, caseType}) => {
    const statusItems = useFilterStat(caseType, caseStatus)

    return (

        <div className={statusItems.style}>
            {statusItems.icon}
            <p className="font-medium">{statusItems.textStatus}</p>
        </div>

    )
}

export default StatusBadge;