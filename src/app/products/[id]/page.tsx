"use client"

import { Heading } from "@component/components/commonComponents/heading"
import { ImageComponent } from "@component/components/commonComponents/image"
import { InputComponent } from "@component/components/commonComponents/input"

const ProductDetailsPage = () => {

    const inputHandler = (e: any) => {

    }

    return (
        <div className="mar-t-16 flex user-details-page ">
            <div className="flex flex-col align-center flex-1 box-1">
                <div className="width-160 height-160 rounded overflow-hidden">
                    <ImageComponent src={'https://cdn-icons-png.flaticon.com/512/219/219969.png'} alt={'ext'} objFit="contain"></ImageComponent>
                </div>
                <Heading text={'Heading'} type="h2"></Heading>
            </div>
            <div className="flex-4 flex flex-wrap box-2">
                <div className="mar-r-8 mar-b-8 input-box">
                    <InputComponent placeholder={'userde'} inputName={'check'} inputValue={''} onChangeHandler={inputHandler} />
                </div>
                <div className="mar-l-8 mar-b-8  input-box">
                    <InputComponent placeholder={'NEW'} inputName={'check'} inputValue={0} onChangeHandler={inputHandler} />
                </div>
                <div className="mar-r-8 mar-b-8  input-box">
                    <InputComponent placeholder={'PLEASE'} inputName={'check'} inputValue={''} onChangeHandler={inputHandler} />
                </div>
                <div className="mar-l-8 mar-b-8  input-box">
                    <InputComponent placeholder={'PLEASE'} inputName={'check'} inputValue={''} onChangeHandler={inputHandler} />
                </div>              
            </div>
        </div>
    )
}

export default ProductDetailsPage