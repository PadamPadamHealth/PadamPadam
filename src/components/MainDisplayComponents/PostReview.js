import React, { useState } from "react";

const PostReview = () => {
  let providerType = [

  ];
  let [specialty, setSpecialty] = useState("");

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
            <option value='Family Medicine'>Family Medicine</option>
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