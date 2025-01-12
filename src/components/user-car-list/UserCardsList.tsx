import {FC} from "react";
import {useUserCardsLists} from "./useUserCardsList.ts";

interface Props {
    listLength: number;
}

export const UserCardsList: FC<Props> = ({listLength}) => {
    // useUserCardsList({listLength});
    const {users, loading} = useUserCardsLists({listLength})

    if (!users && loading) return <div>loading</div>

    if (!users) return <div>Data is not fount</div>;

    return (
        <div>
            {users
                .map((item) => (
                    <div key={item.id}>{item.id} ----- {item.name}</div>
                ))}
        </div>
    );
};

