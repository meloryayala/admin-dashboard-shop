import {FC, JSX} from "react";
import {useNavigate, useParams} from "react-router-dom";
import TextInput from "../../components/Form/TextInput";
import {lastOrders} from "../../data/orders";
import SelectInput from "../../components/Form/SelectInput";
import ProductInput from "../../components/Form/ProductInput";
import FormHeader from "../../components/Form/FormHeader";
import SubmitButton from "../../components/Form/SubmitButton";
import ReturnButton from "../../components/Form/ReturnButton";
import {enumCases} from "../../constants/cases";

interface OrderDetailsProps {
    title: string;
    pageIcon: JSX.Element;
}

const OrderForm: FC<OrderDetailsProps> = ({title, pageIcon}) => {
    const {orderNumber} = useParams();
    const navigate = useNavigate()

    const handleReturnPage = ()  => {
        navigate('/orders');
    }

    const order = lastOrders.find(lastOrder => lastOrder.orderNumber.toString() === orderNumber);

    return (
        <>
            <ReturnButton onClick={handleReturnPage} page="Orders" />

            <form className="form-control">
                <div className="card w-full bg-base-100 p-8 my-2">
                    <FormHeader
                        title={title}
                        orderNumber={orderNumber}
                        pageIcon={pageIcon} currentStatus={order?.orderStatus!}
                        caseType={enumCases.ORDER}
                    />

                    <div className="mt-3 mb-6">
                        <div className="grid grid-cols-2 gap-4 my-2">
                            <TextInput label="Order number" value={order?.orderNumber} disabled/>
                            <TextInput label="Order date" value={order?.orderDate} disabled/>
                            <TextInput label="Client name" value={order?.clientInfo.name} disabled/>
                            <SelectInput label="Pronoun" value={order?.clientInfo.pronoun} disabled/>
                        </div>
                    </div>

                    <div className="my-6">
                        <div className="grid grid-cols-2 gap-4 my-2">
                            <TextInput label="Street" value={order?.clientInfo.streetAdress} disabled/>
                            <TextInput label="House number" value={order?.clientInfo.numberAdress} disabled/>
                            <TextInput label="City" value={order?.clientInfo.cityAdress} disabled/>
                            <TextInput label="Post code" value={order?.clientInfo.postNumberAdress} disabled/>
                        </div>
                    </div>

                    <div className="my-6">
                        <div className="grid grid-cols-1 gap-4 my-2">
                            <ProductInput label="Products" value={order?.products}/>

                        </div>
                    </div>

                    <div className="my-6">
                        {
                            order?.orderStatus === 'complete'
                                ? (
                                    <div className="grid grid-cols-2 gap-2">
                                        <SubmitButton buttonTitle="New repair" color="bg-red-400 hover:bg-red-300"/>
                                        <SubmitButton buttonTitle="New exchange" color="bg-sky-400 hover:bg-sky-300" />
                                    </div>
                                )
                                : (<SubmitButton buttonTitle="Complete order" color="bg-amber-400" />)
                        }
                    </div>

                </div>
            </form>

        </>
    )
}

export default OrderForm;