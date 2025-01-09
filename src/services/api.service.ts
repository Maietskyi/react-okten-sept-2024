import {IUser} from "../models/IUser.ts";


export const getUsers = async (): Promise<IUser[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());;
}

export const getUser = async (id: string): Promise<IUser> => {
    return await fetch('https://jsonplaceholder.typicode.com/users' + id)
        .then(value => value.json());;
}