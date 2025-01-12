import {useEffect, useState} from "react";

interface UserCardsListProps {
    listLength: number;
}

interface Output {
    users: never[] | number;
    loading: boolean;
}

// export const useUserCardsList = ({listLength}: UserCardsListProps) => {
//     useEffect(() => {
//         console.log('update')
//         return () => {
//             console.log('unsubscribe')
//         }
//     }, [listLength]);
// }

export const useUserCardsLists = ({listLength}: UserCardsListProps) => {
    const [users, setUsers] = useState<never[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json()
                .then(json => setUsers(json))
                .finally(() => setLoading(false))
                .catch((e) => console.error(e)));
        return () => {
            setUsers(null);
            setLoading(false);
        }
    }, []);
    return {users, loading};
};