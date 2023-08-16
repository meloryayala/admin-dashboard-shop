import Header from "../components/Header";
import React, {FC, JSX} from "react";

interface HeaderProps {
    title: string;
    pageIcon: JSX.Element;
}


const Dashboard:FC<HeaderProps> = ({title, pageIcon}) => {
  return(
      <div className="container-center">
          <Header title={title} pageIcon={pageIcon} />
          <div className="grid grid-cols-4 gap-4 my-6">
            Hello
          </div>
      </div>
  )
}

export default Dashboard;