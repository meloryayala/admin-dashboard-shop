import {FC} from "react";

interface ProductInputProps {
    label: string;
    value?: string[];
}

const ProductInput: FC<ProductInputProps> = ({label, value}) => {
    return (
        <div>
            <label className="label">
            <span className="label-text font-medium text-base-content/60">
                {label}
            </span>
            </label>
            {
                value?.map(product =>
                    <input
                        type="text"
                        key={label}
                        value={product}
                        className="input input-bordered w-full my-1"
                        disabled
                    />
                )
            }
        </div>
    )
}

export default ProductInput;