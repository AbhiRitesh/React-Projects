import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
    setButtonClicked((prev) => !prev);
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className={`outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ${buttonClicked ? 'bg-gray-500' : ''}`}>
              {buttonClicked ? 'Copied!' : 'Copy'}
            </button>
        </div>
        <div className='flex text-sm gap-x-5'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={40}
              value={length}
              className='cursor=pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label>Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
