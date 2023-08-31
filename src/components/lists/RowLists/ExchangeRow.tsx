import {FC} from "react";
import {Link} from "react-router-dom";
import ExchangeStatus from "../StatusLists/ExchangeStatus";

interface ExchangeStatusProp {
    clientName: string;
    streetAdress: string;
    cityAdress: string;
    productClientHas: string;
    productClientNeed: string;
    exchangeStatus: string;
    openExchange: string;
    sendDate: string;
    orderNumber: number;
}

const ExchangeRow:FC<ExchangeStatusProp> = ({clientName, streetAdress, cityAdress,productClientHas,productClientNeed,exchangeStatus, openExchange, orderNumber, sendDate }) => {

    return(
        <li>
            <Link to={`/exchanges/details/${orderNumber}`}>
                <div className={`alert grid grid-cols-9 bg-base-100 justify-items-center content-center my-2`}>
                    <div className="col-span-2 justify-self-start pl-3">
                        <h3 className="text-base font-medium">{clientName}</h3>
                        <p className="text-xs">{cityAdress}, {streetAdress}</p>
                    </div>
                    <ExchangeStatus exchangeStatus={exchangeStatus} />
                    <div className="col-span-3">{productClientHas} ➜ {productClientNeed}</div>
                    <div>{openExchange}</div>
                    <div>{sendDate === ''? '-' : sendDate}</div>
                </div>
            </Link>
        </li>
    )
}

export default ExchangeRow;