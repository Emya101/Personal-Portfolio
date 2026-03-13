import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { Footer } from './Components/Footer'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      Portfolio
      <Header/>
      <Home/>
      <Footer/>
      </div>
    </>
  )
}

export default App
