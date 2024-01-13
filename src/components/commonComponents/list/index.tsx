
export type ListProps = {
    listItems: ListItemsProps[]
}

interface ListItemsProps {
    children: React.ReactNode,
    listStyleType?: 'list-style-none' | 'list-style-disc',
    className?: string
}

export const List = ({ listItems }: ListProps) => {
    return (
        <ul>
            {
                listItems.map(({children, listStyleType = 'list-style-none', className = ''}: ListItemsProps) => {
                    return (
                        <li className={`${listStyleType} ${className}`}>
                            {children}
                        </li>
                    )
                }
                )
            }
        </ul>
    )
}