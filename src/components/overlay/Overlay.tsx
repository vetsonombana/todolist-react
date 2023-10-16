import React from "react";
import "./Overlay.css";
import { Spinner } from "react-bootstrap";
const Overlay = () => {
  return (
    <div className="overlay">
      <div className="overlay__inner">
        <div className="overlay__content">
          {/* <span className="spinner"></span> */}
          <Spinner animation="border" variant="info" />
        </div>
      </div>
    </div>
  );
};
export default Overlay;
