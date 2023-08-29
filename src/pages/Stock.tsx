import React, {FC, JSX} from "react";
import Header from "../components/Header";
import SuitsStock from "../components/Stock/SuitsStock";
import SlingTrainerStock from "../components/Stock/SlingTrainerStock";
import PullBarStock from "../components/Stock/PullBarStock";
import AccessoriesStock from "../components/Stock/AccessoriesStock";

interface StockProps {
    title: string;
    pageIcon: JSX.Element;
}

const Stock: FC<StockProps> = ({title, pageIcon}) => {
    return (
        <>
            <Header title={title} pageIcon={pageIcon}/>

            <SuitsStock />
            <SlingTrainerStock />
            <PullBarStock />
            <AccessoriesStock />
        </>
    )
};

export default Stock;