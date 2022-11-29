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
      <Boxy/>
    </div>
  )
}

export default App
