import {FC, JSX} from "react";
import Header from "../components/Header";
import TableTittle from "../components/lists/TableTittle";
import lastRepairs from "../data/repairs";
import RepairRow from "../components/lists/RowLists/RepairRow";

interface HeaderProps {
    title: string;
    pageIcon: JSX.Element;
}

const Repairs: FC<HeaderProps> = ({title, pageIcon}) => {
    return (
        <>
            <Header title={title} pageIcon={pageIcon}/>

            <div className="container-center mt-16 mb-4 p-1">
                <div className="grid grid-cols-5 justify-items-center">
                    <TableTittle spanTitle="Customer" />
                    <TableTittle spanTitle="Status" />
                    <TableTittle spanTitle="Open on" />
                    <TableTittle spanTitle="Product"/>
                    <TableTittle spanTitle="Type" />
                </div>
            </div>

            <div className="container-center">
                <ul>
                    {
                        lastRepairs.map(lastRepair => (
                            <RepairRow
                                clientName={lastRepair.clientInfo.name}
                                streetAdress={lastRepair.clientInfo.streetAdress}
                                cityAdress={lastRepair.clientInfo.cityAdress}
                                repairStatus={lastRepair.repairStatus}
                                openRepair={lastRepair.dateHistoric.openRepair}
                                productToRepair={lastRepair.productToRepair}
                                repairType={lastRepair.repairType}
                                orderNumber={lastRepair.orderNumber}
                            />
                        ))
                    }
                </ul>
            </div>
        </>
    )
};

export default Repairs;