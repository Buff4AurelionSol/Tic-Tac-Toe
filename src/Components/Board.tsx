import { Box } from "./Box"
import { BoardProps } from "./types"
import { useState } from "react"

export const Board = ({turn, updateTurn}:BoardProps) => {
    const Boxes = Array(9).fill(null)
    const [board, setBoard] = useState( Boxes)
  
    const changeTurn = () => {
        const newTurn = turn === 'X' ? 'O': 'X'
        console.log(turn)
        console.log(newTurn)
        updateTurn(newTurn)
    }
    return (
        <section className="Board"> 
           {Boxes.map((_, index)=> (
            <Box key={index}
                index={index}
                changeTurn={changeTurn}
            />
           ))
           }
        </section>
    )
}