import {PencilSquareIcon as EditIcon} from "@heroicons/react/24/solid";
import InputStock from "../../components/Stock/InputStock";
import {Products} from "./productsEnum";
import {getProduct} from "./fnGetProduct";

const SuitsStock = () => {
    const fieldStyle = 'input input-ghost input-sm w-11/12'

    return (
        <>
            <div className=" alert block mt-10 mb-4 bg-base-100 p-5">
                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-medium">EMS suits</h2>
                    <button className="btn btn-ghost">
                        <EditIcon className="h- w-6"/>
                    </button>
                </div>

                <div className="container-centerp-1">
                    <div className="grid grid-cols-10 justify-items-center">
                        <div></div>
                        <h4 className="text-sm font-medium text-secondary-content/50">XXS</h4>
                        <h4 className="text-sm font-medium text-secondary-content/50">XS</h4>
                        <h4 className="text-sm font-medium text-secondary-content/50">S</h4>
                        <h4 className="text-sm font-medium text-secondary-content/50">M</h4>
                        <h4 className="text-sm font-medium text-secondary-content/50">L</h4>
                        <h4 className="text-sm font-medium text-secondary-content/50">XL</h4>
                        <h4 className="text-sm font-medium text-secondary-content/50">XXL</h4>
                        <h4 className="text-sm font-medium text-secondary-content/50">3XL</h4>
                        <h4 className="text-sm font-medium text-secondary-content/50">4XL</h4>
                    </div>
                </div>

                <div className="grid grid-cols-10 my-4 justify-items-center">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Pro suit
                    </h3>
                    <InputStock product={getProduct(Products.PRO_XXS)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PRO_XS)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PRO_S)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PRO_M)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PRO_L)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PRO_XL)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PRO_XXL)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PRO_3XL)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PRO_4XL)} fieldStyle={fieldStyle} disabled/>
                </div>

                <div className="grid grid-cols-10 my-4 justify-items-center">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Home suit
                    </h3>
                    <InputStock product={getProduct(Products.HOME_XXS)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.HOME_XS)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.HOME_S)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.HOME_M)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.HOME_L)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.HOME_XL)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.HOME_XXL)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.HOME_3XL)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.HOME_4XL)} fieldStyle={fieldStyle} disabled/>
                </div>

                <div className="grid grid-cols-10 my-4 justify-items-center">
                    <h3 className="text-secondary-content/80 justify-self-start font-medium">
                        Pants suit
                    </h3>
                    <div></div>
                    <InputStock product={getProduct(Products.PANTS_XS)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PANTS_S)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PANTS_M)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PANTS_L)} fieldStyle={fieldStyle} disabled/>
                    <InputStock product={getProduct(Products.PANTS_XL)} fieldStyle={fieldStyle} disabled/>
                </div>
            </div>
        </>
    )
}

export default SuitsStock;