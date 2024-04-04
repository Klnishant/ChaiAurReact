import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleComplete, updateTodo } from '../Features/todo/todoSlice';

function TodoItem() {
    const [todo,setTodo] = useState('');
    const [isTodoEditable,setIsTodoEditable] = useState(false);
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    console.log(todos[todos.length-1].msg);

    const editTodo = ()=>{
        dispatch(updateTodo(todos.id));
        setIsTodoEditable(false);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todos.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todos[todos.length-1].completed}
                onChange={()=>{dispatch(toggleComplete(todos[todos.length-1].id))}}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todos.msg}
                onChange={(e) => dispatch(updateTodo(e.target.value))}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeTodo(todos.id))}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
