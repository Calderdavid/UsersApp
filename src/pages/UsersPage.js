import { React} from 'react'
import{ useUsers } from '../hooks/useUsers'
import { UserRow } from '../components/UserRow'



const UsersPage = () => {

    const { users } = useUsers();





    return (
        <div className="mt-5">
            <h1>Users</h1>
            <hr />

            <table className = 'table'>                
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => <UserRow 
                            key={ user.email }
                            user={ user }>

                            </UserRow>)
                    }


                </tbody>
            </table>



        </div>
    )
}

export default UsersPage
