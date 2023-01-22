import React, { useState, useEffect } from "react";
import "./Companies.scss";
import moment from "moment";
import TableData from "../../Components/TableData/TableData";
import hawlakServices from "../../services/hawlakServices";
import EmptyTable from "./../../Components/TableData/EmptyTable/EmptyTable";
import { NavLink } from "react-router-dom";
import GeneralModal from './../Modal/Modal';
import EditDepartment from './../../Pages/EditDepartment/EditDepartment';
export default function Companies() {
  const [allCompanies, setAllCompanies] = useState([]);
  const [currentEditingCompanies, setCurrentEditingCompanies] = useState({});
  const [modalVisable, setModalVisable] = useState(false);
  async function allCompaniesHandler() {
    try {
      let { data } = await hawlakServices.getAllCompanies();
      console.log(data, "dataaaaaaaaaaaaaaaaaaaaaaa");
      let formatedCompanies = data.results.map((item) => {
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
          Edit: (
            
              <button
                className="edit-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentEditingCompanies(item);
                  setModalVisable(true);
                }}
              >
                Edit
              </button>
           
          ),
        };
      });
      console.log(data.results, "All companies");
      setAllCompanies(formatedCompanies);
    } catch (err) {}
  }
  useEffect(() => {
    allCompaniesHandler();
  }, []);
  return (
    <div className="container">
      {modalVisable && (
        <GeneralModal>
          <EditDepartment
            currentDepartment={currentEditingCompanies}
            setCurrentEditingDepartment={setCurrentEditingCompanies}
            setModalVisable={setModalVisable}
          />
        </GeneralModal>
      )}
      <TableData
        tableHeaders={[
          "company_name_en",
          "company_name_ar",
          "tax_num",
          "phone",
          "mobile",
          "fax",
          "email",
          "number_of_employees",
          "creation_date",
          "Edit",
        ]}
        tableRows={allCompanies}
      />
    </div>
  );
}
