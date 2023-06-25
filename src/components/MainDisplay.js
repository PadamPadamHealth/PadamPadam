import React from "react";
import ReviewFeed from "./MainDisplayComponents/ReviewFeed";

const MainDisplay = () => {
  return (
    <div>
      <h1>I am Main Display</h1>
      <div>
        <h2>I am Filter Div</h2>
      </div>
      <div>
        <ReviewFeed />
      </div>
    </div>
  )
}

export default MainDisplay;