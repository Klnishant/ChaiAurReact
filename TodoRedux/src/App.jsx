import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos)

  return (
    <>
      <div className='bg-gray-600 h-full'>
        <div>
          <TodoForm />
        </div>
        <div className='mt-3 pb-3'>
        <ul>
          {todos.map((todo)=>(
            <li key={todo.id}>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  )
}

export default App
