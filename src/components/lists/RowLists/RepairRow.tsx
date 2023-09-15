import {FC} from "react";
import {Link} from "react-router-dom";
import RepairTypeBadge from "../RepairTypeBadge";
import {enumCases} from "../../../constants/cases";
import StatusBadge from "../StatusBadge";

interface RepairStatusProp {
    clientName: string;
    streetAdress: string;
    cityAdress: string;
    productToRepair: string;
    repairStatus: string;
    repairType: string;
    openRepair: string;
    orderNumber: number;
}

const RepairRow:FC<RepairStatusProp> = ({clientName, streetAdress, cityAdress,productToRepair,repairStatus, orderNumber, openRepair, repairType }) => {

    return(
        <li>
            <Link to={{ pathname: `/repairs/details/${orderNumber}`, search: `?status=${repairStatus}`}}>
                <div className={`alert grid grid-cols-5 bg-base-100 justify-items-center content-center my-2`}>
                    <div className="justify-self-start pl-3">
                        <h3 className="text-base font-medium">{clientName}</h3>
                        <p className="text-xs">{cityAdress}, {streetAdress}</p>
                    </div>
                    <StatusBadge caseStatus={repairStatus} caseType={enumCases.REPAIR} />
                    <div>{productToRepair}</div>
                    <div>{openRepair}</div>
                    <div><RepairTypeBadge repairType={repairType} /> </div>
                </div>
            </Link>
        </li>
    )
}

export default RepairRow;