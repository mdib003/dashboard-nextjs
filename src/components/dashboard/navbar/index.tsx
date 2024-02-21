"use client"

import { CTA } from "@component/components/commonComponents/cta"
import { InputComponent } from "@component/components/commonComponents/input"


export const Navbar = () => {
    return (
        <div className="flex justify-between dashboard-navbar">
            <div className="width-160">
            <InputComponent placeholder="search" inputValue={''} inputName="search" onChangeHandler={() => console.log('changed')}/>
            </div>
             <CTA type='link' text={'Add New'} btnClass="primary" href="/users/add"></CTA>
        </div>
    )
}