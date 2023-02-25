import React from "react"
import './buttons.css'
export const FirstButton =(props)=>{
    const {onClick} = props
    return(
        <>
        <button onClick={onClick} className="button-blue">Azul</button>
        </>
    );
}