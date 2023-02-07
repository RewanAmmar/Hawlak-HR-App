import React, { useState, useEffect } from "react";
import "./Employees.scss";
import TableData from "../../Components/TableData/TableData";
import hawlakServices from "../../services/hawlakServices";
import EditEmployee from "../../Pages/EditEmployee/EditEmployee";
import GeneralModal from "../Modal/Modal";
import { NavLink, useNavigate } from "react-router-dom";
import { t } from "i18next";
import i18n from "../Localize/i18n";
import BackButton from "../BackButton/BackButton";
export default function Employees() {
  const [allEmployees, setAllEmployees] = useState([]);
  const navigate = useNavigate();
  const [currentEditingEmployee, setCurrentEditingEmployee] = useState({});
  const [modalVisable, setModalVisable] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [itemsCount, setItemsCount] = useState(0);
  const lang = i18n.language;

 const handlePageChange = (pageNumber) => {
  setActivePage(pageNumber)
 }

  function handleRowClick(tableRow) {
    navigate(`/employee-details/${tableRow.id}`);    
  }

  async function allEmployeesHandler() {
    try {
      let { data: employee } = await hawlakServices.getAllEmployees(activePage);
      console.log(employee, "dataaaaaaaaaaaaaaaaaaaaaaa");
      let formatedEmployees = employee.results.map((employee) => {
        return {
          user: {
            email: employee.email,
            username: employee.username,
            password: employee.password,
          },
          position: {
            start_date: employee.start_date,
            manager: employee.manager,
            job_title: employee.job_title,
            contract_type: employee.contract_type,
          },
          id: employee.id,
          emp_name_en: employee.emp_name_en,
          emp_name_ar: employee.emp_name_ar,
          phone: employee.phone,
          mobile: employee.mobile,
          date_of_birth: employee.date_of_birth,
          hiredate: employee.hireDate,
          place_of_birth_en: employee.place_of_birth_en,
          place_of_birth_ar: employee.place_of_birth_ar,
          identification_type_en: employee.identification_type_en,
          identification_type_ar: employee.identification_type_ar,
          identification_number: employee.identification_number,
          nationality_en: employee.nationality_en,
          nationality_ar: employee.nationality_ar,
          address1: employee.address1,
          address2: employee.address2,
          field_of_study_en: employee.field_of_study_en,
          field_of_study_ar: employee.field_of_study_ar,
          education_degree_en: employee.education_degree_en,
          education_degree_ar: employee.education_degree_ar,
          gender_en: employee.gender_en,
          gender_ar: employee.gender_ar,
          social_status_en: employee.social_status_en,
          social_status_ar: employee.social_status_ar,
          religion_en: employee.religion_en,
          religion_ar: employee.religion_ar,
          bank_name_en: employee.bank_name_en,
          bank_name_ar: employee.bank_name_ar,
          iban: employee.iban,
          branch: employee.branch,
          creation_date: employee.creation_date,
          edit: (
            <button
              className="edit-employee-btn"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentEditingEmployee(employee);
                setModalVisable(true);
              }}
            >
              {t("table.edit")}
            </button>
          ),
        };
      });
      console.log(employee.results, "All departments");
      setAllEmployees(formatedEmployees);
      setItemsCount(employee.count);
    } catch (err) {}
  }
  useEffect(() => {
    allEmployeesHandler();
  }, [activePage]);

  return (
    <div className="container">
      <BackButton />
      <div className="btn-section">
        <NavLink to="/add-employee">
          <button className="add-employee-btn">
            {t("employees.add_employee")}
          </button>
        </NavLink>
      </div>
      {modalVisable && (
        <GeneralModal>
          <EditEmployee
            currentEmployee={currentEditingEmployee}
            setCurrentEditingEmployee={setCurrentEditingEmployee}
            setModalVisable={setModalVisable}
          />
        </GeneralModal>
      )}
      
     
        {lang === "en" ? (
          <TableData
            handleRowClick={handleRowClick}
            tableHeaders={[
              "emp_name_en",             
              "phone",
              "mobile",
              "place_of_birth_en",
              "creation_date",
              "edit",
            ]}
            tableRows={allEmployees}
            showPagination={true}
            handlePageChange={handlePageChange}
            activePage={activePage}
            itemsCount={itemsCount}
          />
        ) : (
          <TableData
            handleRowClick={handleRowClick}
            tableHeaders={[
              "emp_name_ar",
              "phone",
              "mobile",
              "place_of_birth_ar",
              "edit",
            ]}
            tableRows={allEmployees}
            showPagination={true}
            handlePageChange={handlePageChange}
            activePage={activePage}
            itemsCount={itemsCount}
          />
        )}
      
    </div>
  );
}
