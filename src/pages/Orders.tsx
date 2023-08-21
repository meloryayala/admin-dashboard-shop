import {FC, JSX} from "react";
import {lastOrders} from "../data/orders";
import OrderRow from "../components/Order/OrderRow";
import Header from "../components/Header";

interface HeaderProps {
    title: string;
    pageIcon: JSX.Element;
}

const Orders:FC<HeaderProps> = ({title, pageIcon}) => {
    return (
        <>
            <Header title={title} pageIcon={pageIcon} />

            <div className="container-center my-6">
                <div className="join flex">
                    <input className="input join-item w-full" placeholder="Search"/>
                    <button className="btn join-item bg-lime-300">Search</button>
                </div>
            </div>

            <div className="container-center mt-16 mb-4 p-1">
                <div className="grid grid-cols-5 justify-items-center">
                    <span className="text-sm font-medium text-neutral-400">Customer</span>
                    <span className="text-sm font-medium text-neutral-400">Status</span>
                    <span className="text-sm font-medium text-neutral-400">Products</span>
                    <span className="text-sm font-medium text-neutral-400">Order date</span>
                    <span className="text-sm font-medium text-neutral-400">Send date</span>
                </div>
            </div>

            <div className="container-center">
                {
                    lastOrders.map(lastOrder => (
                        <OrderRow
                            key={lastOrder.orderNumber}
                            clientName={lastOrder.clientInfo.name}
                            cityAdress={lastOrder.clientInfo.cityAdress}
                            streetAdress={lastOrder.clientInfo.streetAdress}
                            products={lastOrder.products}
                            orderDate={lastOrder.orderDate}
                            sendDate={lastOrder.sendDate}
                            orderStatus={lastOrder.orderStatus}
                            orderNumber={lastOrder.orderNumber}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Orders;