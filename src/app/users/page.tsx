import { Table } from "@component/components/commonComponents/table"

const userTableHeadData = [
    {
        theadRow: ['Name','Email','Created','Role','Status']
    }
]

const userTableBodyData = [
    {
        tbodyRow: [
            'Firt Name', 'test@gmail.com', 'Nov 24 2024', 'Client', 'Active'
        ]
    },
    {
        tbodyRow: [
            'Firt Name', 'test@gmail.com', 'Nov 24 2024', 'Client', 'Active'
        ]
    },
    {
        tbodyRow: [
            'Firt Name', 'test@gmail.com', 'Nov 24 2024', 'Client', 'Active'
        ]
    },
    {
        tbodyRow: [
            'Firt Name', 'test@gmail.com', 'Nov 24 2024', 'Client', 'Active'
        ]
    },

]


const UsersPage = () => {
    return (
        <div>
            <Table thead={userTableHeadData} tbody={userTableBodyData}></Table>
        </div>
    )
}

export default UsersPage