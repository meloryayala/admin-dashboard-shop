import {FC} from "react";

interface ToggleInputProps {
    label: string;
    action: string;
    toggleStyle: string;
    isChecked?: boolean;
}

const ToggleInput: FC<ToggleInputProps> = ({label, action, toggleStyle, isChecked}) => {
    return (
        <div>
            <label className="label">
            <span className="label-text font-medium text-base-content">
                {label}
            </span>
            </label>

            <div className="cursor-pointer label justify-start space-x-3">
                <input type="checkbox" className={toggleStyle} checked={isChecked} />
                <span className="label-text text-base font-normal">{action}</span>
            </div>
        </div>
    )
}

export default ToggleInput;