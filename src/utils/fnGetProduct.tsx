import {stock} from "../data/stock";

export const getProduct = (id: number) => {
    const product = stock.find(p => p.productId === id);
    if (!product) {
        throw new Error(`no product with id ${id} found.`);
    }
    return product;
}