import InputStock from "../../components/Stock/InputStock";
import {Products} from "../../utils/productsEnum";
import {getProduct} from "../../utils/fnGetProduct";
import TableTittle from "../Order/TableTittle";
import StockTitle from "./StockTitle";

const SuitsStock = () => {
    const fieldStyle = 'input input-ghost input-sm w-10/12 col-span-2'

    return (
        <>
            <div className="card block my-4 bg-base-100 p-5">
                <StockTitle title="Pull up bars" />

                <div className="container-center p-1">
                    <div className="grid grid-cols-5 justify-items-center">
                        <div></div>
                        <TableTittle spanTitle="60 cm" isColSpan="col-span-2" />
                        <TableTittle spanTitle="100 cm" isColSpan="col-span-2" />
                    </div>
                </div>

                <div className="grid grid-cols-5 my-4 justify-items-center">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Pull up Natur bar
                    </h3>
                    <InputStock product={getProduct(Products.PULL_UP_BAR_NATUR_60)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PULL_UP_BAR_NATUR_100)} fieldStyle={fieldStyle} disabled/>
                </div>

                <div className="grid grid-cols-5 my-4 justify-items-center">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Pull up Oil bar
                    </h3>
                    <InputStock product={getProduct(Products.PULL_UP_BAR_OIL_60)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PULL_UP_BAR_OIL_100)} fieldStyle={fieldStyle} disabled/>
                </div>
            </div>
        </>
    )
}

export default SuitsStock;


