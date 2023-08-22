import {FC, JSX} from "react";
import {useParams} from "react-router-dom";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";
import Header from "../components/Header";
import TextInput from "../components/Form/TextInput";
import {lastOrders} from "../data/orders";
import SelectInput from "../components/Form/SelectInput";
import ProductInput from "../components/Form/ProductInput";
import ToogleInput from "../components/Form/ToogleInput";

interface HeaderProps {
    title: string;
    pageIcon: JSX.Element;
}

const OrderDetails: FC<HeaderProps> = ({title, pageIcon}) => {
    const {orderNumber} = useParams();

    const order = lastOrders.find(lastOrder => {
        if (lastOrder.orderNumber.toString() === orderNumber) {
            return lastOrder
        }
    })

    return (
        <>
            <button className="btn btn-ghost">
                <ArrowLeftIcon className="h-6 w-6"/>
                Return last orders
            </button>
            <div className="form-control">
                <div className="card bg-base-100 my-2 p-8">
                    <div className="flex flex-row justify-between items-center">
                        <Header title={`${title} #${orderNumber}`} pageIcon={pageIcon}/>
                        <h2 className="text-xl font-medium text-base-content/70">DETAILS</h2>
                    </div>

                    <div className="divider"></div>
                    <div className="mt-10 mb-6">
                        <h3 className="text-sm font-medium text-base-content mb-4">
                            ORDER INFORMATION
                        </h3>
                        <div className="grid grid-cols-2 gap-4 my-2">
                            <TextInput label="Order number" value={order?.orderNumber} disabled/>
                            <TextInput label="Order date" value={order?.orderDate} disabled/>
                            <TextInput label="Client name" value={order?.clientInfo.name} disabled/>
                            <SelectInput label="Pronoun" value={order?.clientInfo.pronoun} disabled />
                        </div>
                    </div>

                    <div className="mt-10 mb-6">
                        <h3 className="text-sm font-medium text-base-content mb-4">
                            CLIENT ADDRESS
                        </h3>
                        <div className="grid grid-cols-2 gap-4 my-2">
                            <TextInput label="Street" value={order?.clientInfo.streetAdress} disabled/>
                            <TextInput label="House number" value={order?.clientInfo.numberAdress} disabled/>
                            <TextInput label="City" value={order?.clientInfo.cityAdress} disabled/>
                            <TextInput label="Post code" value={order?.clientInfo.postNumberAdress} disabled/>
                        </div>
                    </div>

                    <div className="mt-10 mb-6">
                        <h3 className="text-sm font-medium text-base-content mb-4">
                            PRODUCTS
                        </h3>
                        <div className="grid grid-cols-1 gap-4 my-2">
                            <ProductInput label="Products" value={order?.products} />

                        </div>
                    </div>

                    <div className="mt-6 mb-6">
                        <div className="grid grid-cols-1 gap-4 my-2">
                            <ToogleInput label="Ettiquete" action="Sent ettiquete to client" />
                        </div>
                    </div>


                    <div className="mt-10 mb-6">
                        {
                            order?.orderStatus === 'Completed'
                            ? (
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="btn bg-pink-500 w-full">New exchange</button>
                                        <button className="btn bg-sky-500 w-full">New repair</button>
                                    </div>
                                )
                            : (<button className="btn btn-accent w-full">Complete order</button>)
                        }
                    </div>

                </div>
            </div>

        </>
    )
}

export default OrderDetails;