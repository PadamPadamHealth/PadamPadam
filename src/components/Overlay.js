import React, { Fragment } from "react";

import "../stylesheets/overlay.css";

export function Overlay({isOpen, children}) {
  return (
    <Fragment>
<<<<<<< HEAD
      {isOpen && (
        <div className="overlay">
=======
      {/*<!--Renders a div if isOpen prop is true -->*/}
      {isOpen && (
        <div className="overlay">
          {/*<!--Renders whatever you pass in to this component inside the parent div.-->*/}
>>>>>>> dev
          {children}
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;