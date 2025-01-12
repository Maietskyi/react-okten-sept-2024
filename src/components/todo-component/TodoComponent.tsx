import {ITodo} from "../../models/ITodo.ts";
import './TodoComponent.css'

interface TodoComponentProps{
    item:ITodo;
}
export const TodoComponent =({item}:TodoComponentProps)=>{
    return (
        <div>
            <h3 className={item.completed? 'complete' : 'none-complete'}>{item.todo}</h3>
        </div>
    );
};
