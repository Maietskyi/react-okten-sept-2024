import {ITodosResponse} from "../models/ITodosResponse.ts";

export const getTodos = async (): Promise<ITodosResponse> => {
   const todosResponseObject= await fetch(import.meta.env.VITE_API_URL)
        .then(res => res.json())
    return todosResponseObject;
}