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

    </div>
  )
}



export default App
