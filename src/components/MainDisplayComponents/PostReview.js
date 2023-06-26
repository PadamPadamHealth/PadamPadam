import React, { useState } from "react";

const PostReview = () => {
  let providerType = [
    { label: "Allergist/Immunologist", value: "Allergist/Immunologist" },
    { label: "Cardiologist", value: "Cardiologist" },
    { label: "Dermatologist", value: "Dermatologist" },
    { label: "Endocrinologist", value: "Endocrinologist" },
    { label: "Family Medicine", value: "Family Medicine" },
    { label: "Gastroenterologist", value: "Gastroenterologist" },
    { label: "Geriatric Medicine", value: "Geriatric Medicine" },
    { label: "Infectious Disease", value: "Infectious Disease" },
    { label: "Neurologist", value: "Neurologist" },
    { label: "OB/GYN", value: "OB/GYN" },
    { label: "Oncologist", value: "Oncologist" },
    { label: "Ophthalmologist", value: "Ophthalmologist" },
    { label: "Osteopath", value: "Osteopath" },
    { label: "Pathologist", value: "Pathologist" },
    { label: "Pediatrician", value: "Pediatrician" },
    { label: "Plastic Surgery", value: "Plastic Surgery" },
    { label: "Psychiatrist", value: "Psychiatrist" },
    { label: "Pulmonologist", value: "Pulmonologist" },
    { label: "Rheumatologist", value: "Rheumatologist" },
    { label: "Sleep Medicine", value: "Sleep Medicine" },
    { label: "Sports Medicine", value: "Sports Medicine" },
    { label: "General Surgery", value: "General Surgery" },
    { label: "Urologist", value: "Urologist" },
  ];
  let [specialty, setSpecialty] = useState("specialty");

  return (
    <div>
      <h2>Post a Review</h2>
      <div id='reviewPostBox'>
        <form id='reviewForm'>
          <label>Provider:</label>
          <input 
            type='text'
            name='provider'
            placeholder='Provider full name'
            value={provider}
            onChange={(e) => {
              setProvider(e.target.value);
            }}
          />
          <label>Specialty:</label>
          <select
            className='specialtyDropDown'
            name='specialty'
            type='text'
            value={specialty}
            onChange={(e) => {
              setSpecialty(e.target.value);
            }}
            defaultValue={'DEFAULT'}
          >
            <option value='DEFAULT' disabled>
              Select type of provider
            </option>
          </select>
          <label>Pronouns:</label>
          <select
            className='pronounsDropDown'
            name='pronouns'
            type='text'
            value={pronouns}
            onChange={(e) => {
              setPronouns(e.target.value);
            }}
            defaultValue={'DEFAULT'}
          >
            <option value='DEFAULT' disabled>
              Provider's pronouns?
            </option>
            <option value='she/her'>she/her</option>
            <option value='he/him'>he/him</option>
            <option value='they/them'>they/them</option>
            <option value='other'>other</option>
          </select>
          <label>Address:</label>
          <input
            type='text'
            name='address'
            placeholder='Office Address'
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <label>Rating:</label>
          <input
            type='number'
            name='rating'
            placeholder='1-5 (5 being the best)'
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
          <label>Link/Website URL:</label>
          <input
            type='text'
            name='url'
            placeholder='http//:...'
            value={url}
            onChange={(e) => {
              setURL(e.target.value);
            }}
          />
          <form>
            <label>Tags:</label>
            <input type="checkbox" id="tag1" name="transHealth" value="Trans Health"/>
            <label for="tag1">Trans Health</label><br/>
            <input type="checkbox" id="tag2" name="LGBTQ+" value="LGBTQ+"/>
            <label for="tag2">LGBTQ+</label><br/>
            <input type="checkbox" id="tag3" name="Ally" value="Ally"/>
            <label for="tag3">Ally</label><br/>
            <input type="checkbox" id="tag4" name="POC" value="POC"/>
            <label for="tag3">POC</label><br/>
            <input type="checkbox" id="tag4" name="WOC" value="WOC"/>
            <label for="tag4">WOC</label><br/>
            <input type="checkbox" id="tag4" name="genderAffirmingCare" value="Gender Affirming Care"/>
            <label for="tag4">Gender Affirming Care</label><br/>
          </form>
          <label>Review:</label>
          <input
            type='text'
            name='review'
            placeholder='Write a review'
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  )
}

export default PostReview;