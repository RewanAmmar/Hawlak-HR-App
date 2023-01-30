import React from "react";
import "./Spinner.scss";
export default function Spinner() {
  return (
    <div className="custom-overlay-backdrop">
      <div className="overlay-spinner-wrapper">
        <div className="spinner">
          <i className="fas fa-spinner fa-spin "></i>
        </div>
      </div>
    </div>
  );
}