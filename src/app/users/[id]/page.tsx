import { fetchUserById } from "@component/app/lib/fetchUser"
import { UserDetailsComponent } from "@component/components/userDetailsComponent"

const UserDetailsPage = async ({ params }: any) => {

    const { id } = params
    const user = await fetchUserById(id)
   
    return (
        <UserDetailsComponent user={JSON.stringify(user)}/>
    )
}

export default UserDetailsPage