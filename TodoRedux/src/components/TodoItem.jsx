import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleComplete, updateTodo } from '../Features/todo/todoSlice';

function TodoItem({todo}) {
    const [todoMsg,setTodo] = useState('');
    const [isTodoEditable,setIsTodoEditable] = useState(false);
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    
    const editTodo = (id)=>{
        dispatch(updateTodo({id:id,msg:todoMsg}));
        console.log(todoMsg);
        setIsTodoEditable(false);
        setTodo('');
    }

    return (
        <>
            <div className='flex items-center justify-center w-full mt-1 pb-1'>
            <div
                        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                        }`}
                        >
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                            checked={todo.completed}
                            onChange={()=>{dispatch(toggleComplete(todo.id))}}
                        />
                        <input
                            type="text"
                            className={`border outline-none w-full bg-transparent rounded-lg ${
                            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                            } ${todo.completed ? "line-through" : ""}`}
                            value={todo.msg}
                            onChange={(e) => setTodo(e.target.value)}
                            readOnly = {!isTodoEditable}
                        />
                            {/* Edit, Save Button */}
                        <button
                            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                            onClick={() => {
                                if (todo.completed) return;

                                if (isTodoEditable) {
                                    editTodo(todo.id);
                                }
                                else setIsTodoEditable((prev)=> !prev);
                            }}
                            disabled={todo.completed}
                        >
                            {isTodoEditable ? "📁" : "✏️"}
                        </button>
                        {/* Delete Todo Button */}
                        <button
                            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            ❌
                        </button>
                        </div>
            </div>
        </>
    );
}

export default TodoItem;
