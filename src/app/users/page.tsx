import { UsersTable } from "@component/components/commonComponents/table"

const userTableHeadData = [
    {
        theadRow: ['Name', 'Email', 'Created', 'Role', 'Status']
    }
]

const userTableBodyData = [

    {
        name: 'FirstName', email: 'test@example.com', createdAt: 'Nov 24 2015', role: 'Client', status: 'active', src: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png', alt: 'user image'
    },
    {
        name: 'FirstName', email: 'test@example.com', createdAt: 'Nov 24 2015', role: 'Client', status: 'active', src: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png', alt: 'user image'
    },
    {
        name: 'FirstName', email: 'test@example.com', createdAt: 'Nov 24 2015', role: 'Client', status: 'active', src: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png', alt: 'user image'
    },
    {
        name: 'FirstName', email: 'test@example.com', createdAt: 'Nov 24 2015', role: 'Client', status: 'active', src: 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png', alt: 'user image'
    },

]


const UsersPage = () => {
    return (
        <div>
            <UsersTable thead={userTableHeadData} tbody={userTableBodyData}></UsersTable>
        </div>
    )
}

export default UsersPage