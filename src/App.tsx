import './App.css'
import { Turn } from './Components/Turn'
import { useState } from 'react'
import { Board } from './Components/Board'

function App() {
  const [turn, setTurn] = useState('X')
  
  const updateTurn = (newTurn:string) => {
    setTurn(newTurn)
  }

  const resetTurn = () => {
    setTurn('X')
  }

  return (
    <div id='Main-Screen'>
      <h1>¡Tic tac Toe!</h1>
      <Board turn={turn} updateTurn={updateTurn} resetTurn={resetTurn}/>
      <Turn turn={turn} />
    </div>
  )
}

export default App
