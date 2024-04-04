import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
    todos:[{id:1,msg:"hello world",completed:false}],
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                msg:action.payload,
                completed:false
            }
            state.todos.push(todo);
        },
        updateTodo: (state,action)=>{
            state.todos.map((todo)=>(todo.id,{...todo,msg:action.payload}));
        },
        toggleComplete: (state,action)=>{
            const todo = state.todos.find(todo=>todo.id==action.payload);
            console.log(todo);
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        removeTodo: (state,action)=>{
           state.todos = state.todos.filter((todo)=> todo.id != action.payload);
        }
    }
});

export const {addTodo,updateTodo,toggleComplete,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;