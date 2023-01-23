import React from 'react'
import "./NavBar.scss"
import { useTranslation } from "react-i18next";
import Hawlaklogo from "../../assets/Hawlaklogo (3).png"
import { NavLink } from "react-router-dom";
import { authActions } from './../../store/AuthSlice';
import { useDispatch } from "react-redux";
import { currentLang, switchLang } from "../Localize/lang";
export default function NavBar() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const dispatch = useDispatch();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    switchLang(lng);
  };
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
          <NavLink to="/home"><img src={Hawlaklogo} alt="profile-img" className="profile-img" /></NavLink>

          <NavLink to="/home" className="navbar-navlink">
            {t("navbar.home")}
          </NavLink>
          <NavLink to="/companies" className="navbar-navlink">
            {t("navbar.companies")}
          </NavLink>

          <NavLink to="/branches" className="navbar-navlink">
            {t("navbar.branches")}
          </NavLink>

          <NavLink to="/departments" className="navbar-navlink">
          {t("navbar.departments")}
          </NavLink>
          <NavLink to="/employees" className="navbar-navlink">
          {t("navbar.employees")}
          </NavLink>   
        
          <button className="navbar-navlink lang-btn" onClick={() => {
              changeLanguage(currentLang() === "en" ? "ar" : "en");
            }}><i className="fa-solid fa-globe lang-icon"></i> {t("lang")}</button>
          </div>
          </div>
          <div className='logout-section'>
           <div className='logout-action' onClick={(e) => {
                e.preventDefault();
                dispatch(authActions.logout());
              }}>
          <i class="fa-solid fa-right-from-bracket logout"></i>
          </div>
        </div>

      </div>
    </>
   
  )
}
