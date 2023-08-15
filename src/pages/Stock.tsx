import {FC, JSX} from "react";
import Header from "../components/Header";
import React from "react";

interface HeaderProps {
    title: string;
    pageIcon: JSX.Element;
}

const Stock:FC<HeaderProps> = ({title, pageIcon}) => {
    return(
        <Header title={title} pageIcon={pageIcon} />
    )
};

export default Stock;