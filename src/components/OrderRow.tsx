import {FC} from "react";

interface OrderStatusProp {
    clientName: string;
    clientAdress: string;
    orderStatus: string;
    products: string [];
    orderDate: string;
    sendDate: string;
}

const OrderRow:FC<OrderStatusProp> = ({clientName,clientAdress,products, orderDate, sendDate, orderStatus}) => {
return(
    <div className="alert grid grid-cols-5 bg-base-100 justify-items-center m-2">
        <div className="justify-self-start pl-3">
            <h3 className="text-base">{clientName}</h3>
            <p className="text-xs">{clientAdress}</p>
        </div>
        <div>{orderStatus}</div>
        <div>{products.map(product => (
            <p className="text-base">{product}</p>
        ))}</div>
        <div>{orderDate}</div>
        <div>{sendDate}</div>
    </div>
)
}

export default OrderRow