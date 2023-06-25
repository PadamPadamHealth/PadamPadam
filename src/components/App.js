import React from 'react';
import Login from './Login.js';
import Overlay from './/overlay.js'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <button onClick={toggleOverlay}>Open</button>
      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <div>Overlay is working</div>
      </Overlay>
      <Login />
    </div>
  )
}

export default App;