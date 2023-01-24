import React from "react";
import "./BackButton.scss";
import { useNavigate } from "react-router";
export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="back-button"
      onClick={() => {
        navigate(-1);
      }}
    >
    
      <i className="fa-solid fa-arrow-left"></i>
    </button>
  );
}
