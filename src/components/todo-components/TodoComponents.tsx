import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";


export const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value=>value.json())
            .then((ITodos:ITodo[])=> {
                setTodos(ITodos)
            });
    },[]);
    return (
        <>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </>
    );
};
