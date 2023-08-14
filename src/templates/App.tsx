import {FC, ReactNode} from "react";
import Drawer from "../components/Drawew";
import TemplateWindow from "./TemplateWindow";

interface TemplateProps {
    children: ReactNode
}

const App: FC<TemplateProps> = ({children}) => {
    return (
        <div data-theme="cupcake" className="flex flex-row">
            <Drawer/>
            <TemplateWindow children={children}/>
        </div>
    );
}

export default App;
