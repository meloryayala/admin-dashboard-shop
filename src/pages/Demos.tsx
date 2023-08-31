import React, {FC, JSX} from "react";
import Header from "../components/Header";
import TableTittle from "../components/lists/TableTittle";
import lastDemos from "../data/demos";
import DemoRow from "../components/lists/RowLists/DemoRow";
import NewCaseButton from "../components/lists/NewCaseButton";

interface HeaderProps {
    title: string;
    pageIcon: JSX.Element;
}

const Demos: FC<HeaderProps> = ({title, pageIcon}) => {
    return (
        <>
            <div className="flex justify-between">
                <Header title={title} pageIcon={pageIcon}/>
                <NewCaseButton caseType="New demo" caseColor="bg-violet-400" />
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