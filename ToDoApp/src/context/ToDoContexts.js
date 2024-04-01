import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    Todo:[
        {
            id:1,
            msg:"Hello Dreamer",
            completed:false,
        }
    ],

    addTodo:()=>{},
    deleteTodo:()=>{},
    updateTodo:()=>{},
    toggleComplete:()=>{},

});

export const Provider = ToDoContext.Provider;

export default function useTodo(){
    return useContext(ToDoContext);
}