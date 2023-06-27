import React from "react";
import Review from "./Review";
import '../../stylesheets/reviewFeed.css';

const ReviewFeed = () => {
  return (
    <>
      {/* <h2>I am Review Feed Display</h2> */}
      <div id='reviews'>
      {/* <Review /> */}
      </div>
      <div id='post'>
        <div class="left">
          <h3>Practitioner: Dr. Vivian</h3>
          <h3>Practice Name: Recursive Booboos</h3>
          <h3>Address: 123 Fake Street, #456 </h3>
          <h3>Link/Website: www.RecursiveBooBoos.con</h3>
        </div>
        <div class="right">
          <h3>Star Rating: 5 Stars</h3>
          <h3>Specialty: Family Medicine</h3>
          <button>Add Review</button> 
        </div>
      </div>
      <div id='post-none'>
        <div class="left">
          <h3>Practitioner: Dr. Meimei</h3>
          <h3>Practice Name: Exponential Pain</h3>
          <h3>Address: 789 CouldBeReal Ave. #A</h3>
          <h3>Link/Website: www.OofNSquaredPain.oww</h3>
        </div>
        <div class="right">
          <h3>Star Rating: 5 stars</h3>
          <h3>Specialty: Internal Medicine</h3>
          <button>Add Review</button> 
        </div>
      </div>
      <div id='post'>
        <div class="left">
          <h3>Practitioner: Dr. Patsy</h3>
          <h3>Practice Name: Closure Sports Med</h3>
          <h3>Address: 901 ACL Lane, Unit 23B</h3>
          <h3>Link/Website: www.closureSportMed.omg</h3>
        </div>
        <div class="right">
          <h3>Star Rating: 5 stars</h3>
          <h3>Specialty: Sports Medicine</h3>
          <button>Add Review</button> 
        </div>
      </div>
    </>
  )
}

export default ReviewFeed;