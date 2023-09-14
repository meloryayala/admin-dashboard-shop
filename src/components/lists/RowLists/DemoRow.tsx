import {FC} from "react";
import {Link} from "react-router-dom";
import StatusBadge from "../StatusBadge";
import {enumCases} from "../../../constants/cases";

interface DemoStatusProp {
    clientName: string;
    streetAdress: string;
    cityAdress: string;
    productDemo: string;
    demoStatus: string;
    openDemo: string;
    sendDate: string;
    demoId: number;
}

const DemoRow:FC<DemoStatusProp> = ({clientName, streetAdress, cityAdress,productDemo,demoStatus, demoId, sendDate, openDemo }) => {

    return(
        <li>
            <Link to={`/orders/details/${demoId}`}>
                <div className={`alert grid grid-cols-5 bg-base-100 justify-items-center content-center my-2`}>
                    <div className="justify-self-start pl-3">
                        <h3 className="text-base font-medium">{clientName}</h3>
                        <p className="text-xs">{cityAdress}, {streetAdress}</p>
                    </div>
                    <StatusBadge caseStatus={demoStatus} caseType={enumCases.DEMO} />
                    <div>{productDemo}</div>
                    <div>{openDemo}</div>
                    <div>{sendDate === '' ? '-' : sendDate}</div>
                </div>
            </Link>
        </li>
    )
}

export default DemoRow;