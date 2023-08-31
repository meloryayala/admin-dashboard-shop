import {FC} from "react";
import {
    CheckCircleIcon as CompleteIcon,
} from "@heroicons/react/24/outline";

interface DemoStatusProp {
    demoStatus: string
}

const DemoStatus: FC<DemoStatusProp> = ({demoStatus}) => {
    return(
        <div className="badge badge-outline badge-success bg-teal-50 p-4 w-full space-x-2">
            <CompleteIcon className="h-7 w-7" />
            <p className="font-medium">{demoStatus}</p>
        </div>
    )
}

export default DemoStatus;