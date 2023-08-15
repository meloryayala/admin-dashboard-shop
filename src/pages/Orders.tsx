import OrderRow from "../components/OrderRow";
import {lastOrders} from "../data/orders";

const Orders = () => {
    return (
        <>
            <div className="container-center my-10">
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
                    lastOrders.map(lastorder => (
                        <OrderRow
                            clientName={lastorder.clientInfo.name}
                            clientAdress={`${lastorder.clientInfo.adress.street}, ${lastorder.clientInfo.adress.city}`}
                            products={lastorder.orderInfo.products}
                            orderDate={lastorder.orderInfo.orderDate}
                            sendDate={lastorder.orderInfo.sendDate}
                            orderStatus={lastorder.orderInfo.orderStatus}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Orders;