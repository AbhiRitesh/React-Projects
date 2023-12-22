import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  if(counter>22){
    counter=22
  }
  if(counter<0){
    counter=0;
  }
  
  // let counter = 15

  const addValue = () => {
    // console.log("clicked", counter)
    setCounter(prevCounter=>prevCounter + 1)
    setCounter(prevCounter=>prevCounter + 1)
    setCounter(prevCounter=>prevCounter + 1)
    setCounter(prevCounter=>prevCounter + 1)
  }

  const removeValue = () => {
    // console.log("clicked", counter)
    setCounter(prevCounter=>prevCounter - 1)
    setCounter(prevCounter=>prevCounter - 1)
    setCounter(prevCounter=>prevCounter - 1)
    setCounter(prevCounter=>prevCounter - 1)
  }

  return (
    <> 
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
