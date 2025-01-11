import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import {ITodosResponse} from "../../models/ITodosResponse.ts";

export const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/todos')
            .then(value=>value.json())
            .then(({todos}:ITodosResponse)=> {
                setTodos(todos)
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
