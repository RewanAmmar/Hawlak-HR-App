import React from 'react'
import "./ResetPassword.scss"
import resetpassword from "../../assets/resetpassword.webp"
import { Link } from "react-router-dom";
export default function ResetPassword() {
  return (
    <div className="reset-passowrd-container">
    <div className="reset-passowrd">
    <div className="content">
        <img src={resetpassword} alt="" className="reset-passowrd-image" />
      </div>
      <div className="reset-passowrd-form">
     
        <h1 className="reset-passowrd-header">Reset Password</h1>
        <form>
          <div className="input-div">
          <i class="fa-solid fa-lock icon"></i>
            <input type="password" placeholder="Old Password" className="reset-passowrd-input" />
          </div>        
          <div className="input-div">
          <i class="fa-solid fa-lock icon"></i>
            <input type="password" placeholder="New Password" className="reset-passowrd-input" />
          </div>
          <div className="input-div">
          <i class="fa-solid fa-lock icon"></i>
            <input type="password" placeholder="Confirm Password" className="reset-passowrd-input" />
          </div>
          <button className='reset-password-btn'>Reset Password</button>
        </form>
        
      </div>
      
    </div>
  </div>
  )
}

