import { useState } from 'react'
import 'bootstrap'
import './App.css'
import NavBar from './Components/NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
    </>
  )
}

export default App
