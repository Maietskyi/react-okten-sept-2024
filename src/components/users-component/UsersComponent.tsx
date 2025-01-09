import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service.ts";

const UsersComponent = () => {
    //   Так постійно рендерить сторінку
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(response  =>{
//       setUsers(response);
//     });
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState<IUser | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers()
            setUsers(users);
        }

        fetchData();
        return () => {
            console.log('done')
        }
    }, []);

    const foo = (item: IUser) => {
        setLoading(item);
    }
    return (
        <div>
                {
                    loading && <div>{JSON.stringify(loading)}</div>
                }
            {
                users.map(user => <UserComponent foo={foo} key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;