import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Input from './Input'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container"> 
      <Header/>
      <Input/>
    </div>
  )
}

export default App
