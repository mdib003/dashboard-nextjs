'use client'

import { useState } from "react"
import { SelectComponent } from "../commonComponents/Select"
import { CTA } from "../commonComponents/cta"
import { Heading } from "../commonComponents/heading"
import { ImageComponent } from "../commonComponents/image"
import { InputComponent } from "../commonComponents/input"
import { TextComponent } from "../commonComponents/text"
import { fetchUserById } from "@component/app/lib/fetchUser"

export const UserDetailsComponent = ({ user }: any) => {

    const [userData, setUserData] = useState(JSON.parse(user))

    const inputHandler = (e: any) => {
        if (e.target.name === 'status') {
            setUserData({ ...userData, [e.target.name]: e.target.value === 'No' ? 'Deactivated' : 'Active' })
        } else if (e.target.name === 'role') {
            setUserData({ ...userData, [e.target.name]: e.target.value === 'No' ? 'Client' : 'Admin' })
        }
        else {
            setUserData({ ...userData, [e.target.name]: e.target.value })
        }
    }

    const updateUserDetails = async () => {
        await fetchUserById(userData._id, true, userData)
    }

    return (
        <div className="mar-t-16 flex user-details-page ">
            <div className="flex flex-col align-center flex-1 box-1">
                <div className="width-160 height-160 mar-b-8 border-radius-6 box-shadow-1 overflow-hidden">
                    <ImageComponent src={userData.img} alt={'ext'} objFit="contain"></ImageComponent>
                </div>
                <Heading text={userData.name} type="h2" align={'text-center'}></Heading>
            </div>
            <div className="flex-4 flex flex-wrap box-2">
                <div className="mar-r-8 mar-b-8 input-box">
                    <TextComponent text={'Name'}></TextComponent>
                    <InputComponent placeholder={'name'} inputName={'name'} inputValue={userData.name} onChangeHandler={inputHandler} />
                </div>
                <div className="mar-l-8 mar-b-8  input-box">
                    <TextComponent text={'Contact'}></TextComponent>
                    <InputComponent placeholder={'contact'} inputName={'contact'} inputValue={userData.contact} onChangeHandler={inputHandler} />
                </div>
                <div className="mar-r-8 mar-b-8  input-box">
                    <TextComponent text={'Email'}></TextComponent>
                    <InputComponent placeholder={'email'} inputName={'email'} inputValue={userData.email} onChangeHandler={inputHandler} />
                </div>
                <div className="mar-l-8 mar-b-8  input-box">
                    <TextComponent text={'Password'}></TextComponent>
                    <InputComponent placeholder={'password'} inputName={'password'} inputValue={userData.password} onChangeHandler={inputHandler} />
                </div>

                <div className="mar-r-8 mar-b-8  input-box">
                    <TextComponent text={'Address'}></TextComponent>
                    <InputComponent placeholder={'address'} inputName={'address'} inputValue={userData.address} onChangeHandler={inputHandler} />
                </div>
                <div className="mar-l-8 mar-b-8  input-box">
                    <TextComponent text={'Is Admin'}></TextComponent>
                    <SelectComponent options={['Yes', 'No']} cb={inputHandler} defaultValue={userData.role.toLowerCase() === 'admin' ? 'Yes' : 'No'} name={'role'} />
                </div>
                <div className="mar-r-8 mar-b-8  input-box">
                    <TextComponent text={'Is Active'}></TextComponent>
                    <SelectComponent options={['Yes', 'No']} cb={inputHandler} defaultValue={userData.status.toLowerCase() === 'active' ? 'Yes' : 'No'} name={'status'} />
                </div>
                <div className="mar-l-8 input-box input-box-btn">
                    <CTA text={'Edit'} type={'button'} btnClass="tertiary" className="width-full height-60" onClickHandler={updateUserDetails} />
                </div>
            </div>
        </div>
    )
}