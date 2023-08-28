import {PencilSquareIcon as EditIcon} from "@heroicons/react/24/solid";
import InputStock from "../../components/Stock/InputStock";
import {Products} from "./productsEnum";
import React from "react";
import {getProduct} from "../../utils/fnGetProduct";

const SlingTrainerStock = () => {
    const fieldStyle = 'input input-ghost input-sm w-11/12 col-span-4'
    return (
        <>
                <div className=" alert block my-4 bg-base-100 p-5">
                    <div className="flex justify-between mb-2">
                        <h2 className="text-xl font-medium">Sling trainers</h2>
                        <button className="btn btn-ghost">
                            <EditIcon className="h- w-6"/>
                        </button>
                    </div>

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


