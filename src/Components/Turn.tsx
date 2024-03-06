import { TurnProps } from "./types"

export const Turn = ({turn}:TurnProps) => {   
    return(
        <p id='Turn'> El turno es de: {turn} </p>
    )
}