import {IModelSimpson} from "../../models/IModelSimpson.ts";
import {ReactNode} from "react";

interface CharacterComponentProps {
    item: IModelSimpson;
    children: ReactNode;
}

export const CharacterComponent =({item,children}: CharacterComponentProps) => {
    return (
        <div className='w-280 border-2 rounded-3xl bg-amber-50 m-4 font-serif'>
            <h2  className='text-2xl font-medium'>{item.name} {item.surname}</h2>
            <img className='inline' src={item.photo} alt={item.name}/>
            <h5>Age {item.age}</h5>
            <p>{children}</p>
        </div>
    )
}