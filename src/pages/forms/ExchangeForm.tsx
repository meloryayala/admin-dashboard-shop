import {FC, JSX} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import TextInput from "../../components/Form/TextInput";
import SelectInput from "../../components/Form/SelectInput";
import FormHeader from "../../components/Form/FormHeader";
import SubmitButton from "../../components/Form/SubmitButton";
import ReturnButton from "../../components/Form/ReturnButton";
import lastExchanges from "../../data/exchanges";
import TrackItemLink from "../../components/Form/TrackItemLink";
import TextArea from "../../components/Form/TextArea";
import ToggleInput from "../../components/Form/ToggleInput";


interface ExchangeDetailsProps {
    title: string;
    pageIcon: JSX.Element;
}

const ExchangeForm: FC<ExchangeDetailsProps> = ({title, pageIcon}) => {
    const {orderNumber} = useParams();
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const currentStatus = searchParams.get('status')

    const handleReturnPage = () => {
        navigate('/exchanges');
    }

    const exchange = lastExchanges.find(lastExchange => lastExchange.orderNumber.toString() === orderNumber);

    if (currentStatus === 'open') {
        console.log('Is open')
    } else if (currentStatus === 'send') {
        console.log('Is send')
    } else if (currentStatus === 'completed') {
        console.log('Is completed')
    }


    return (
        <>
            <ReturnButton onClick={handleReturnPage} page="Exchanges"/>

            <form className="form-control">
                <div className="card w-full bg-base-100 p-8 my-2">
                    <FormHeader title={title} orderNumber={orderNumber} pageIcon={pageIcon}
                                currentStatus={currentStatus}/>

                    <div className="my-6">
                        <div className="grid grid-cols-2 gap-4 my-2">
                            <TextInput label="Order number" value={exchange?.orderNumber} disabled/>
                            <TextInput label="Order date" value={exchange?.orderDate} disabled/>
                            <TextInput label="Client name" value={exchange?.clientInfo.name} disabled/>
                            <SelectInput label="Pronoun" value={exchange?.clientInfo.pronoun} disabled/>
                        </div>
                    </div>

                    <div className="my-6">
                        <div className="grid grid-cols-2 gap-4 my-2">
                            <TextInput label="Street" value={exchange?.clientInfo.streetAdress} disabled/>
                            <TextInput label="House number" value={exchange?.clientInfo.numberAdress} disabled/>
                            <TextInput label="City" value={exchange?.clientInfo.cityAdress} disabled/>
                            <TextInput label="Post code" value={exchange?.clientInfo.postNumberAdress} disabled/>
                        </div>
                    </div>

                    <div className="my-6">
                        <div className="grid grid-cols-2 gap-4 my-2">
                            <TextInput label="Client has" value={exchange?.productClientHas} disabled/>
                            <TextInput label="Client needs" value={exchange?.productClientNeed} disabled/>
                        </div>
                        <TrackItemLink />
                    </div>

                    <div className="my-6">
                        <TextArea label="Comment about exchange" placeholder="e.g. Client is not sure about the size." value={exchange?.comment} disabled />
                    </div>

                    <div className="my-6">
                        <ToggleInput
                            label="Remove from Stock" action="The product clients needs will be removed from stock"
                            toggleStyle="toggle toggle-info"
                            isChecked={true}
                        />
                    </div>

                    <div className="my-6">
                        <ToggleInput
                            label="Get etiquette" action="The etiquette will be open after submit"
                            toggleStyle="toggle toggle-info"
                            isChecked={true}
                        />
                    </div>

                    <div className="my-6">
                        <SubmitButton buttonTitle="Complete exchange" color="bg-sky-400 hover:bg-sky-300"/>
                    </div>



                </div>
            </form>

        </>
    )
}

export default ExchangeForm;