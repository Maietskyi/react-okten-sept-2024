import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {getAllTodos} from "../../services/api.service.ts";


export const TodoComponents = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(()=>{
        getAllTodos().then(({todos})=>setTodos(todos))
    },[]);
    return (
        <>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </>
    );
};
