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

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lng", lang);
    switchLang(lang);
  };
  
  return (    
    <>
    <div className="navbar">   

        <div className="content">
          <div className='navbar-routes'>
          <NavLink to="/home"><img src={Hawlaklogo} alt="profile-img" className="profile-img" /></NavLink>

          <NavLink to="/home" className="navbar-navlink">
            {t("navbar.home")}
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
