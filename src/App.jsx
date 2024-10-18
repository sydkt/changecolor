import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("white")

  const green = () => {
    const bg = "green"
    setBgColor(bg)
  }

  const blue = () => {
    const bg = "blue"
    setBgColor(bg)
  }

  const red = () => {
    const bg = "red"
    setBgColor(bg)
  }

  const yellow = () => {
    const bg = "yellow"
    setBgColor(bg)
  }

  return (
    <>
      <div 
        id="main" 
        style={{backgroundColor: bgColor, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", width: "100vw"}}
      >
        <button className='mt-5 mx-2' onClick={green}>
          GREEN
        </button>
        <button className='mt-5 mx-2' onClick={blue}>
          BLUE
        </button>
        <button className='mt-5 mx-2' onClick={red}>
          RED
        </button>
        <button className='mt-5 mx-2' onClick={yellow}>
          YELLOW
        </button>
      </div>
    </>
  )

}

export default App
