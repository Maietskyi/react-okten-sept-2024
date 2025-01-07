import {FC} from 'react';
import {ISimpson} from "../../models/ISimpson.ts";

type MyPropsType = {
    simpson:ISimpson;
}

const MySimpson:FC<MyPropsType> = ({simpson}) => {
    return (
        <div>
            <h2>{simpson.name} {simpson.surname}</h2>
            <p>{simpson.info}</p>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>
    );
};

export default MySimpson;