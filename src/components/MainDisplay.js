import React, {useState} from "react";
import { Link } from 'react-router-dom';
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
      <Link to='/PostReview'>
        <button>Post Review</button>
      </Link>
      <div>
        <h2>Doctor Reviews</h2>
        <ReviewFeed />
      </div>
    </div>
  )
}

export default MainDisplay;