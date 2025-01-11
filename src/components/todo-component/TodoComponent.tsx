import {ITodo} from "../../models/ITodo.ts";
import {FC} from "react";
import './TodoComponent.css'

type TodoPropType = {
    item:ITodo;
    foo:(id:ITodo)=>void
}

export const TodoComponent:FC<TodoPropType>=({item,foo})=>{
    return(
        <>
    <h2 className={item.completed? 'complete' : 'none-complete'}>{item.id}</h2>
    <button onClick={()=>foo(item)}>
        Details
    </button>
        </>
    );
};