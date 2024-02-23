import { fetchUserById } from "@component/app/lib/fetchUser"
import { UserDetailsComponent } from "@component/components/userDetailsComponent"

const UserDetailsPage = async ({ params }: any) => {

    const { id } = params
    const user = await fetchUserById(id)

    return (
        <>
            {user ? <UserDetailsComponent user={JSON.stringify(user)} /> : <div className="mar-t-16 flex align-center not-found-container"><div className="width-full not-found">User Does Not Exist</div></div>}
        </>
    )
}

export default UserDetailsPage