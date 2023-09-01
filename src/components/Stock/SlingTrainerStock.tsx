import InputStock from "../../components/Stock/InputStock";
import {Products} from "../../constants/productsEnum";
import React, {useState} from "react";
import {getProduct} from "../../utils/fnGetProduct";
import StockTitle from "./StockTitle";

const SlingTrainerStock = () => {
    const fieldStyle = 'input input-bordered input-sm w-11/12 col-span-4'
    const [disableInput, setDisableInput] = useState(true)

    const handleOnEditClick = () => {
        setDisableInput(prevState => !prevState)
    }

    return (
        <>
                <div className="card block my-4 bg-base-100 p-5">
                    <StockTitle title="Sling trainers" setDisableInput={handleOnEditClick} />

                    <div className="grid grid-cols-5 justify-items-center my-4">
                        <h3 className="text-secondary-content/80 justify-self-start font-medium">
                            Sling trainer Allround
                        </h3>
                        <InputStock product={getProduct(Products.SLING_TRAINER_ALLROUND)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    </div>

                    <div className="grid grid-cols-5 justify-items-center my-4">
                        <h3 className="text-secondary-content/80 justify-self-start font-medium">
                            Sling trainer Exclusive
                        </h3>
                        <InputStock product={getProduct(Products.SLING_TRAINER_EXCLUSIVE)} fieldStyle={fieldStyle} disabled={disableInput}/>
                    </div>
                </div>
        </>
    )
}

export default SlingTrainerStock;


