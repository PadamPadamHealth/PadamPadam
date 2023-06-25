// const button = document.querySelector("login");

// button.addEventListener("click", () => console.log("hello"))
// console.log("hello")
import React from "react";
import Signup from "./Signup";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="overlay">
      <input class="userName" placeholder="username"/>
      <input class="userpassword" placeholder="password"/>
      <button class="login">login</button>
      <button class="signup" onClick={toggleOverlay}>Signup</button>
    </div>
  )
}

export default Login;