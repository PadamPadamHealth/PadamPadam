import React, {useState} from "react";
import ReviewFeed from "./MainDisplayComponents/ReviewFeed";
import Login from './Login.js';
import "../stylesheets/mainDisplay.css"

const MainDisplay = () => {
  
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <h2>Filters</h2>
      </div>
      <div>
        <h2>Doctor Reviews</h2>
        {/* <ReviewFeed /> */}
      </div>
    </div>
  )
}

export default MainDisplay;