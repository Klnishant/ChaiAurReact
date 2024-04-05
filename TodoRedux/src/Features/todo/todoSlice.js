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
            const {id,msg} = action.payload;
            console.log(id);
            console.log(msg);
            const todo = state.todos.map((todo)=>(todo.id));
            console.log(todo);

            if (todo) {
                todo.msg = msg;
            }
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