import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Input from './Input'
import Header from './Header'
import Today from './Today'
import Boxy from './Boxy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container"> 
      <Header/>
      <Input/>
      <Today/>
      <Boxy den1={"Utorok"}/>
      <Boxy den2={"Streda"}/>
      <Boxy den3={"Stvrtok"}/>
      <Boxy den4={"Piatok"}/>
    </div>
  )
}



export default App
