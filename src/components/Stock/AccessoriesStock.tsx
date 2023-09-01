import InputStock from "../../components/Stock/InputStock";
import {Products} from "../../constants/productsEnum";
import React, {useState} from "react";
import {getProduct} from "../../utils/fnGetProduct";
import StockTitle from "./StockTitle";

const AccessoriesStock = () => {
    const fieldStyle = 'input input-bordered input-sm w-11/12 col-span-4'
    const [disableInput, setDisableInput] = useState(true)

    const handleOnEditClick = () => {
        setDisableInput(prevState => !prevState)
    }

    return (
        <>
            <div className="card block my-4 bg-base-100 p-5">
                <StockTitle title="Accessories" setDisableInput={handleOnEditClick} />

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Belt EMS
                    </h3>
                    <InputStock product={getProduct(Products.BELT_EMS)} fieldStyle={fieldStyle} disabled={disableInput}/>
                </div>

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Fitness band 25cm
                    </h3>
                    <InputStock product={getProduct(Products.FITNESS_BAND_25)} fieldStyle={fieldStyle} disabled={disableInput}/>
                </div>

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Fitness band 35cm
                    </h3>
                    <InputStock product={getProduct(Products.FITNESS_BAND_35)} fieldStyle={fieldStyle} disabled={disableInput}/>
                </div>

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Carabiner
                    </h3>
                    <InputStock product={getProduct(Products.CARABINER)} fieldStyle={fieldStyle} disabled={disableInput}/>
                </div>

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Fastening band
                    </h3>
                    <InputStock product={getProduct(Products.FASTENING_BAND)} fieldStyle={fieldStyle} disabled={disableInput}/>
                </div>

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Roof mounting
                    </h3>
                    <InputStock product={getProduct(Products.ROOF_MOUNTING)} fieldStyle={fieldStyle} disabled={disableInput}/>
                </div>
            </div>
        </>
    )
}

export default AccessoriesStock;


