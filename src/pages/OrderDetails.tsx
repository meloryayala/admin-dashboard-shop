import {FC, JSX} from "react";
import {useParams} from "react-router-dom";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";
import Header from "../components/Header";


interface HeaderProps {
    title: string;
    pageIcon: JSX.Element;
}

const OrderDetails: FC<HeaderProps> = ({title, pageIcon}) => {
    const {orderNumber} = useParams();

    return (
        <>
            <button className="btn btn-ghost">
                <ArrowLeftIcon className="h-6 w-6"/>
                Return last orders
            </button>

            <div className="card bg-base-100 my-2 p-7">
                <div className="flex flex-row justify-between items-center">
                    <Header title={`${title} ${orderNumber}`} pageIcon={pageIcon}/>
                    <h2 className="text-xl font-medium text-base-content/70">ORDER DETAILS</h2>
                </div>

                <div className="form-control my-10">
                    <h3 className="text-lg font-medium text-base-content/70">
                        Order Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4 my-2">
                        <div>
                            <label className="label font-medium">
                                <span className="label-text text-base-content/60">Order number</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full"/>
                        </div>

                        <div>
                            <label className="label font-medium">
                                <span className="label-text text-base-content/60">Order number</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full"/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OrderDetails;