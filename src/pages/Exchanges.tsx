import {FC, JSX} from "react";
import Header from "../components/Header";
import TableTittle from "../components/lists/TableTittle";
import lastExchanges from "../data/exchanges";
import ExchangeRow from "../components/lists/RowLists/ExchangeRow";
import NewCaseButton from "../components/Form/NewCaseButton";

interface HeaderProps {
    title: string;
    pageIcon: JSX.Element;
}

const Exchanges: FC<HeaderProps> = ({title, pageIcon}) => {
    return (
        <>
            <div className="flex justify-between">
                <Header title={title} pageIcon={pageIcon}/>
                <NewCaseButton caseType="New Exchange" caseColor="bg-sky-400" />
            </div>

            <div className="container-center mt-16 mb-4 p-1">
                <div className="grid grid-cols-9 justify-items-center">
                    <TableTittle spanTitle="Customer" isColSpan="col-span-2"/>
                    <TableTittle spanTitle="Status" isColSpan="col-span-2"/>
                    <TableTittle spanTitle="Products" isColSpan="col-span-3"/>
                    <TableTittle spanTitle="Open on"/>
                    <TableTittle spanTitle="Send date"/>
                </div>
            </div>

            <div className="container-center">
                <ul>
                    {
                        lastExchanges.map(lastExchange => (
                            <ExchangeRow
                                clientName={lastExchange.clientInfo.name}
                                streetAdress={lastExchange.clientInfo.streetAdress}
                                cityAdress={lastExchange.clientInfo.cityAdress}
                                productClientHas={lastExchange.productClientHas}
                                productClientNeed={lastExchange.productClientNeed}
                                exchangeStatus={lastExchange.exchangeStatus}
                                openExchange={lastExchange.dateHistoric.openExchange}
                                sendDate={lastExchange.dateHistoric.sendArticle}
                                orderNumber={lastExchange.orderNumber}
                            />
                        ))
                    }
                </ul>
            </div>
        </>
    )
};

export default Exchanges;