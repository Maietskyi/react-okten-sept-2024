import {FC} from 'react';
import {addCount} from "./utils.ts";

export const Wraper:FC = () => {
    addCount(3)
    return (
        <div>

        </div>
    );
};

