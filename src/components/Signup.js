import React from "react";
import Overlay from "./Overlay.js"

const Signup = () => {
  return (
    <div>
      <h1>Hi Im Signup</h1>
      <div class="overlay">
      <input class="userName" placeholder="username"/>
      <input class="userpassword" placeholder="password"/>
      <button class="signup">Signup</button>
    </div>
    </div>
  )
}

export default Signup;