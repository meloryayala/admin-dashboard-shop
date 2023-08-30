import InputStock from "../../components/Stock/InputStock";
import {Products} from "../../utils/productsEnum";
import {getProduct} from "../../utils/fnGetProduct";
import TableTittle from "../lists/TableTittle";
import StockTitle from "./StockTitle";
import {useState} from "react";

const SuitsStock = () => {
    const fieldStyle = 'input input-bordered input-sm w-11/12'
    const [disableInput, setDisableInput] = useState(true)

    const handleOnEditClick = () => {
        setDisableInput(prevState => !prevState)
    }

    return (
        <>
            <div className="card block mt-10 mb-4 bg-base-100 p-5">
                <StockTitle title="EMS Suits" setDisableInput={handleOnEditClick} />

                <div className="container-center p-1">
                    <div className="grid grid-cols-10 justify-items-center">
                        <div></div>
                        <TableTittle spanTitle="XXS" />
                        <TableTittle spanTitle="XS" />
                        <TableTittle spanTitle="S" />
                        <TableTittle spanTitle="M" />
                        <TableTittle spanTitle="L" />
                        <TableTittle spanTitle="XL" />
                        <TableTittle spanTitle="XXL" />
                        <TableTittle spanTitle="3XL" />
                        <TableTittle spanTitle="4XL" />
                    </div>
                </div>

                <div className="grid grid-cols-10 my-4 justify-items-center">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Pro suit
                    </h3>
                    <InputStock product={getProduct(Products.PRO_XXS)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PRO_XS)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PRO_S)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PRO_M)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PRO_L)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PRO_XL)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PRO_XXL)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PRO_3XL)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PRO_4XL)} fieldStyle={fieldStyle} disabled={disableInput}/>
                </div>

                <div className="grid grid-cols-10 my-4 justify-items-center">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Home suit
                    </h3>
                    <InputStock product={getProduct(Products.HOME_XXS)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.HOME_XS)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.HOME_S)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.HOME_M)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.HOME_L)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.HOME_XL)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.HOME_XXL)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.HOME_3XL)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.HOME_4XL)} fieldStyle={fieldStyle} disabled={disableInput}/>
                </div>

                <div className="grid grid-cols-10 my-4 justify-items-center">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Pants suit
                    </h3>
                    <div></div>
                    <InputStock product={getProduct(Products.PANTS_XS)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PANTS_S)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PANTS_M)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PANTS_L)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    <InputStock product={getProduct(Products.PANTS_XL)} fieldStyle={fieldStyle} disabled={disableInput}/>
                </div>
            </div>
        </>
    )
}

export default SuitsStock;