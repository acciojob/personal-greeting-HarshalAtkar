
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text,setText]=useState("");
 
  const coppytext=(event)=>{
    setText(event.target.value);

  }
  return (
    <div>
      <label htmlFor="name">Enter your name:</label>
        <input id="name" onKeyUp={coppytext} />
        <p>Hello {text}!</p>
    </div>
  )
}

export default App
