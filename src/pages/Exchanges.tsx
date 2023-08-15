import {FC, JSX} from "react";
import Header from "../components/Header";

interface HeaderProps {
    title: string;
    pageIcon: JSX.Element;
}

const Exchanges:FC<HeaderProps> = ({title, pageIcon}) => {
    return(
        <Header title={title} pageIcon={pageIcon} />
    )
};

export default Exchanges;