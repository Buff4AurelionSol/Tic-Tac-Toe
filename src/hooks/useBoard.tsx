import { useState } from "react";
import { INITIALLY_BOARD } from "../types";

export function useBoard(){
    const [board, setBoard] = useState(INITIALLY_BOARD)
    const [turn, setTurn] = useState("X")

    function updateBoard(rowIndex: number, colIndex: number){
        if(!board[rowIndex][colIndex]){
            const newBoard = structuredClone(board);
            newBoard[rowIndex][colIndex] = turn;
            setBoard(newBoard)
            changeTurn()
            const winner = isWinner(newBoard, rowIndex)
            if(winner){
                alert("HAY UN GANADOR")
            }
        }
    }

    function resetGame(){
        setBoard(INITIALLY_BOARD)
        setTurn('X')
    }

    function changeTurn(){
        turn === 'X' ? setTurn('O'): setTurn('X')
    }

    function checkColumn(boardToCheck: string[][], rowIndex:number){
        let firstBox = boardToCheck[rowIndex][0]
        if (!firstBox) return false;

       for(let i= 0; i < 3; i++){
            if(boardToCheck[rowIndex][i]!= firstBox){
                return false; 
            }

       }

       return true
    }

    function checkMainDiagonal(boardToCheck: string[][]){
        let firstBox = boardToCheck[0][0];
        if(!firstBox) return false;

        for(let i= 0; i<3; i++){
            if(boardToCheck[i][i] != firstBox){
                return false;
            }
        }
        return true; 
    }

    function checkSecondaryDiagonal(boardToCheck: string[][]) {
        let firstBox = boardToCheck[0][2];
        if (!firstBox) return false;
    
        for (let i = 0; i < 3; i++) {
            if (boardToCheck[i][2 - i] !== firstBox) {
                return false;
            }
        }
    
        return true;
    }
    
    function isWinner(boardToCheck: string[][], rowIndex: number): boolean {
        const checks = [
            () => checkColumn(boardToCheck, rowIndex),
            () => checkMainDiagonal(boardToCheck),
            () => checkSecondaryDiagonal(boardToCheck),
        ];
    
        return checks.some(check => check());
    }
    

    return {board, turn, updateBoard, changeTurn, resetGame}
}