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

    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response);
            });
        return () => {
            console.log('done')
        }
    }, [])
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;