import {FC} from "react";

interface ToogleInputProps {
    label: string;
    action: string
}

const ToogleInput: FC<ToogleInputProps> = ({label, action}) => {
    return (
        <div>
            <label className="label">
            <span className="label-text font-medium text-base-content/60">
                {label}
            </span>
            </label>

            <label className="cursor-pointer label justify-start space-x-3">
                <input type="checkbox" className="toggle toggle-accent" checked />
                <span className="label-text font-semibold ">{action}</span>
            </label>
        </div>
    )
}

export default ToogleInput;