import React from "react";
import '../../stylesheets/reviews.css';

const Review = () => {
  return (
    <div class="both">
      <div id='Vivian'>
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
      <div id='Meimei'>
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
      <div id='Patsy'>
        <div class="leftp">
          <h3>Practitioner: Dr. Patsy</h3>
          <h3>Practice Name: Closure Plastic Surgery</h3>
          <h3>Address: 901 RichPeople Lane, Unit 23B</h3>
          <h3>Link/Website: www.closureSportMed.omg</h3>
        </div>
        <div class="rightp">
          <h3>Star Rating: 5 stars</h3>
          <h3>Specialty: Comestic Surgeon</h3>
          <button>Add Review</button> 
        </div>
      </div>
    </div>
  )
}

export default Review;

{/* <div id='reviewCard'>
        <div class="left">
          <h3>Practitioner: (STATE)</h3>
          <h3>Practice Name: (STATE)</h3>
          <h3>Address: (STATE)</h3>
          <h3>Link/Website: (STATE)</h3>
        </div>
        <div class="right">
          <h3>Star Rating (STATE)</h3>
          <h3>Specialty: (STATE)</h3>
          <button>Add Review</button> 
        </div>
      </div> */}