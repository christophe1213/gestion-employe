import { useState } from 'react'
import 'bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
