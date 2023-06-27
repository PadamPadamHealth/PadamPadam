import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login.js';
import Overlay from './Overlay.js';
import MainDisplay from './MainDisplay.js';
import PostReview from './MainDisplayComponents/PostReview.js';
let navbarImg = require('../assets/padam.png');
import '../stylesheets/index.css'


const App = () => {
//   //first create user tokens and store in local memory. Will eventually store tokens in DB
// const [token, setToken] = useState();
// //this conditional statement means that Login will display if user token is falsy. the set token function is being passed to the login component
// if (!token) {
//   return <Login setToken={setToken}/>
// }
  return (
    <>
      
      <nav id='navbar'>
        <section id='left-nav'>
          <img id='navbarImg' src={navbarImg.default} />
        </section>
        <section id='center-nav'>
          <h1>Padam Padam Health</h1>
        </section>
        <section id='right-nav'>
          <input placeholder="enter city or zip code" className='search-bar' type='text' onChange={(event) => {
            const { value } = event.target;
            setZipcode(value.replace(/[^\d{5}]$/,"").sul)
           }
          }/>
          <button id='search-btn' className='nav-btns'>
            Search
          </button>
          <Link to='/Login'>
            <button id='login-btn' className='nav-btns'>
              Log In
            </button>
          </Link>
        </section>
      </nav>
       <Routes>
         <Route 
          path='/'
          element={
          <MainDisplay 
          //  token={token}
           />
          }
        />
        <Route 
          path='/Login'
          element={
            <Login />
          }
        />
        <Route 
          path='/PostReview'
          element={
            <PostReview />
          }
        />
      </Routes>
    </>
  )
}

export default App;