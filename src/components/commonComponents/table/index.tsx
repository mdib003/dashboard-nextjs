"use client"

import { deleteUserById } from "@component/app/lib/deleteUser"
import { deleteProductById } from "@component/app/lib/deleteProduct"
import { CTA } from "../cta"
import { ImageComponent } from "../image"

export type UserTableProps = {
    thead: TableHeadProps[],
    tbody: any,
}

export type ProductTableProps = {
    thead: TableHeadProps[],
    tbody: any,
}

interface TableHeadProps {
    theadRow: string[]
}

interface ProductTableBodyProps {
    _id: string
    title: string,
    description: string,
    price: number,
    added: string,
    stock: number,
}

interface UserTableBodyProps {
    _id: string
    name: string,
    email: string,
    createdAt: string,
    role: string,
    status: string,
    img: string,
    alt: string,
}

export const UsersTable = ({ thead, tbody }: UserTableProps) => {

    let tableBody = JSON.parse(tbody)
   
    return (
        <table className="mar-t-16">
            <thead>
                {
                    thead.map((trow, i: number) => {
                        return (
                            <tr key={i}>
                                {trow.theadRow.map((t, j: number) => {
                                    return (
                                        <th key={j}>{t}</th>
                                    )
                                })
                                }
                            </tr>
                        )
                    })
                }
            </thead>
            <tbody>
                {
                    tableBody.map((trow, i: number) => {
                        let date = new Date(trow.createdAt)
                        return (
                            <tr key={i}>
                                <th className="flex align-center "><span className="mar-r-8 width-60 height-60 rounded overflow-hidden block"><ImageComponent src={trow.img} alt={trow.alt} objFit="contain" /></span>{trow.name}</th>
                                <th>{trow.email ? trow.email : ''}</th>
                                <th>{trow.createdAt ? <>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</> : ""}</th>
                                <th>{trow.role ? trow.role : ''}</th>
                                <th>{trow.status ? trow.status : ''}</th>
                                <th>
                                    <CTA type='link' text='View' btnClass="tertiary" className='mar-r-4' href={`/users/${trow._id}`}></CTA>
                                    <CTA type='button' text='Delete' btnClass="danger" onClickHandler={() => deleteUserById(JSON.stringify(trow._id))}></CTA>
                                </th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export const ProductsTable = ({ thead, tbody }: ProductTableProps) => {
    let tableBody = JSON.parse(tbody)
    return (
        <table className="mar-t-16">
            <thead>
                {
                    thead.map((trow, i: number) => {
                        return (
                            <tr key={i}>
                                {trow.theadRow.map((t, j: number) => {
                                    return (
                                        <th key={j}>{t}</th>
                                    )
                                })
                                }
                            </tr>
                        )
                    })
                }
            </thead>
            <tbody>
                {
                    tableBody.map((trow, i: number) => {
                        return (
                            <tr key={i}>
                                <th className="flex align-center "><span className="mar-r-8 width-60 height-60 rounded overflow-hidden block"><ImageComponent src={trow.img} alt={trow.alt} objFit="contain" /></span>{trow.title}</th>
                                {/* <th className="flex align-center ">{trow.title}</th> */}
                                <th>{trow.description.slice(0, 60)}...</th>
                                <th>{trow.price}</th>
                                <th>{trow.stock}</th>
                                <th>
                                    <CTA type='link' text='View' btnClass="tertiary" className='mar-r-4' href={`/products/${trow._id}`}></CTA>
                                    <CTA type='button' text='Delete' btnClass="danger" onClickHandler={() => deleteProductById(JSON.stringify(trow._id))}></CTA>
                                </th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}