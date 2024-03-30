import { useEffect, useCallback, useRef, useState } from 'react';
import './index.css';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [ischar, setChar] = useState(false);
  const [isnum, setNum] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback( ()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isnum) {
      str += "0123456789";
    }

    if (ischar) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 0; i < length; i++) {
      
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);  
    }

    setPassword(pass);
  },[length,isnum,ischar]);

  const copyPasswordToClipboard = ()=> {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  useEffect(()=> {
    generatePassword();
  },[length,ischar,isnum]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3 text-xl' >Password Generator</h1>
        <div className='flex shadow overflow-hidden mb-4'>
          <input type="text" 
            value={password}
            readOnly
            placeholder='Password'
            ref={passwordRef}
            className='w-full outline-none px-3 py-1'
          />
          <button 
          onClick={copyPasswordToClipboard} 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex item-center gap-x-2 text-sm'>
        <div className='flex item-center gap-x-1'>
          <input type="range" 
            min={6}
            max={20}
            defaultValue={8}
            onChange={(e)=>{setLength(e.target.value)}}
            className='cursor-pointer'
          />
          <label htmlFor="length">Length:{length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={ischar}
           onChange={()=>{setChar((prev)=>!prev)}} 
          />
          <label htmlFor="char">Char Allowed</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={isnum}
           onChange={()=>{setNum((prev)=>!prev)}} 
          />
          <label htmlFor="num">Num Allowed</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
