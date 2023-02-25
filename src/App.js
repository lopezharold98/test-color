import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirstButton } from './components/buttons/firstButton';
import { SecondButton } from './components/buttons/secondButton';
import { ModalInfo } from './components/modals/modalInfo';

function App() {
  let [textColor,setTextColor] = useState("")
  let [show,setShow] = useState(false)
  const changeFirstButton = () =>{
    setTextColor("blue")
    setShow(true)

  }
  const changeSecondButton = () =>{
    setTextColor("red")
    setShow(true)

  }
  return (
    <>
    
      <div className='container' style={{ paddingTop: "40px" }}  >

        <div className='como-funciona' >
          <div className='titulo'  >
            <h2 style={{color:textColor}}>Prueba Básica</h2>
          </div>
          <div className='como-funciona-pasos'>
            <div className='pasos-item '>
              <FirstButton onClick={changeFirstButton}/>
            </div>
            <div className='pasos-item '>
              <SecondButton  onClick ={changeSecondButton}/> 
            </div>
          </div>
        </div>
      </div>
      <ModalInfo closeModal={()=>setShow(false)} show={show} nameColor={textColor==="red" ? "rojo": "azul"} />
    </>
    
    
)
}

export default App;
