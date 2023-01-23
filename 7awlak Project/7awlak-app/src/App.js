import React from "react"

import "./App.css";

import AddCompany from "./Pages/AddCompany/AddCompany";
import AddBranch from "./Pages/AddBranch/AddBranch";
import Forgotpassword from "./Pages/Forgotpassword/Forgotpassword";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
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


function App() {
  const auth = useSelector((state) => state.auth);
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
