"use client"

import { CTA } from "@component/components/commonComponents/cta"
import { InputComponent } from "@component/components/commonComponents/input"
import { usePathname } from "next/navigation"


export const Navbar = () => {

    const pathname = usePathname()

    return (
        <div className="flex justify-between dashboard-navbar">
            <div className="width-160">
                <InputComponent placeholder="search" inputValue={''} inputName="search" onChangeHandler={() => console.log('changed')} />
            </div>
            {
                ((pathname === '/products') || (pathname === '/users')) && <CTA type='link' text={`Add new ${pathname.slice(1)}`} btnClass="primary" href={`${pathname}/add`}></CTA>
            }
        </div>
    )
}