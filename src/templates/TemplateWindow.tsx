import { FC, ReactNode } from "react";

interface TemplateProps {
    children: ReactNode
}

const TemplateWindow: FC<TemplateProps> = ({children}) => {
    return (
        <div className="basis-2/2 w-full">
          {children}
        </div>
    )
}

export default TemplateWindow;