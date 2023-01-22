import React from "react";
import "./Layout.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Forgotpassword from "./../../Pages/Forgotpassword/Forgotpassword";
import NavBar from "./../NavBar/NavBar";
import AddCompany from './../../Pages/AddCompany/AddCompany';
import AddBranch from './../../Pages/AddBranch/AddBranch';
import AddDepartment from './../../Pages/AddDepartment/AddDepartment';

import AddEmployee from './../../Pages/AddEmployee/AddEmployee';
import Home from '../../Pages/Home/Home';
import Companies from '../Companies/Companies';
import Branches from '../../Components/Branches/Branches';
import Departments from "../Departments/Departments";
import ResetPassword from "../../Pages/ResetPassword/ResetPassword";
import EditCompany from "../../Pages/EditCompany/EditCompany";

export default function Layout() {
  return (
    <>
      <div className="layout">
        <NavBar className="navbar" />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/*" element={<Navigate to={"/home"} />} />
            <Route path="home" element={<Home />} />
            <Route path="/forgot-password" element={<Forgotpassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/edit-company" element={<EditCompany/>} />
            <Route path="/add-company" element={<AddCompany />} />
            <Route path="/add-branch" element={<AddBranch />} />
            <Route path="/add-department" element={<AddDepartment />} />
            <Route path="/add-employee" element={<AddEmployee />} /> 
            <Route path="/companies" element={<Companies />} />            
            <Route path="/branches" element={<Branches />} /> 
            <Route path="/departments" element={<Departments />} />            


          </Routes>
        </div>
        {/* <Footer className="footer" /> */}
      </div>
    </>
  );
}
