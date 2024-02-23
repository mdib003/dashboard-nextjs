'use client'

import { useState } from "react"
import { SelectComponent } from "../commonComponents/Select"
import { CTA } from "../commonComponents/cta"
import { Heading } from "../commonComponents/heading"
import { ImageComponent } from "../commonComponents/image"
import { InputComponent } from "../commonComponents/input"
import { TextComponent } from "../commonComponents/text"
import { fetchProductById } from "@component/app/lib/fetchProduct"
import { TextAreaComponent } from "../commonComponents/textarea"

export const ProductDetailsComponent = ({ product }: any) => {

    const [productData, setProductData] = useState(JSON.parse(product))

    const inputHandler = (e: any) => {
        if (e.target.name === 'status') {
            setProductData({ ...productData, [e.target.name]: e.target.value === 'No' ? 'Deactivated' : 'Active' })
        } else if (e.target.name === 'role') {
            setProductData({ ...productData, [e.target.name]: e.target.value === 'No' ? 'Client' : 'Admin' })
        }
        else {
            setProductData({ ...productData, [e.target.name]: e.target.value })
        }
    }

    const updateproductDetails = async () => {
        await fetchProductById(productData._id, true, productData)
    }

    return (
        <div className="mar-t-16 flex product-details-page">
            <div className="flex flex-col align-center flex-1 box-1">
                <div className="width-160 height-160 mar-b-8 border-radius-6 box-shadow-1 overflow-hidden">
                    <ImageComponent src={productData.img} alt={'ext'} objFit="contain"></ImageComponent>
                </div>
                <Heading text={productData.title} type="h2" align={'text-center'}></Heading>
            </div>
            <div className="flex-4 flex flex-wrap box-2">
                <div className="mar-r-8 mar-b-8 input-box">
                    <TextComponent text={'Product Title'}></TextComponent>
                    <InputComponent placeholder={'title'} inputName={'title'} inputValue={productData.title} onChangeHandler={inputHandler} />
                </div>
                <div className="mar-l-8 mar-b-8  input-box">
                    <TextComponent text={'Stock'}></TextComponent>
                    <InputComponent placeholder={'stock'} inputName={'stock'} inputValue={productData.stock} onChangeHandler={inputHandler} />
                </div>
                <div className="mar-r-8 input-box textarea-box">
                    <TextComponent text={'Description'}></TextComponent>
                    <TextAreaComponent name={'description'} description={productData.description} onChangeHandler={inputHandler} />
                </div>
                <div className="mar-l-8  input-box">
                    <div className="mar-b-8 ">
                        <TextComponent text={'Price'}></TextComponent>
                        <InputComponent placeholder={'price'} inputName={'price'} inputValue={productData.price} onChangeHandler={inputHandler} />
                    </div>
                    <div className="product-input-box-btn">
                        <CTA text={'Edit'} type={'button'} btnClass="tertiary" className="width-full height-60" onClickHandler={updateproductDetails} />
                    </div>
                </div>
            </div>
        </div>
    )
}