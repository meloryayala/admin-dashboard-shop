import {FC} from "react";

interface TextAreaProps {
    label: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
}

const TextArea:FC<TextAreaProps> = ({label, placeholder, disabled, value}) => {
  return(
      <div>
          <label className="label mb-0">
            <span className="label-text font-medium text-base-content">
                {label}
            </span>
          </label>

          <textarea
              placeholder={placeholder}
              value={value}
              className="textarea textarea-bordered textarea-md w-full"
              disabled={disabled}
          />
      </div>
  )
}

export default TextArea;