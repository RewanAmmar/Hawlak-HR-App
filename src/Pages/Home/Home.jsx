import React, { useState, useEffect } from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import hawlakServices from "../../services/hawlakServices";
import TableData from "../../Components/TableData/TableData";
import { t } from "i18next";

export default function Home() {
  const [allCompanies, setAllCompanies] = useState([]);
  const [companyCount, setCompanyCount] = useState({});  
  const [branchCount, setBranchCount] = useState({});
  const [departmentCount, setDepartmentCount] = useState({});
  const [employeeCount, setEmployeeCount] = useState({});
  const [activePage, setActivePage] = useState(1);
  const [itemsCount, setItemsCount] = useState(0);

const handlePageChange = (pageNumber) => {
  setActivePage(pageNumber)
}
  ChartJS.register(ArcElement, Tooltip, Legend);

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
      let { data: company } = await hawlakServices.getAllCompanies(activePage); 
      setItemsCount(company.count)     
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
          creation_date: item.creation_date,
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

      setEmployeeCount(employee);
    } catch (err) {}
  }
  async function allBranchesHandler() {
    try {
      let { data: branch } = await hawlakServices.getAllBranches();     

      setBranchCount(branch);
    } catch (err) {}
  }
  async function allDepartmentsHandler() {
    try {
      let { data: department } = await hawlakServices.getAllDepartments();      

      setDepartmentCount(department);
    } catch (err) {}
  }
  useEffect(() => {
    allCompaniesHandler();
    allEmployeesHandler();
    allDepartmentsHandler();
    allBranchesHandler();
  }, [activePage]);
  return (
    <>
      <div className="container">
        <div className="navigation">
          <ul className="navigation-ul">
         
            <li className="navigation-li">
              <NavLink to="/companies" className="link">
                <span className="icon">
                <span className="title">{t("navbar.companies")}</span>
                  <i class="fa-solid fa-building link-icon"></i>                  
                </span>                
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/branches" className="link">
                <span className="icon">
                <span className="title">{t("navbar.branches")}</span>
                  <i class="fa-solid fa-code-branch link-icon"></i>                 
                </span>                
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/departments" className="link">
                <span className="icon">
                <span className="title">{t("navbar.departments")}</span>
                  <i class="fa-solid fa-bars link-icon"></i>                 
                </span>               
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/employees" className="link">
                <span className="icon">
                <span className="title">{t("navbar.employees")}</span>
                  <i class="fa-solid fa-people-group link-icon"></i>              
                </span>                
              </NavLink>
            </li>
            <li className="navigation-li">
              <NavLink to="/reset-password" className="link">
                <span className="icon">
                <span className="title">{t("navbar.reset_password")}</span>
                  <i class="fa-sharp fa-solid fa-gear link-icon"></i>                 
                </span>               
              </NavLink>
            </li>
      
          </ul>
        </div>
        <div className="main">
          <div className="topbar">          
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
                <h2 className="main-header">{t("navbar.companies")}</h2>                
              </div>
              <div className="data-table">
              <TableData
                tableHeaders={[
                  "company_name_en",
                  "company_name_ar",
                  "tax_num",
                  "phone",
                  "mobile",                  
                  "email",
                  "creation_date"              
                  ]}
                tableRows={allCompanies}
                showPagination={true}
                handlePageChange={handlePageChange}
                activePage={activePage}
                itemsCount={itemsCount}
              />
              </div>
            </div>
            <div className="right-data">
              <Pie data={data}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
