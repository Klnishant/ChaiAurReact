import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Hello Dreamer",
            completed:false,
        }
    ],

    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{},

});

export const Provider = ToDoContext.Provider;

export default function useTodo(){
    return useContext(ToDoContext);
}