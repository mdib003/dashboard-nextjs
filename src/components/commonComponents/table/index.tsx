import { Button } from "../button"
import { ImageComponent } from "../image"

export type UserTableProps = {
    thead: TableHeadProps[],
    tbody: UserTableBodyProps[],
}

export type ProductTableProps = {
    thead: TableHeadProps[],
    tbody: ProductTableBodyProps[],
}

interface TableHeadProps {
    theadRow: string[]
}

interface ProductTableBodyProps {
    name: string,
    description: string,
    price: number,
    added: string,
    stock: number,   
}

interface UserTableBodyProps {
    name: string,
    email: string,
    createdAt: string,
    role: string,
    status: string,
    src: string,
    alt: string,
}

export const UsersTable = ({ thead, tbody }: UserTableProps) => {
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
                    tbody.map((trow, i: number) => {                       
                        return (
                            <tr key={i}>
                                <th className="flex align-center "><span className="mar-r-8 width-60 height-60 rounded overflow-hidden block"><ImageComponent src={trow.src} alt={trow.alt} objFit="contain" /></span>{trow.name}</th>
                                <th>{trow.email}</th>
                                <th>{trow.createdAt}</th>
                                <th>{trow.role}</th>
                                <th>{trow.status}</th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export const ProductsTable = ({ thead, tbody }: ProductTableProps) => {
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
                    tbody.map((trow, i: number) => {                        
                        return (
                            <tr key={i}>
                                <th className="flex align-center ">{trow.name}</th>
                                <th>{trow.description.slice(0, 60)}...</th>
                                <th>{trow.price}</th>
                                <th>{trow.added}</th>
                                <th>{trow.stock}</th>
                                <th>
                                <Button type='link' text='View' btnClass="tertiary" className='mar-r-4'></Button>
                                <Button type='button' text='Delete' btnClass="danger"></Button>
                                </th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}