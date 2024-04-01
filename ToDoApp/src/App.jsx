import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoForm, TodoItem } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TodoForm />
        <TodoItem />
      </div>
    </>
  )
}

export default App
