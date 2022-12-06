import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Input from './Input'
import Header from './Header'
import Today from './Today'
import Boxy from './Boxy'
import Boxy1 from './Boxy1'
import Boxy2 from './Boxy2'
import Boxy3 from './Boxy3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header/>
      <Input/>
      <Today/>
      <div className="cover">  
      <Boxy den1={"Utorok"}/>
      <Boxy1 den2={"Streda"}/>
      <Boxy2 den3={"Stvrtok"}/>
      <Boxy3 den4={"Piatok"}/>
    </div>
    </div>
  )
}



export default App
