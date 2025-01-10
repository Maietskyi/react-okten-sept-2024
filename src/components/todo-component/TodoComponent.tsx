import {ITodo} from "../../models/ITodo.ts";
import {FC} from "react";

type TodoPropType = {
    item:ITodo;
    foo:(id:ITodo)=>void
}

export const TodoComponent:FC<TodoPropType>=({item,foo})=>{
    return(
        <>
    <div>{item.id}</div>
    <button onClick={()=>foo(item)}>
        Details
    </button>
        </>
    );
};