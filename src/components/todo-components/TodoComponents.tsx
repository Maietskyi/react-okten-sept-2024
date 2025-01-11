import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {getTodos} from "../../services/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";


export const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [loading, setLoading] = useState<ITodo | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
            getTodos().then(({todos})=>setTodos(todos));
        }
        fetchData();
    },[]);
    const foo = (item:ITodo)=>{
        setLoading(item)
    }
    return (
        <div>
            {
                loading&&<div>{JSON.stringify(loading)}</div>
            }
            {
                todos.map(todo=><TodoComponent foo={foo} key={todo.id} item={todo}/>)
            }
        </div>
    )

}