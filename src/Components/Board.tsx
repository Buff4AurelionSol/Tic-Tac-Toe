import { useBoard } from "../hooks/useBoard"

export function Board(){
    const {board, turn, updateBoard, resetGame} = useBoard()
    return (
        <div className="board">   
            {board.map((row, rowIndex)=> 
                row.map((cell, colIndex)=> (
                    <div key={`${rowIndex}-${colIndex}`} className="box" onClick={()=> updateBoard(rowIndex,colIndex)}>
                        {cell}
                    </div>
                ))
            )}

           <footer className="footerBoard">
            <span>El turno es de: {turn}</span>
            <button type="button" onClick={resetGame}>Reiniciar juego</button>
           </footer>
        </div>
    )
}


