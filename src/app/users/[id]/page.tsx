import { fetchUsers } from "@component/app/lib/fetchDatabase"
import { UserDetailsComponent } from "@component/components/userDetailsComponent"

const UserDetailsPage = async () => {    

    const userDetails = await fetchUsers()
    console.log(userDetails)
    return (
        <UserDetailsComponent />
    )
}

export default UserDetailsPage