"use client"

import { useState } from "react"
import { SelectComponent } from "../commonComponents/Select"
import { CTA } from "../commonComponents/cta"
import { InputComponent } from "../commonComponents/input"
import { TextComponent } from "../commonComponents/text"
import { addNewProduct } from "@component/app/lib/addNewProduct"
import { TextAreaComponent } from "../commonComponents/textarea"

export const AddNewProductComponent = () => {
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        price: '',
        img: '',
        stock: '',      
    })

    const [showAlert, setShowAlert] = useState(false)

    const inputHandler = (e: any) => {
        setShowAlert(false)
        if (e.target.name === 'price' || e.target.name === 'stock') {
            setProductData({ ...productData, [e.target.name]: parseInt(e.target.value) })
        }
        else {
            setProductData({ ...productData, [e.target.name]: e.target.value })
        }
    }

    const updateProductDetails = async () => {
        if (!productData.title || !productData.description || !productData.price || !productData.img || !productData.stock) {
            setShowAlert(true)
        } else {
        await addNewProduct(productData)
        }
    }

    return (
        <div className="mar-t-16 position-rel add-new-product">
            {showAlert && <div className="position-absolute width-full text-center show-alert">
                Please enter all fields
            </div>} 
            <div className="mar-t-16 flex product-details-page ">
                <div className="flex-4 flex flex-wrap box-2">
                    <div className="mar-r-8 mar-b-8 input-box">
                        <TextComponent text={'Title'}></TextComponent>
                        <InputComponent placeholder={'title'} inputName={'title'} inputValue={productData.title} onChangeHandler={inputHandler} />
                    </div>
                    <div className="mar-l-8 mar-b-8  input-box">
                        <TextComponent text={'Img Url'}></TextComponent>
                        <InputComponent placeholder={''} inputName={'img'} inputValue={productData.img} onChangeHandler={inputHandler} />
                    </div>
                    <div className="mar-r-8 mar-b-8  input-box">
                        <TextComponent text={'Description'}></TextComponent>
                        <TextAreaComponent name={'description'} description={productData.description} onChangeHandler={inputHandler} />
                    </div>
                    <div className="mar-l-8 mar-b-8  input-box flex flex-wrap">
                    <div className="mar-r-8 mar-b-8  input-box">
                        <TextComponent text={'Price'}></TextComponent>
                        <InputComponent placeholder={''} inputName={'price'} inputValue={productData.price} onChangeHandler={inputHandler} />
                    </div>
                    <div className="mar-l-8 mar-b-8  input-box">
                        <TextComponent text={'Stock'}></TextComponent>
                        <InputComponent placeholder={''} inputName={'stock'} inputValue={productData.stock} onChangeHandler={inputHandler} />
                    </div>                 
                    <div className="mar-r-8 width-full add-new-product-cta">
                        <CTA text={'Edit'} type={'button'} btnClass="tertiary" className="width-full height-60" onClickHandler={updateProductDetails} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}