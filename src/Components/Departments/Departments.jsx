import React, { useState, useEffect } from "react";
import "./Departments.scss";
import { useNavigate, NavLink } from "react-router-dom";
import TableData from "../../Components/TableData/TableData";
import hawlakServices from "../../services/hawlakServices";
import GeneralModal from "./../Modal/Modal";
import EditDepartment from "../../Pages/EditDepartment/EditDepartment";
import { t } from "i18next";
import i18n from "../Localize/i18n";
import BackButton from "../BackButton/BackButton";
export default function Departments() {
  const navigate = useNavigate();
  const lang = i18n.language;
  const [allDepartments, setAllDepartments] = useState([]);
  const [currentEditingDepartment, setCurrentEditingDepartment] = useState({});
  const [activePage, setActivePage] = useState(1);
  const [itemsCount, setItemsCount] = useState(0);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  function handleRowClick(tableRow) {
    navigate(`/department-details/${tableRow.id}`);    
  }
  const [modalVisable, setModalVisable] = useState(false)

  async function allDepartmentsHandler() {
    try {
      let { data: department } = await hawlakServices.getAllDepartments(
        activePage
      );
      setItemsCount(department.count);
      console.log(department, "dataaaaaaaaaaaaaaaaaaaaaaa");
      let formatedDepartments = department.results.map((department) => {
        return {
          id: department.id,
          department_name_en: department.department_name_en,
          department_name_ar: department.department_name_ar,
          branch_name_en: department.branch_name_en,
          branch_name_ar: department.branch_name_ar,
          number_of_employees: department.number_of_employees,
          branch: department.branch,
          creation_date: department.creation_date,
          is_active: department.is_active,
          edit: (
            <button
              className="edit-department-btn"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentEditingDepartment(department);
                setModalVisable(true);
              }}
            >
              {t("table.edit")}
            </button>
          ),
        };
      });
      setAllDepartments(formatedDepartments);
    } catch (err) {}
  }
  useEffect(() => {
    allDepartmentsHandler();
  }, [activePage]);

  return (
    <div className="container">
      <BackButton />
      <div className="btn-section">
        <NavLink to="/add-department">
          <button className="add-department-btn">
            {t("departments.add_department")}
          </button>
        </NavLink>
      </div>
      {modalVisable && (
        <GeneralModal>
          <EditDepartment
            currentDepartment={currentEditingDepartment}
            setCurrentEditingDepartment={setCurrentEditingDepartment}
            setModalVisable={setModalVisable}
          />
        </GeneralModal>
      )}

      {lang === "en" ? (
        <TableData
          handleRowClick={handleRowClick}
          tableHeaders={[
            "department_name_en",
            "branch_name_en",
            "number_of_employees",
            "branch",
            "creation_date",
            "edit",
          ]}
          tableRows={allDepartments}
          showPagination={true}
          handlePageChange={handlePageChange}
          activePage={activePage}
          itemsCount={itemsCount}
        />
      ) : (
        <TableData
          handleRowClick={handleRowClick}
          tableHeaders={[
            "department_name_ar",
            "branch_name_ar",
            "number_of_employees",
            "branch",
            "creation_date",
            "edit",
          ]}
          tableRows={allDepartments}
          showPagination={true}
          handlePageChange={handlePageChange}
          activePage={activePage}
          itemsCount={itemsCount}
        />
      )}
    </div>
  );
}
