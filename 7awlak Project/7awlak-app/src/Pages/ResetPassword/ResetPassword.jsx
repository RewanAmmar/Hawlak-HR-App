import React, { useState } from "react";
import "./ResetPassword.scss";
import resetpassword from "../../assets/resetpassword.webp";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import toastPopup from "../../Helpers/Toast";
import hawlakServices from "../../services/hawlakServices";
import Spinner from '../../Components/Spinner/Spinner';

export default function ResetPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function resetPassword() {
    const data = {
      old_password: oldPassword,
      new_password: newPassword,
      confirm_password: confirmPassowrd,
    };
    if (oldPassword === "") {
      toastPopup("error", t("resetpassword.enter_old_password"));     
    } else if (newPassword === "") {
      toastPopup("error", t("resetpassword.enter_new_password"));      
    } else if (confirmPassowrd === "") {
      toastPopup("error", t("resetpassword.enter_confirm_password"));     
    } else if (newPassword !== confirmPassowrd) {
      toastPopup("error", t("resetpassword.password_not_match"));     
    }
    try {
      setLoading(true);
      const { data: resetData } = await hawlakServices.resetPassword(data);
      toastPopup("success", t("resetPassword.changing_password"));
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      toastPopup("error", t("resetpassword.correct_password"))
    }
  }
  return (
    <div>
      {loading && <Spinner/>}
    <div className="reset-passowrd-container">
      <div className="reset-passowrd">
        <div className="content">          
          <img src={resetpassword} alt="" className="reset-passowrd-image" />
        </div>
        <div className="reset-passowrd-form">
          <h1 className="reset-passowrd-header">
            {t("resetpassword.reset_password")}
          </h1>
          <form>
            <div className="input-div">
              <i class="fa-solid fa-lock icon"></i>
              <input
                type="password"
                placeholder="Old Password"
                className="reset-passowrd-input"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="input-div">
              <i class="fa-solid fa-lock icon"></i>
              <input
                type="password"
                placeholder="New Password"
                className="reset-passowrd-input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="input-div">
              <i class="fa-solid fa-lock icon"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                className="reset-passowrd-input"
                value={confirmPassowrd}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="reset-password-btn"
              onClick={() => resetPassword()}
            >
              {t("resetpassword.confirm")}
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
