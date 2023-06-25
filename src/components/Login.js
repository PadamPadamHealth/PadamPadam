// const button = document.querySelector("login");

// button.addEventListener("click", () => console.log("hello"))
// console.log("hello")
import React, { useState } from "react";
import Signup from "./Signup";
import "../stylesheets/login.css"

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  //first create user tokens and store in local memory. Will eventually store tokens in DB
  const [token, setToken] = useState();
  //this conditional statement means that Login will display if user token is falsy. the set token function is being passed to the login component
  if (!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <div class="overlay">
      <input class="input" placeholder="username"/>
      <input class="input" placeholder="password"/>
      <button class="login">login</button>
      <button class="signup" onClick={toggleOverlay}>Signup</button>
    </div>
  )
}

export default Login;