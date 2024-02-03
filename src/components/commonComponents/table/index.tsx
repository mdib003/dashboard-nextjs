export type TableProps = {
    thead: TableHeadProps[],
    tbody: TableBodyProps[],
}

interface TableHeadProps {
    theadRow: string[]
}

interface TableBodyProps {
    tbodyRow: string[]
}

export const Table = ({ thead, tbody }: TableProps) => {
    return (
        <table>
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
                                {trow.tbodyRow.map((t, j: number) => {
                                    return (
                                        <th key={j}>{t}</th>
                                    )
                                })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}