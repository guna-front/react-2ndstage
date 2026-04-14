import React, { useState, useEffect} from "react";
import "./App.css";
function App() {
  const [message, setMessage] =
  useState("Click to apply");

  function handleClick() {
    setMessage("submitted");
  }
  useEffect(() => {
    console.log("page loaded");
  }, []);
  
  return (
    <div>
      <h1>Welcome to my job portal</h1>
      <p>{message}</p>
      <button className="apply" onClick={handleClick}>Apply now</button>
    </div>
  );
}
export default App;

