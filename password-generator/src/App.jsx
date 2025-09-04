import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length,setlength]=useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(true)
  const [Password,setpassword]=useState("")

//useref hook
const passwordRef =useRef(null)

const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed)str+="0123456789"
  if(charAllowed)str+="@#$%^&*()_"
  for(let i=1;i<length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }
  setpassword(pass)
  
},[length,numberAllowed,charAllowed])

const copyPasswordToClip = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,50)
  window.navigator.clipboard.writeText(Password)
},[Password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,setpassword])

  return (
    <>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text"
    value={Password}
    placeholder='password'
    className='outline-none w-full py-1 px-3 text-white-500'
    readOnly
    ref={passwordRef}
    />
    <button
    onClick={copyPasswordToClip}
    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
    >Copy</button>
    <div/>
<div className='w-full max-w-md mx-auto rounded-lg shadow-md px-4 my-8 text-orange-500 bg-gray-800'>
  password generator
  
    <div className='flex items-center gap-x-4'>
      <input type="range" 
      min={6}
      max={50}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setlength(e.target.value)}}
      />
      <label >Length :{length}</label>


    </div>
    <div className='flex text-sm gap-x-2'>
    <input type="checkbox"
    defaultChecked={numberAllowed}
    id='numberallowed'
    onChange={()=>{
      setnumberAllowed((prev)=>!prev)
    }}
    />
    <label htmlFor="charallowed">Number Allowed</label>
    </div>
     <input type="checkbox"
    defaultChecked={charAllowed}
    id='charallowed'
    onChange={()=>{
      setcharAllowed((prev)=>!prev)
    }}
    />
    <label htmlFor="charallowed">characters Allowed</label>

  </div>
  </div>   
  
   </>
  )
}

export default App
