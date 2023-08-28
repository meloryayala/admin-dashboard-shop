import InputStock from "../../components/Stock/InputStock";
import {Products} from "../../utils/productsEnum";
import React from "react";
import {getProduct} from "../../utils/fnGetProduct";
import StockTitle from "./StockTitle";

const SlingTrainerStock = () => {
    const fieldStyle = 'input input-ghost input-sm w-11/12 col-span-4'
    return (
        <>
                <div className="card block my-4 bg-base-100 p-5">
                    <StockTitle title="Sling trainers" />

                    <div className="grid grid-cols-5 justify-items-center my-4">
                        <h3 className="text-secondary-content/80 justify-self-start font-medium">
                            Sling trainer Allround
                        </h3>
                        <InputStock product={getProduct(Products.SLING_TRAINER_ALLROUND)} fieldStyle={fieldStyle} disabled/>
                    </div>

                    <div className="grid grid-cols-5 justify-items-center my-4">
                        <h3 className="text-secondary-content/80 justify-self-start font-medium">
                            Sling trainer Exclusive
                        </h3>
                        <InputStock product={getProduct(Products.SLING_TRAINER_EXCLUSIVE)} fieldStyle={fieldStyle} disabled/>
                    </div>
                </div>
        </>
    )
}

export default SlingTrainerStock;


