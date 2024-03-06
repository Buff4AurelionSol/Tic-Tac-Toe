import { Box } from "./Box"
import { BoardProps } from "./types"
import { useState } from "react"

export const Board = ({turn, updateTurn, resetTurn}:BoardProps) => {
    const Boxes = Array(9).fill(null)
    const [board, setBoard] = useState( Boxes)
    const [winner, setWinner] = useState(false)
    type WinnerCombination = [number, number, number];

    const WINNER_COMBINATIONS: WinnerCombination[]  = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    
    const resetBoard = () =>{
        setBoard(Boxes)
        setWinner(false)
        resetTurn()
    }

    const updateBoard = (index:number) => {
        if(board[index]|| winner) return
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        changeTurn()
        const newWinner = isWinner(newBoard)
        if(newWinner){
            setWinner(true)
        }
       
        
    }

    const changeTurn = () => {
        const newTurn = turn === 'X' ? 'O': 'X'
        updateTurn(newTurn)
    }

    const isWinner = (boardToCheck: string[]) => {
        for(const combination of WINNER_COMBINATIONS){
            const [first, second, third] = combination
            if (
                boardToCheck[first] &&
                boardToCheck[first] === boardToCheck[second] &&
                boardToCheck[first] === boardToCheck[third]
              ) {
                return boardToCheck[first]
              }
            }
            return null
        
       
    };
    
    
    return (
        <>
        <section className="Board"> 
           {Boxes.map((_, index)=> (
            <Box key={index}
                index={index}
                updateBoard={updateBoard}
                value={board[index]}
            />
           ))
           }
            
        </section>
         {winner && <p id="WinnerTitle">Hay un ganador. </p>}
        <section id="SectionClean">
            <button className="Clean" onClick={resetBoard}>Limpiar</button>
        </section>
        </>  
    )
}