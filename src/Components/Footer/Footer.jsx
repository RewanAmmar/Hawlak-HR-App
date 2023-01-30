import React from "react";
import Sindion from "../../assets/Sindion.png"
import "./Footer.scss";
export default function Footer() {
  return (
    <footer
      className="text-center footer"
      onClick={() => window.open("http://sindion.com/", "_blank")}
    >
      <img src={Sindion} className="img" alt="footer-img"/>
    </footer>
  );
}

