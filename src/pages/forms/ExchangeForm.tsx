import {FC, JSX} from "react";
import {useNavigate, useParams} from "react-router-dom";
import TextInput from "../../components/Form/TextInput";
import SelectInput from "../../components/Form/SelectInput";
import FormHeader from "../../components/Form/FormHeader";
import SubmitButton from "../../components/Form/SubmitButton";
import ReturnButton from "../../components/Form/ReturnButton";
import lastExchanges from "../../data/exchanges";

interface ExchangeDetailsProps {
    title: string;
    pageIcon: JSX.Element;
    exchangeColor: string;
}

const ExchangeForm: FC<ExchangeDetailsProps> = ({title, pageIcon, exchangeColor}) => {
    const {orderNumber} = useParams();
    const navigate = useNavigate()

    const handleReturnPage = ()  => {
        navigate('/exchanges');
    }

    const exchange = lastExchanges.find(lastExchange => lastExchange.orderNumber.toString() === orderNumber);

    return (
        <>
            <ReturnButton onClick={handleReturnPage} page="Exchanges" />

            <form className="form-control">
                <div className="card w-full bg-base-100 p-8 my-2">
                    <FormHeader title={title} orderNumber={orderNumber} pageIcon={pageIcon} />

                    <div className="m-6">
                        <div className="grid grid-cols-2 gap-4 my-2">
                            <TextInput label="Order number" value={exchange?.orderNumber} disabled/>
                            <TextInput label="Order date" value={exchange?.orderDate} disabled/>
                            <TextInput label="Client name" value={exchange?.clientInfo.name} disabled/>
                            <SelectInput label="Pronoun" value={exchange?.clientInfo.pronoun} disabled/>
                        </div>
                    </div>

                    <div className="m-6">
                        <div className="grid grid-cols-2 gap-4 my-2">
                            <TextInput label="Street" value={exchange?.clientInfo.streetAdress} disabled/>
                            <TextInput label="House number" value={exchange?.clientInfo.numberAdress} disabled/>
                            <TextInput label="City" value={exchange?.clientInfo.cityAdress} disabled/>
                            <TextInput label="Post code" value={exchange?.clientInfo.postNumberAdress} disabled/>
                        </div>
                    </div>

                    <div className="m-6">
                        <div className="grid grid-cols-2 gap-4 my-2">
                            <TextInput label="Client has" value={exchange?.productClientHas} disabled/>
                            <TextInput label="Client needs" value={exchange?.productClientNeed} disabled/>

                        </div>
                    </div>

                    <div className="m-5">
                        <SubmitButton buttonTitle="Complete exchange" color={`bg-${exchangeColor}`} />
                    </div>

                </div>
            </form>

        </>
    )
}

export default ExchangeForm;