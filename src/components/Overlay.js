import React, { Fragment } from "react";

import "../stylesheets/overlay.css";

export function Overlay({isOpen, children}) {
  return (
    <Fragment>
      {isOpen && (
        <div className="overlay">
          {children}
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;