import {FC} from "react";

interface TextInputProps {
    label: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string | number;

}

const TextInput: FC<TextInputProps> = ({label, disabled, placeholder, value}) => {
    return (
        <div>
            <label className="label mb-0">
            <span className="label-text font-medium text-base-content">
                {label}
            </span>
            </label>

            <input
                type="text"
                placeholder={placeholder}
                value={value}
                className="input input-bordered w-full"
                disabled={disabled}
            />
        </div>
    )
}

export default TextInput;