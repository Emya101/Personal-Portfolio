import { useState } from 'react'
import './App.css'
import { Navigation } from './Components/Navigation'
import { Home } from './Components/Home'
import { Footer } from './Components/Footer'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navigation/>
      <Home/>
      <Footer/>
      </div>
    </>
  )
}

export default App
