import React, {useState} from "react";
import { Link } from 'react-router-dom';
import ReviewFeed from "./MainDisplayComponents/ReviewFeed";
import Login from './Login.js';

const MainDisplay = () => {
  
  return (
    <div>
      <h1>I am Main Display</h1>
      <div>
        <h2>I am Filter Div</h2>
      </div>
      <Link to='/PostReview'>
        <button>Post Review</button>
      </Link>
      <div>
        <h2>I am ReviewFeed</h2>
        {/* <ReviewFeed /> */}
      </div>
    </div>
  )
}

export default MainDisplay;