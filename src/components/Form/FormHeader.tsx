import {FC, JSX} from "react";
import Header from "../Header";

interface FormHeaderProps {
    title: string;
    orderNumber: string | undefined;
    pageIcon: JSX.Element;
}

const FormHeader: FC<FormHeaderProps> = ({title, orderNumber, pageIcon}) => {
    return(
        <>
        <div className="flex flex-row justify-between items-center">
            <Header title={`${title} #${orderNumber}`} pageIcon={pageIcon}/>
            <h2 className="text-xl font-medium text-base-content/70">DETAILS</h2>
        </div>
        <div className="divider"></div>
        </>
    )
}

export default FormHeader;