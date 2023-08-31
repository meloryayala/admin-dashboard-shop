import {FC} from "react";
import {Link} from "react-router-dom";
import RepairStatus from "../StatusLists/RepairStatus";

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
            <Link to={`/orders/details/${orderNumber}`}>
                <div className={`alert grid grid-cols-5 bg-base-100 justify-items-center content-center my-2`}>
                    <div className="justify-self-start pl-3">
                        <h3 className="text-base font-medium">{clientName}</h3>
                        <p className="text-xs">{cityAdress}, {streetAdress}</p>
                    </div>
                    <RepairStatus repairStatus={repairStatus} />
                    <div>{openRepair}</div>
                    <div>{productToRepair}</div>
                    <div>{repairType === '' ? '-' : repairType }</div>
                </div>
            </Link>
        </li>
    )
}

export default RepairRow;