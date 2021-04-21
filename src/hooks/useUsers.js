import { useEffect, useState } from 'react' 
import { usersApi } from '../api/usersApi'

export const useUsers = () => {

    const [users , setUsers ] = useState([]);

    useEffect(() => {
        getUsers();


    }, [])

    const getUsers = async() =>{
        const resp = await usersApi.get('https://reqres.in/api/users');
        setUsers(resp.data.data);
    }
    return{
        users
    }
}


