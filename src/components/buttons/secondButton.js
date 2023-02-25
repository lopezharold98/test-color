import React from "react"
import './buttons.css'
export const SecondButton =(props)=>{
    const {onClick} = props
    return(
        <>
        <button onClick={onClick} className="button-red">Rojo</button>
        </>
            

    );

}