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