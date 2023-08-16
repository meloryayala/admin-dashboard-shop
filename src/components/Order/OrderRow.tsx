import {FC} from "react";
import OrderStatus from "./OrderStatus";

interface OrderStatusProp {
    clientName: string;
    streetAdress: string;
    cityAdress: string;
    orderStatus: string;
    products: string[];
    orderDate: string;
    sendDate: string;
}

const OrderRow:FC<OrderStatusProp> = ({clientName,streetAdress,cityAdress,products, orderDate, sendDate, orderStatus}) => {
return(
    <div className="alert grid grid-cols-5 bg-base-100 justify-items-center content-center my-2">
        <div className="justify-self-start pl-3">
            <h3 className="text-base font-medium">{clientName}</h3>
            <p className="text-xs">{cityAdress}, {streetAdress}</p>
        </div>
        <OrderStatus orderStatus={orderStatus} />
        <div>{products.map(product => <p>{product}</p> )}</div>
        <div>{orderDate}</div>
        <div>{sendDate}</div>
    </div>
)
}

export default OrderRow