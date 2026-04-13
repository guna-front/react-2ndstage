import React from "react";
import "./App.css";
function App() {
  const name = "guna";
  function handleClick() {
    alert("submitted");
  }
  return (
    <div>
      <h1>Welcome to my job portal</h1>
      <p>Hello {name}</p>
      <button className="apply" onClick={handleClick}>Apply now</button>
    </div>
  );
}
export default App;