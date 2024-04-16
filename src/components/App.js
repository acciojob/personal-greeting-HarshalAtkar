
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text,setText]=useState("");
 
  const coppytext=(event)=>{
    setText(event.target.value);

  }
  return (
    <div>
        <input onKeyup={coppytext} ke />
        <p>{text}</p>
    </div>
  )
}

export default App
