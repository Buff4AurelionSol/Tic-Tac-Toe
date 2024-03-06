import { useState } from "react"
import { BoxState } from "./types"
import { BoxProps } from "./types"

export const Box = ({index, changeTurn}:BoxProps) => {
    return(
        <div className="Box" onClick={changeTurn}>
           {index}
        </div>
    )
}