import React from 'react'
import "./Forgotpassword.scss"
import forgot from "../../assets/forgot.webp"
import { Link } from "react-router-dom";
export default function Forgotpassword() {
  return (
    <div className="forgot-container">
    <div className="forgot">
     
      <div className="forgot-form">
     
        <h1 className="forgot-header">Forgot Your Password</h1>
        <form>
          <div className="input-div">
            <i class="fa-solid fa-envelope icon"></i>
            <input type="text" placeholder="Email" className="forgot-input" />
          </div>
        
          <button className="forgot-btn">Reset Passowrd</button>
          {/* <Link to={"/login"}>
          <p className="login-text">Back To Login?</p>
        </Link>b */}
        </form>
        
      </div>
      <div className="content">
        <img src={forgot} alt="" className="forgot-image" />
      </div>
    </div>
  </div>
  )
}
