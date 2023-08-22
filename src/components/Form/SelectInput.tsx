import {FC} from "react";

interface TextInputProps {
    label: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string | number;

}

const TextInput: FC<TextInputProps> = ({label, disabled, placeholder, value}) => {
    return (
        <>
            <div>
                <label className="label">
            <span className="label-text font-medium text-base-content/60">
                {label}
            </span>
                </label>

                <select className="select select-bordered w-full" disabled={disabled}>
                    {
                        value
                            ? (<option>{value}</option>)
                            : (<>
                                    <option disabled selected>{placeholder}</option>
                                    <option>Sir</option>
                                    <option>Madam</option>
                                </>
                            )
                    }
                </select>
            </div>
        </>
    )
}

export default TextInput;