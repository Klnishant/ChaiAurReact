import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-800 text-white'>Currency Converter</div>
    </>
  )
}

export default App
