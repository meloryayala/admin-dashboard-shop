import {FC, useState} from "react";
import {Products} from "../../constants/productsEnum";

interface ProductInfo {
    productId?: Products;
    productName?: string;
    stockQuantity?: number;
}

interface InputProps {
    product: ProductInfo;
    disabled: boolean;
    fieldStyle: string;
}


const InputStock: FC<InputProps> = ({product, disabled, fieldStyle}) => {
    const [field, setField] = useState(product.stockQuantity)

    return (
        <input
            type="number"
            className={fieldStyle}
            value={field}
            onChange={e => setField(+e.target.value)}
            disabled={disabled}
        />
    )
}

export default InputStock;