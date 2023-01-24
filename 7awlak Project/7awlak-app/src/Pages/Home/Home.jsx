import React, { useState, useEffect } from "react";

import "./Home.scss";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { authActions } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
import hawlakServices from "../../services/hawlakServices";
import TableData from "../../Components/TableData/TableData";
import { t } from "i18next";
export default function Home() {
  const [companyCount, setCompanyCount] = useState({});
  const [allCompanies, setAllCompanies] = useState([]);
  const [branchCount, setBranchCount] = useState({});
  const [departmentCount, setDepartmentCount] = useState({});
  const [employeeCount, setEmployeeCount] = useState({});
  ChartJS.register(ArcElement, Tooltip, Legend);
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    dispatch(authActions.logout());
  };
  const data = {
    labels: ["Companies", "Branches", "Departments", "Employees"],
    datasets: [
      {        
        data: [
          companyCount.count,
          branchCount.count,
          departmentCount.count,
          employeeCount.count,
        ],
        backgroundColor: [
          "rgb(202, 235, 246)",
          "rgb(21, 155, 200)",
          "rgb(155, 218, 239)",
          "rgb(44, 135, 165)",
        ],
        borderColor: [
          "rgb(202, 235, 246)",
          "rgb(21, 155, 200)",
          "rgb(155, 218, 239)",
          "rgb(44, 135, 165)",
        ],
        borderWidth: 1,
        options: { responsive: true },
      },
    ],
  };
  async function allCompaniesHandler() {
    try {
      let { data: company } = await hawlakServices.getAllCompanies();
      console.log(company.count, "dataaaaaaaaaaaaaaaaaaaaaaa");
      let formatedCompanies = company.results.map((item) => {
        return {
          id: item.id,
          company_name_en: item.company_name_en,
          company_name_ar: item.company_name_ar,
          tax_num: item.tax_num,
          phone: item.phone,
          mobile: item.mobile,
          fax: item.fax,
          email: item.email,
          number_of_employees: item.number_of_employees,
          creation_date: moment(item.creation_date).format("dddd DD/MM/YYYY"),
          is_active: item.is_active,
        };
      });
      setCompanyCount(company);
      setAllCompanies(formatedCompanies);
    } catch (err) {}
  }
  async function allEmployeesHandler() {
    try {
      let { data: employee } = await hawlakServices.getAllEmployees();
      console.log(employee.count, "dataaaaaaaaaaaaaaaaaaaaaaa");

      setEmployeeCount(employee);
    } catch (err) {}
  }
  async function allBranchesHandler() {
    try {
      let { data: branch } = await hawlakServices.getAllBranches();
      console.log(branch.count, "dataaaaaaaaaaaaaaaaaaaaaaa");

      setBranchCount(branch);
    } catch (err) {}
  }
  async function allDepartmentsHandler() {
    try {
      let { data: department } = await hawlakServices.getAllDepartments();
      console.log(department.count, "dataaaaaaaaaaaaaaaaaaaaaaa");

      setDepartmentCount(department);
    } catch (err) {}
  }
  useEffect(() => {
    allCompaniesHandler();
    allEmployeesHandler();
    allDepartmentsHandler();
    allBranchesHandler();
  }, []);
  return (
    <>
      <div className="container">
        <div className="navigation">
          <ul className="navigation-ul">
            {/* <li className="navigation-li">
              <NavLink to="/home" className="link">
                <span className="icon">
                  <i class="fa-solid fa-house link-icon"></i>
                </span>
                <span className="title">{t("navbar.home")}</span>
              </NavLink>
            </li> */}
            <li className="navigation-li">
              <NavLink to="/companies" className="link">
                <span className="icon">
                  <i class="fa-solid fa-building link-icon"></i>
                </span>
                <span className="title">{t("navbar.companies")}</span>
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/branches" className="link">
                <span className="icon">
                  <i class="fa-solid fa-code-branch link-icon"></i>
                </span>
                <span className="title">{t("navbar.branches")}</span>
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/departments" className="link">
                <span className="icon">
                  <i class="fa-solid fa-bars link-icon"></i>
                </span>
                <span className="title">{t("navbar.departments")}</span>
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/employees" className="link">
                <span className="icon">
                  <i class="fa-solid fa-people-group link-icon"></i>
                </span>
                <span className="title">{t("navbar.employees")}</span>
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/reset-password" className="link">
                <span className="icon">
                  <i class="fa-sharp fa-solid fa-gear link-icon"></i>
                </span>
                <span className="title">{t("navbar.reset_password")}</span>
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/login" className="link">
                <span className="icon">
                  {" "}
                  <i class="fa-solid fa-lock link-icon"></i>
                </span>
                <span
                  className="title"
                  onClick={(e) => {
                    e.preventDefault();
                    logoutHandler();
                  }}
                >
                  {t("navbar.logout")}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="main">
          <div className="topbar">
            {/* <div className="toggle" onClick={() => setShow(!show)}>
              <i class={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
            </div> */}
            <div className="search">
              <label className="search-label">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
              </label>
            </div>
          </div>
          <div className="card-box">
            <div className="card">
              <div>
                <div className="number">{companyCount.count}</div>
                <div className="name">{t("navbar.companies")}</div>
              </div>
              <div className="icon-card">
                <i class="fa-solid fa-building link-icon"></i>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="number">{branchCount.count}</div>
                <div className="name">{t("navbar.branches")}</div>
              </div>
              <div className="icon-card">
                <i class="fa-solid fa-code-branch link-icon"></i>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="number">{departmentCount.count}</div>
                <div className="name">{t("navbar.departments")}</div>
              </div>
              <div className="icon-card">
                <i class="fa-solid fa-bars link-icon"></i>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="number">{employeeCount.count}</div>
                <div className="name">{t("navbar.employees")}</div>
              </div>
              <div className="icon-card">
                <i class="fa-solid fa-people-group link-icon"></i>
              </div>
            </div>
          </div>
          <div class="details">
            <div class="recent-data">
              <div class="card-header">
                <h2 className="main-header">Companies Data</h2>
                <a href="#" class="btn">
                  View All
                </a>
              </div>
              <div className="data-table">
              <TableData
                tableHeaders={[
                  "company_name_en",
                  "company_name_ar",
                  "tax_num",
                  "phone",
                  "mobile",
                  "fax",
                  "email",
                  // "number_of_employees",
                  // "creation_date",
                  
                ]}
                tableRows={allCompanies}
              />
              </div>
            </div>
            <div className="right-data">
              <Pie data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
