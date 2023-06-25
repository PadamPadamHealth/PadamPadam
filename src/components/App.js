import { React, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login.js';
// import Overlay from './components/Overlay.js';
import MainDisplay from './MainDisplay.js';

const App = () => {

  return (
    <>
      <nav id='navbar'>
        <section id='left-nav'>
          {/*add image tag for logo*/}
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