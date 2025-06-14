import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compoenents/Header'
import Table from './compoenents/Table'
import Footer from './compoenents/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [turn , setTurn] = useState("X")

  return (
    <>
      <Header turn = {turn}/> 
      <Table turn = {turn} setTurn= {setTurn}/>
      <Footer></Footer>
    </>
  )
}

export default App
