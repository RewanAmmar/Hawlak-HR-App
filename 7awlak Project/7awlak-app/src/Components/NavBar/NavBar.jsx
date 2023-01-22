import React from 'react'
import "./NavBar.scss"
import Hawlaklogo from "../../assets/Hawlaklogo (3).png"
import { NavLink } from "react-router-dom";
import { authActions } from './../../store/AuthSlice';

export default function NavBar() {

  return (
    
    <>
    <div className="navbar">
        {/* <div
          className="burger-menu"         
        >
          <i className="fa-solid fa-bars nav-icon"></i>
        </div> */}

        <div className="content">
          <div className='navbar-routes'>
          <img src={Hawlaklogo} alt="profile-img" className="profile-img" />

          <NavLink to="/companies" className="navbar-navlink">
            Companies
          </NavLink>

          <NavLink to="/branches" className="navbar-navlink">
            Branches
          </NavLink>

          <NavLink to="/departments" className="navbar-navlink">
          Departments
          </NavLink>

          {/* <NavLink to="/add-department" className="navbar-navlink">
            Add Department
          </NavLink>
          <NavLink to="/add-employee" className="navbar-navlink">
            Add Employee
          </NavLink> */}
          <NavLink to="/reset-password" className="navbar-navlink">
            Reset Password
          </NavLink>
          <button className="navbar-navlink lang-btn"><i className="fa-solid fa-globe lang-icon"></i> English</button>
          </div>
           <div className='logout-action'>
          <i class="fa-solid fa-right-from-bracket logout"></i>
          </div>
        </div>

      </div>
    </>
   
  )
}
