import React, { useState, useEffect } from "react";
import "./Employees.scss";
import TableData from "../../Components/TableData/TableData";
import hawlakServices from "../../services/hawlakServices";
import EditEmployee from "../../Pages/EditEmployee/EditEmployee";
import GeneralModal from "../Modal/Modal";
import { NavLink, useNavigate } from "react-router-dom";
import { t } from "i18next";
import i18n from "../Localize/i18n";
import BackButton from '../BackButton/BackButton';
export default function Employees() {
  const [allEmployees, setAllEmployees] = useState([]);
  const navigate = useNavigate();
  const [currentEditingEmployee, setCurrentEditingEmployee] = useState({});
  const [modalVisable, setModalVisable] = useState(false);
  const lang = i18n.language;
  const [activePage, setactivePage] = useState(1);
  const [itemsCount, setItemsCount] = useState(0);
  const handlePageChange = (pageNumber) => {
    setactivePage(pageNumber);
  };
  function handleRowClick(tableRow) {
    navigate(`/employee-details/${tableRow.id}`);
    console.log(tableRow, "hhhhhhhhhhhhhhh");
  }
  async function allEmployeesHandler() {
    try {
      let { data: employee } = await hawlakServices.getAllEmployees();
      console.log(employee, "dataaaaaaaaaaaaaaaaaaaaaaa");
      let formatedEmployees = employee.results.map((employee) => {
        return {
          user: {
            email: employee.email,
            username: employee.userName,
            password: employee.password,
          },
          position: {
            start_date: employee.startDate,
            manager: employee.manager,
            job_title: employee.jobTitle,
            contract_type: employee.contractType,
          },
          id: employee.id,
          emp_name_en: employee.emp_name_en,
          emp_name_ar: employee.emp_name_ar,
          phone: employee.phone,
          mobile: employee.mobile,
          date_of_birth: employee.dateOfBirth,
          hiredate: employee.hireDate,
          place_of_birth_en: employee.place_of_birth_en,
          place_of_birth_ar: employee.place_of_birth_ar,
          identification_type_en: employee.idTypeEN,
          identification_type_ar: employee.idTypeAR,
          identification_number: employee.idNumber,
          nationality_en: employee.nationalityEN,
          nationality_ar: employee.nationalityAR,
          address1: employee.addressOne,
          address2: employee.addressTwo,
          field_of_study_en: employee.fieldOfStudyEN,
          field_of_study_ar: employee.fieldOfStudyAR,
          education_degree_en: employee.educationDegreeEN,
          education_degree_ar: employee.educationDegreeAR,
          gender_en: employee.genderEN,
          gender_ar: employee.genderAR,
          social_status_en: employee.socialStatusEN,
          social_status_ar: employee.socialStatusAR,
          religion_en: employee.religionEN,
          religion_ar: employee.religionAR,
          bank_name_en: employee.bankNameEN,
          bank_name_ar: employee.bankNameAR,
          iban: employee.iban,          
          branch: employee.branch,
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
      setItemsCount(employee.count)
    } catch (err) {}
  }
  useEffect(() => {
    allEmployeesHandler();
  }, [activePage]);
  return (
    <div className="container">
      <BackButton />
      <div className='btn-section'>
      <NavLink to="/add-employee"><button className='add-employee-btn'>{t("employees.add_employee")}</button></NavLink>
    </div> 
      {modalVisable && (
        <GeneralModal>
          <EditEmployee
            currentEmployee={currentEditingEmployee}
            setCurrentEditingEmployee={setCurrentEditingEmployee}
            setModalVisable={setModalVisable}
          />
        </GeneralModal>
      )};
      <>
      {lang === "en"?(
         <TableData
         handleRowClick={handleRowClick}
         tableHeaders={[
           "emp_name_en",           
           "phone",
           "mobile",
           "place_of_birth_en",               
           "edit",
         ]}
         tableRows={allEmployees}
         showPagination={true}
         handlePageChange={handlePageChange}
         activePage={activePage}
         itemsCount={itemsCount}
       />
      ):(
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
      </>      
    </div>
  );
}
