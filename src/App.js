// Import React, useState, and useEffect from React library
import React, { useState, useEffect } from "react";
// Import the Char component and the CSS file
import User from "./user";
import './App.css';

console.clear();

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Mounted")
    fetch("https://randomuser.me/api?results=25")
    .then((response) => response.json())
    .then((data) => {
      setUsers(data.results)
    })
  },[])

  useEffect(() => {
    console.log("Updated")
  }, [users])

  return (
    <div className="App">
      <h1>find me</h1>
      <ul>
        {users.map((user) => {
          return <User data={user} />
        }, [])}
      </ul>
    </div>
  )
}
