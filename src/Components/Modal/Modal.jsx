import React from "react";
import "./Modal.scss";
export default function GeneralModal({ children }) {
  return (
    <div className="general-modal-back-drop">
      <div className="modal-content-container">{children}</div>
    </div>
  );
}