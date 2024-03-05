import { useState } from "react"
import { BoxState } from "./types" 
export const Box = () => {

    const [valueBox, setValueBox] = useState<BoxState>(null)

    const getValue = () =>{
        if(valueBox == null){
            setValueBox('X')
        }else if(valueBox=== 'X'){
            setValueBox('O')
        }else{
            setValueBox(null)
        }
    }

    return(
        <div className="Box" onClick={getValue}>
            {valueBox}
        </div>
    )
}