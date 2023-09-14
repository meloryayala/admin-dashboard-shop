import {FC} from "react";
import {Link} from "react-router-dom";
import {enumCases} from "../../../constants/cases";
import StatusBadge from "../StatusBadge";

interface OrderStatusProp {
    clientName: string;
    streetAdress: string;
    cityAdress: string;
    products: string[];
    orderStatus: string;
    orderDate: string;
    sendDate: string;
    orderNumber: number;
}

const OrderRow:FC<OrderStatusProp> = ({clientName,streetAdress,cityAdress,products, orderDate, sendDate, orderNumber, orderStatus}) => {

return(
    <li>
     <Link to={`/orders/details/${orderNumber}`}>
       <div className={`alert grid grid-cols-5 bg-base-100 justify-items-center content-center my-2`}>
        <div className="justify-self-start pl-3">
            <h3 className="text-base font-medium">{clientName}</h3>
            <p className="text-xs">{cityAdress}, {streetAdress}</p>
        </div>
           <StatusBadge caseStatus={orderStatus} caseType={enumCases.ORDER} />
        <div>{products.map(product => <p>{product}</p> )}</div>
        <div>{orderDate}</div>
        <div>{sendDate}</div>
      </div>
     </Link>
    </li>
)
}

export default OrderRow;