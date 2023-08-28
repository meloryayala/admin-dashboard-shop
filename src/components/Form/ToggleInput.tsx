import {FC} from "react";

interface ToggleInputProps {
    label: string;
    action: string
}

const ToggleInput: FC<ToggleInputProps> = ({label, action}) => {
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

export default ToggleInput;