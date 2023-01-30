import React from "react";
import "./Layout.scss";
import { Routes, Route, Navigate } from "react-router-dom";

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
import Employees from "../Employees/Employees";
import CompanyDetails from '../../Pages/CompanyDetails/CompanyDetails';
import BranchesDetails from '../../Pages/BranchesDetails/BranchesDetails';
import DepartmentDetails from '../../Pages/DepartmentDetails/DepartmentDetails';
import EmployeeDetails from '../../Pages/EmployeeDetails/EmployeeDetails';
import Footer from './../Footer/Footer';

export default function Layout() {
  return (
    <>
      <div className="layout">
        <NavBar className="navbar" />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/*" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />            
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/edit-company" element={<EditCompany/>} />
            <Route path="/add-company" element={<AddCompany />} />
            <Route path="/add-branch" element={<AddBranch />} />
            <Route path="/add-department" element={<AddDepartment />} />
            <Route path="/add-employee" element={<AddEmployee />} /> 
            <Route path="/companies" element={<Companies />} />            
            <Route path="/branches" element={<Branches />} /> 
            <Route path="/departments" element={<Departments />} />
            <Route path="/employees" element={<Employees />} /> 
            <Route path="/company-details/:companyId" element={<CompanyDetails />} /> 
            <Route path="/branch-details/:branchId" element={<BranchesDetails />} />    
            <Route path="/department-details/:departmentId" element={<DepartmentDetails />} /> 
            <Route path="/employee-details/:employeeId" element={<EmployeeDetails />} />             
            </Routes>
        </div>
        {/* <Footer className="footer" /> */}
      </div>
    </>
  );
}
