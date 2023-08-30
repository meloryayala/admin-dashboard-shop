import {FC, JSX} from "react";
import Header from "../components/Header";
import TableTittle from "../components/lists/TableTittle";
import lastExchanges from "../data/exchanges";
import ExchangeRow from "../components/lists/RowLists/ExchangeRow";

interface HeaderProps {
    title: string;
    pageIcon: JSX.Element;
}

const Exchanges:FC<HeaderProps> = ({title, pageIcon}) => {
    return(
        <>
        <Header title={title} pageIcon={pageIcon} />

            <div className="container-center mt-16 mb-4 p-1">
                <div className="grid grid-cols-7 justify-items-center">
                    <TableTittle spanTitle="Customer" isColSpan="col-span-2"/>
                    <TableTittle spanTitle="Status" isColSpan="col-span-2" />
                    <TableTittle spanTitle="Exchange" isColSpan="col-span-2" />
                    <TableTittle spanTitle="Send date" />
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