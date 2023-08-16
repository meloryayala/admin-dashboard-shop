import React, {FC, JSX} from "react";
import Header from "../../components/Header";
import {PencilSquareIcon as EditIcon} from "@heroicons/react/24/solid";
import InputStock from "../../components/InputStock";
import {stock} from "../../data/stock";
import {Products} from "./productsEnum";

interface StockProps {
    title: string;
    pageIcon: JSX.Element;
}

const Stock: FC<StockProps> = ({title, pageIcon}) => {

    const getProduct = (id: number) => {
        const product = stock.find(p => p.productId === id);
        if (!product) {
            throw new Error(`no product with id ${id} found.`);
        }
        return product;
    }

    return (
        <>
            <Header title={title} pageIcon={pageIcon}/>

            <div className=" alert block mt-10 mb-4 bg-base-100 p-5">
                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-medium">EMS suits</h2>
                    <button className="btn btn-ghost">
                        <EditIcon className="h- w-6"/>
                    </button>
                </div>

                <div className="container-center mt-4 p-1">
                    <div className="grid grid-cols-11 justify-items-center">
                        <h4 className="text-sm font-medium text-neutral-400 col-span-2 justify-self-start"></h4>
                        <h4 className="text-sm font-medium text-neutral-400">XXS</h4>
                        <h4 className="text-sm font-medium text-neutral-400">XS</h4>
                        <h4 className="text-sm font-medium text-neutral-400">S</h4>
                        <h4 className="text-sm font-medium text-neutral-400">M</h4>
                        <h4 className="text-sm font-medium text-neutral-400">L</h4>
                        <h4 className="text-sm font-medium text-neutral-400">XL</h4>
                        <h4 className="text-sm font-medium text-neutral-400">XXL</h4>
                        <h4 className="text-sm font-medium text-neutral-400">3XL</h4>
                        <h4 className="text-sm font-medium text-neutral-400">4XL</h4>
                    </div>
                </div>

                <div className="grid grid-cols-11 my-6 justify-items-center">
                    <div className="col-span-2 justify-self-start">
                        <h3 className="font-medium">Pro suit</h3>
                    </div>
                    <InputStock product={getProduct(Products.PRO_XXS)} disabled />
                    <InputStock product={getProduct(Products.PRO_XS)} disabled />
                    <InputStock product={getProduct(Products.PRO_S)} disabled />
                    <InputStock product={getProduct(Products.PRO_M)} disabled />
                    <InputStock product={getProduct(Products.PRO_L)} disabled />
                    <InputStock product={getProduct(Products.PRO_XL)} disabled />
                    <InputStock product={getProduct(Products.PRO_XXL)} disabled />
                    <InputStock product={getProduct(Products.PRO_3XL)} disabled />
                    <InputStock product={getProduct(Products.PRO_4XL)} disabled />
                </div>

                <div className="grid grid-cols-11 my-6 justify-items-center">
                    <div className="col-span-2 justify-self-start">
                        <h3 className="font-medium">Home suit</h3>
                    </div>
                    <InputStock product={getProduct(Products.HOME_XXS)} disabled />
                    <InputStock product={getProduct(Products.HOME_XS)} disabled />
                    <InputStock product={getProduct(Products.HOME_S)} disabled />
                    <InputStock product={getProduct(Products.HOME_M)} disabled />
                    <InputStock product={getProduct(Products.HOME_L)} disabled />
                    <InputStock product={getProduct(Products.HOME_XL)} disabled />
                    <InputStock product={getProduct(Products.HOME_XXL)} disabled />
                    <InputStock product={getProduct(Products.HOME_3XL)} disabled />
                    <InputStock product={getProduct(Products.HOME_4XL)} disabled />
                </div>

                <div className="grid grid-cols-11 my-6 justify-items-center">
                    <div className="col-span-2 justify-self-start">
                        <h3 className="font-medium">Pants suit</h3>
                    </div>
                    <div></div>
                    <InputStock product={getProduct(Products.PANTS_XS)} disabled />
                    <InputStock product={getProduct(Products.PANTS_S)} disabled />
                    <InputStock product={getProduct(Products.PANTS_M)} disabled />
                    <InputStock product={getProduct(Products.PANTS_L)} disabled />
                    <InputStock product={getProduct(Products.PANTS_XL)} disabled />
                </div>
            </div>
        </>
    )
};

export default Stock;