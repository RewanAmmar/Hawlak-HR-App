import React, { useEffect } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { useSelector } from "react-redux";
import Login from "./Pages/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkFixLang } from "./Components/Localize/lang";
import i18n from "./Components/Localize/i18n";
import Forgotpassword from "./Pages/Forgotpassword/Forgotpassword";

function App() {
  const lang = i18n.language;
  const auth = useSelector((state) => state.auth);
  checkFixLang(lang);

  useEffect(() => {
    checkFixLang(lang);
  }, [lang]);
  console.log(auth);
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route path="/*" element={<ProtectedRoute />} />
          <Route
            path="/login"
            element={auth.key ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/forgot-password" element={<Forgotpassword />} />
        </Routes>
      </React.Fragment>
      <ToastContainer />
    </div>
  );
}

export default App;
