import {PencilSquareIcon as EditIcon} from "@heroicons/react/24/solid";
import InputStock from "../../components/Stock/InputStock";
import {Products} from "./productsEnum";
import {getProduct} from "../../utils/fnGetProduct";
import TableTittle from "../Order/TableTittle";

const SuitsStock = () => {
    const fieldStyle = 'input input-ghost input-sm w-10/12 col-span-2'

    return (
        <>
            <div className=" alert block my-4 bg-base-100 p-5">
                <div className="flex justify-between">
                    <h2 className="text-xl font-medium">Pull up bars</h2>
                    <button className="btn btn-ghost">
                        <EditIcon className="h- w-6"/>
                    </button>
                </div>

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


