export type BoxState = 'X'| 'O'| null

export type BoxProps = {
    index: number,
    updateBoard: (index: number) => void,
    value: string
}

export type BoardProps = {
    turn: string,
    updateTurn: (newTurn: string) => void,
    
}

export type TurnProps = {
    turn: string
}