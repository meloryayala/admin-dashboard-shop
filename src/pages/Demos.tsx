import React, {FC, JSX} from "react";
import Header from "../components/Header";
import TableTittle from "../components/lists/TableTittle";
import lastDemos from "../data/demos";
import DemoRow from "../components/lists/RowLists/DemoRow";
import NewCaseButton from "../components/Form/NewCaseButton";

interface DemoProps {
    title: string;
    pageIcon: JSX.Element;
    demoColor: string;
}

const Demos: FC<DemoProps> = ({title, pageIcon, demoColor}) => {
    return (
        <>
            <div className="flex justify-between">
                <Header title={title} pageIcon={pageIcon}/>
                <NewCaseButton caseType="New demo" caseColor={`bg-${demoColor}`} />
            </div>

            <div className="container-center mt-16 mb-4 p-1">
                <div className="grid grid-cols-5 justify-items-center">
                    <TableTittle spanTitle="Customer" />
                    <TableTittle spanTitle="Status" />
                    <TableTittle spanTitle="Product" />
                    <TableTittle spanTitle="Open on" />
                    <TableTittle spanTitle="Send date"/>
                </div>
            </div>

            <div className="container-center">
                <ul>
                    {
                        lastDemos.map(lastDemo => (
                            <DemoRow
                                clientName={lastDemo.clientInfo.name}
                                streetAdress={lastDemo.clientInfo.streetAdress}
                                cityAdress={lastDemo.clientInfo.cityAdress}
                                productDemo={lastDemo.productDemo}
                                demoStatus={lastDemo.demoStatus}
                                openDemo={lastDemo.dateHistoric.openDemo}
                                sendDate={lastDemo.dateHistoric.sendArticle}
                                demoId={lastDemo.demoId}
                            />
                        ))
                    }
                </ul>
            </div>
        </>
    )
};

export default Demos;