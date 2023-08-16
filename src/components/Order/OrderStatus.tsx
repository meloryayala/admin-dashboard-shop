import {FC} from "react";
import {CheckCircleIcon as CompleteIcon, ExclamationTriangleIcon as PendingIcon,} from "@heroicons/react/24/outline";

interface OrderStatusProps {
    orderStatus: string;
}


const OrderStatus: FC<OrderStatusProps> = ({orderStatus}) => {

    return (
        <div className={
            orderStatus === 'Completed'
                ? 'badge badge-outline badge-success bg-teal-50 p-4 w-full'
                : 'badge badge-outline badge-warning bg-amber-50 p-4 w-full'
        }>
            {
                orderStatus === 'Completed'
                    ? <CompleteIcon className="h-7 w-7"/>
                    : <PendingIcon className="h-7 w-7"/>
            }
            <p className="font-medium">{orderStatus}</p>
        </div>
    )
}

export default OrderStatus;