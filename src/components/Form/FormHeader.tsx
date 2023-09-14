import {FC, JSX} from "react";
import Header from "../Header";
import StatusBadge from "../lists/StatusBadge";

interface FormHeaderProps {
    title: string;
    orderNumber: string | undefined;
    pageIcon: JSX.Element;
    currentStatus: string;
    caseType: string;
}

const FormHeader: FC<FormHeaderProps> = ({ title, orderNumber, pageIcon, caseType, currentStatus}) => {
    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <Header title={`${title} #${orderNumber}`} pageIcon={pageIcon}/>
                <div className="flex w-1/3 items-center">
                    <StatusBadge caseStatus={currentStatus} caseType={caseType} />
                </div>
            </div>
            <div className="divider"></div>
        </>
    )
}

export default FormHeader;