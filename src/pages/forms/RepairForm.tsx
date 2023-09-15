import {FC, JSX} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import lastRepairs from "../../data/repairs";
import ReturnButton from "../../components/Form/ReturnButton";
import {enumCases} from "../../constants/cases";
import FormHeader from "../../components/Form/FormHeader";
import TextInput from "../../components/Form/TextInput";
import SelectInput from "../../components/Form/SelectInput";


interface RepairFormProps {
    title: string;
    pageIcon: JSX.Element;
}

const RepairForm: FC<RepairFormProps> = ({title, pageIcon}) => {
    const {orderNumber} = useParams()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const currentStatus = searchParams.get('status')!

    const handleReturnPage = () => {
        navigate('/repairs');
    }

    const repair = lastRepairs.find(lastRepair => lastRepair.orderNumber.toString() === orderNumber);

  return(
      <>
          <ReturnButton onClick={handleReturnPage} page="Exchanges"/>

          <form className="form-control">
              <div className="card w-full bg-base-100 p-8 my-2">
                  <FormHeader
                      title={title}
                      orderNumber={orderNumber}
                      pageIcon={pageIcon}
                      currentStatus={currentStatus}
                      caseType={enumCases.REPAIR}
                  />

                  <div className="my-6">
                      <div className="grid grid-cols-2 gap-4 my-2">
                          <TextInput label="Order number" value={repair?.orderNumber} disabled/>
                          <TextInput label="Order date" value={repair?.orderDate} disabled/>
                          <TextInput label="Client name" value={repair?.clientInfo.name} disabled/>
                          <SelectInput label="Pronoun" value={repair?.clientInfo.pronoun} disabled/>
                      </div>
                  </div>

                  <div className="my-6">
                      <div className="grid grid-cols-2 gap-4 my-2">
                          <TextInput label="Street" value={repair?.clientInfo.streetAdress} disabled/>
                          <TextInput label="House number" value={repair?.clientInfo.numberAdress} disabled/>
                          <TextInput label="City" value={repair?.clientInfo.cityAdress} disabled/>
                          <TextInput label="Post code" value={repair?.clientInfo.postNumberAdress} disabled/>
                      </div>
                  </div>

              </div>
          </form>

      </>
  )
}

export default RepairForm;