import React, {useState} from "react";
import { Link } from 'react-router-dom';
import ReviewFeed from "./MainDisplayComponents/ReviewFeed";
import Login from './Login.js';
import Filter from "./MainDisplayComponents/Filter";
import "../stylesheets/mainDisplay.css"

const MainDisplay = () => {
  
  return (
    <div id='main-display'>
      <div id='filter-display'>
        <Filter />
      </div>
      <div id='post-button'>
        <Link to='/PostReview'>
          <button class='review-btn'>Post Review</button>
        </Link>
      </div>
      <div id='review-display'>
        {/* <h2>Doctor Reviews</h2> */}
        <ReviewFeed />
      </div>
    </div>
  )
}

export default MainDisplay;