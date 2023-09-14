import {FC} from "react";
import useFilterStat from "../../../hooks/useFilterStat";

interface ExchangeStatusProp {
    exchangeStatus: string
}

const ExchangeStatus: FC<ExchangeStatusProp> = ({exchangeStatus}) => {
    const statusItems = useFilterStat(exchangeStatus)

    return(
        <div className={statusItems.style}>
            {statusItems.icon}
            <p className="font-medium">{statusItems.textStatus}</p>
        </div>
    )
}

export default ExchangeStatus;