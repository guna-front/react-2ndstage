import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Click to apply");
  const [user, setUser] = useState(null);
  const [ status, setStatus] = useState("Not Applied");

  function handleClick() {
    setMessage("submitted");
    setStatus("Applied")
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to my job portal</h1>

      <p>{message}</p>

      <button className="apply" onClick={handleClick}>
        Apply now
      </button>

      <h2>User Info</h2>
      {user ? (
        <div>
          <p>Candidate: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Status: {status}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;