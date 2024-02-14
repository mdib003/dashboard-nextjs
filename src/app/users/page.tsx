import { UsersTable } from "@component/components/commonComponents/table"
import { fetchUsers } from "../lib/fetchDatabase"

const userTableHeadData = [
    {
        theadRow: ['Name', 'Email', 'Created', 'Role', 'Status', 'Action']
    }
]

const UsersPage = async () => {
    const usersData = await fetchUsers()    
    return (
        <div>
            <UsersTable thead={userTableHeadData} tbody={usersData?.users}></UsersTable>
        </div>
    )
}

export default UsersPage