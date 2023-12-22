import { useState } from "react"
import Button from "./Button"

function App() {
  const [color, setColor] = useState("olive")

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
            
            <Button col="Red" onColorChange={changeColor} />
            <Button col="Green" onColorChange={changeColor} />
            <Button col="Yellow" onColorChange={changeColor} />
            <Button col="Lavender" onColorChange={changeColor} />
            <Button col="Black" onColorChange={changeColor} />
            <Button col="Pink" onColorChange={changeColor} />
            <Button col="Magenta" onColorChange={changeColor} />
            <Button col="Blue" onColorChange={changeColor} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
