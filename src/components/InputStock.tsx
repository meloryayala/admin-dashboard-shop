import {FC, useState} from "react";
import {Products} from "../pages/Stock/productsEnum";
import {stock} from "../data/stock";

interface ProductInfo {
    productId?: Products;
    productName?: string;
    stockQuantity?: number;
}

interface InputProps {
    product: ProductInfo;
    disabled?: boolean;
}


const InputStock: FC<InputProps> = ({product, disabled}) => {
    const fieldStyle = 'input input-ghost input-sm w-10/12 max-w-xs'
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