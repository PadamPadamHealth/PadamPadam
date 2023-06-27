import React, { useState } from "react";
import "../../stylesheets/filter.css"

const Filter = () => {
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
  let [specialty, setSpecialty] = useState('');
  let [pronouns, setPronouns] = useState('');

  return (
    <>
      <div class='filter'>
        <h2>Filters</h2>
      </div>
      <div>
        <input placeholder="enter doctor name" className='search-bar' type='text'/>
        <button id='search-btn' className='nav-btns'>
          Search
        </button>
        <form id='filter'><br/>
          <label>Specialty:</label>
            <select
              className='dropDown'
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
              {providerType.map((provider) => <option key={provider.label} value={provider.value}>{provider.label}</option>)}
            </select><br/>
            <label>Insurance:</label>
            <input placeholder="insurance company" className='search' type='text'/><br/>
            <label>Pronouns:</label>
            <select
              className='dropDown'
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
            </select><br/>
            <label>...</label><br/>
            <button className='filter-btn'>
              Submit
            </button>
          </form>
      </div>
    </>
  )
}

export default Filter;