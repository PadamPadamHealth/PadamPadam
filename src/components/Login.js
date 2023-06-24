// const button = document.querySelector("login");

// button.addEventListener("click", () => console.log("hello"))
// console.log("hello")
import React from "react";

const Login = () => {
  return (
    <div class="overlay">
      <input class="userName" placeholder="username"/>
      <input class="userpassword" placeholder="password"/>
      <button class="login">login</button>
      <a class="signup">Signup</a>
    </div>
  )
}

export default Login;