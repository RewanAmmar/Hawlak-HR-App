import React, { useState } from "react";
import "./Login.scss";
import { useNavigate, Link } from "react-router-dom";
import hr from "../../assets/hr.jpg";
import { useTranslation } from "react-i18next";
import { currentLang, switchLang } from "../../Components/Localize/lang";
import Hawlaklogo from "../../assets/Hawlaklogo (3).png";
import hawlakServices from "../../services/hawlakServices";
import toastPopup from "../../Helpers/Toast";
import { authActions } from "../../store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from '../../Components/Spinner/Spinner';
export default function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [press, setPress] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  function showPasswordHandler() {
    if (press === false) {
      setPress(true);
      setShowPassword(false);
    } else {
      setPress(false);
      setShowPassword(true);
    }
  }
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    switchLang(lng);
  };

  async function loginHandler(e) {
    e.preventDefault();  
    if (userName === "") {
      toastPopup("error", t("login.empty_name"));
    } else if (email === "") {
      toastPopup("error", t("login.email"));
    } else if (password === "") {
      toastPopup("error", t("login.empty_password"));
    } else {
      try {
        setLoading(true);
        const { data } = await hawlakServices.login(userName, email, password);
        console.log(data, "dataaaaaaaaaaaaaaaaaaaaaaaaaa");        
        dispatch(authActions.login({key: data.key}));
        toastPopup("success", t("login.signing_in"));

        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } catch (error) {
        setLoading(false);
        toastPopup("error", t("login.correct_data"));
      }
    }
  }
  return (
    <div>
      {loading && <Spinner/>} 
    <div className="login-container">
      <div className="login">
        <div className="content">
          <img src={hr} alt="" className="login-image" />
        </div>
        <div className="login-form">
          <div className="login-navbar">
            <div className="lang-div">
              <i className="fa-solid fa-globe lang-icon"></i>
              <button
                onClick={() => {
                  changeLanguage(currentLang() === "ar" ? "en" : "ar");
                }}
                className="lang-btn"
              >
                {t("lang")}
              </button>
            </div>
            <div className="logo">
              <img src={Hawlaklogo} alt="" className="image-logo" />
            </div>
          </div>
          <h1 className="header">{t("login.login")}</h1>
          <form>
            <div className="input-div">
              <i className="fa-solid fa-user icon"></i>
              <input
                type="text"
                placeholder="User Name"
                className="login-input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-div">
              <i className="fa-solid fa-envelope icon"></i>
              <input
                type="email"
                placeholder="Email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-div">
              <i className="fa-solid fa-lock icon"></i>
              <input
                type="text"
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <div onClick={(e) => showPasswordHandler(e)}>
                {press === false ? (
                  <i className="fas fa-eye-slash login-eye-icon"></i>
                ) : (
                  <i className="fas fa-eye login-eye-icon"></i>
                )}
              </div> */}
            </div>
            <div className="forgot-password">
              <Link className="forgot-text" to={"/forgot-password"}>
               {t("login.forget_password")}
              </Link>
            </div>
            <button
              type="submit"
              className="login-btn"
              onClick={(e) => loginHandler(e)}
            >
              {t("login.login")}
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
