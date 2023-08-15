import {FC, ReactNode} from "react";
import Header from "../components/Header";

interface TemplateProps {
    children: ReactNode
}

const TemplateWindow: FC<TemplateProps> = ({children}) => {
    return (
        <div className="basis-2/2 w-full my-9 mx-7">
                <Header/>
                {children}
        </div>
    )
}

export default TemplateWindow;