import React, { useState } from "react";
import "./Forgotpassword.scss";
import forgot from "../../assets/forgot.webp";
import { Link } from "react-router-dom";
import toastPopup from "../../Helpers/Toast";
import hawlakServices from "../../services/hawlakServices";
import { useTranslation } from "react-i18next";
export default function Forgotpassword() {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  async function verifyEmailHandler() {
    if (email === "") {
      toastPopup("error", t("forgetPassword.empty_email"));
    } else {
      const dataEmail = { email: email };
      try {
        let { data } = await hawlakServices.verifyEmail(dataEmail);

        toastPopup("success", t("forgetPassword.email_sent"));
      } catch (err) {
        toastPopup("error", t("login.correct_data"));
      }
    }
  }
  return (
    <div className="forgot-container">
      <div className="forgot">
        <div className="forgot-form">
          <h1 className="forgot-header">{t("forgetPassword.forgotpassword")}</h1>
          <form>
            <div className="input-div">
              <i class="fa-solid fa-envelope icon"></i>
              <input
                type="text"
                placeholder="Email"
                className="forgot-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="forgot-btn" onClick={() => verifyEmailHandler()}>
              {t("forgetPassword.send")}
            </button>
            <Link to={"/login"}>
              <button className="login-text">{t("forgetPassword.back")}</button>
            </Link>            
          </form>
        </div>
        <div className="content">
          <img src={forgot} alt="" className="forgot-image" />
        </div>
      </div>
    </div>
  );
}
