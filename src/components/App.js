import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login.js';
// import Overlay from './components/Overlay.js';
import MainDisplay from './MainDisplay.js';

const App = () => {
// return (
//   <div>
//     <h1>Hello World Im App</h1>
//   </div>
// )
  return (
    <>
    <div>
      <h1>I am App.js</h1>
    </div>
          {/*add image tag for logo*/}
      <nav id='navbar'>
        <section id='left-nav'>
        </section>
        <section id='right-nav'>
          <input placeholder="enter city or zip code"/>
          <button id='search-btn'>
            Search
          </button>
          <Link to='/Login'>
            <button id='login-btn'>
              Log In
            </button>
          </Link>
        </section>
      </nav>
       <Routes>
         <Route 
          path='/'
          element={
            <MainDisplay />
          }
        />
        <Route 
          path='/Login'
          element={
            <Login />
          }
        />
      </Routes>
    </>
  )
}

export default App;