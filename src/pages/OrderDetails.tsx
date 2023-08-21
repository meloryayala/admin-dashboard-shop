import {FC, JSX} from "react";
import {useParams} from "react-router-dom";
import Header from "../components/Header";


interface HeaderProps {
    title: string;
    pageIcon: JSX.Element;
}

const OrderDetails:FC<HeaderProps> = ({title, pageIcon}) => {
    const { orderNumber } = useParams();

  return(
      <>
        <Header title={title} pageIcon={pageIcon}/>
          {orderNumber}

      </>
  )
}

export default OrderDetails;