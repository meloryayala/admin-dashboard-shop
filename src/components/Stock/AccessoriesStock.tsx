import {PencilSquareIcon as EditIcon} from "@heroicons/react/24/solid";
import InputStock from "../../components/Stock/InputStock";
import {Products} from "./productsEnum";
import React from "react";
import {getProduct} from "./fnGetProduct";

const AccessoriesStock = () => {
    const fieldStyle = 'input input-ghost input-sm w-11/12 col-span-4'
    return (
        <>
            <div className=" alert block my-4 bg-base-100 p-5">
                <div className="flex justify-between mb-2">
                    <h2 className="text-xl font-medium">Accessories</h2>
                    <button className="btn btn-ghost">
                        <EditIcon className="h- w-6"/>
                    </button>
                </div>

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Belt EMS
                    </h3>
                    <InputStock product={getProduct(Products.BELT_EMS)} fieldStyle={fieldStyle} disabled/>
                </div>

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Fitness band 25cm
                    </h3>
                    <InputStock product={getProduct(Products.FITNESS_BAND_25)} fieldStyle={fieldStyle} disabled/>
                </div>

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Fitness band 35cm
                    </h3>
                    <InputStock product={getProduct(Products.FITNESS_BAND_35)} fieldStyle={fieldStyle} disabled/>
                </div>

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Carabiner
                    </h3>
                    <InputStock product={getProduct(Products.CARABINER)} fieldStyle={fieldStyle} disabled/>
                </div>

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Fastening band
                    </h3>
                    <InputStock product={getProduct(Products.FASTENING_BAND)} fieldStyle={fieldStyle} disabled/>
                </div>

                <div className="grid grid-cols-5 justify-items-center my-4">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Roof mounting
                    </h3>
                    <InputStock product={getProduct(Products.ROOF_MOUNTING)} fieldStyle={fieldStyle} disabled/>
                </div>
            </div>
        </>
    )
}

export default AccessoriesStock;


