import {FC, ReactNode} from "react";
import Drawer from "../components/Drawer";

interface TemplateProps {
    children: ReactNode
}

const App: FC<TemplateProps> = ({children}) => {
    return (
        <div data-theme="cupcake" className="flex flex-row w-screen bg-base-200/50">
            <Drawer/>
            <div className="basis-2/2 w-full my-9 mx-7">
                {children}
            </div>
        </div>
    );
}

export default App;
