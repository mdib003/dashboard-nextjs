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
            {
                (usersData?.users?.length && usersData?.users?.length > 0) ?
                    <UsersTable thead={userTableHeadData} tbody={JSON.stringify(usersData?.users)}></UsersTable> :
                    <div className="mar-t-16 flex align-center not-found-container">
                        <div className="width-full not-found">There are no users. Please click on add new users.</div>
                    </div>
            }
        </div>
    )
}

export default UsersPage