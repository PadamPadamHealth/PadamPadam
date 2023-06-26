import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login.js';
import Overlay from './Overlay.js';
import MainDisplay from './MainDisplay.js';

const App = () => {
//   //first create user tokens and store in local memory. Will eventually store tokens in DB
// const [token, setToken] = useState();
// //this conditional statement means that Login will display if user token is falsy. the set token function is being passed to the login component
// if (!token) {
//   return <Login setToken={setToken}/>
// }
  return (
    <>
    <div>
      <h1>Padam Padam Health</h1>
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
      </Routes>
    </>
  )
}

export default App;