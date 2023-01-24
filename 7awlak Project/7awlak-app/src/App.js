import React,{useEffect} from "react"

import "./App.css";

import AddCompany from "./Pages/AddCompany/AddCompany";
import AddBranch from "./Pages/AddBranch/AddBranch";
import Forgotpassword from "./Pages/Forgotpassword/Forgotpassword";
import Home from "./Pages/Home/Home";

import AddDepartment from "./Pages/AddDepartment/AddDepartment";
import { BrowserRouter as Navigate, Routes, Route } from "react-router-dom";
import AddEmployee from "./Pages/AddEmployee/AddEmployee";
import NavBar from "./Components/NavBar/NavBar";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Footer from "./Components/Footer/Footer";
import ResetPassword from './Pages/ResetPassword/ResetPassword';

import { useSelector } from "react-redux";
import Companies from './Components/Companies/Companies';
import Login from './Pages/Login/Login';
import { checkFixLang } from './Components/Localize/lang';
import i18n from './Components/Localize/i18n';


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
            element={auth?.key ? <Navigate to="/" /> : <Login />}
          />
          
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
