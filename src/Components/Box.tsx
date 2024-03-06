import { BoxProps } from "./types"

export const Box = ({index, updateBoard, value}:BoxProps) => {
    return(
        <div className="Box" onClick={()=> updateBoard(index)}>
           {value}
        </div>
    )
}