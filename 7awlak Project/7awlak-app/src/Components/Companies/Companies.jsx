import React, { useState, useEffect } from "react";
import "./Companies.scss";
import moment from "moment";
import { useNavigate } from "react-router-dom"
import TableData from "../../Components/TableData/TableData";
import hawlakServices from "../../services/hawlakServices";
import EmptyTable from "./../../Components/TableData/EmptyTable/EmptyTable";
import { NavLink } from "react-router-dom";
import GeneralModal from './../Modal/Modal';
import EditDepartment from './../../Pages/EditDepartment/EditDepartment';
import { t } from 'i18next';
import EditCompany from "../../Pages/EditCompany/EditCompany";
export default function Companies() {
  const [allCompanies, setAllCompanies] = useState([]);
  const navigate = useNavigate()
  const [currentEditingCompany, setCurrentEditingCompany] = useState({});
  const [modalVisable, setModalVisable] = useState(false);
  
  function handleRowClick(tableRow) {
    navigate(`/company-details/${tableRow.id}`);
    console.log(tableRow, "hhhhhhhhhhhhhhh");
  }
  async function allCompaniesHandler() {
    try {
      let { data: company } = await hawlakServices.getAllCompanies();
      console.log(company, "dataaaaaaaaaaaaaaaaaaaaaaa");
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
          edit: (
            
              <button
                className="edit-company-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentEditingCompany(item);
                  setModalVisable(true);
                }}
              >
                {t("edit")}
              </button>
           
          ),
        };
      });
      console.log(company.results, "All companies");
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
          <EditCompany
            currentCompany={currentEditingCompany}
            setCurrentEditingCompany={setCurrentEditingCompany}
            setModalVisable={setModalVisable}
          />
        </GeneralModal>
      )}
      <TableData
      handleRowClick={handleRowClick}
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
          "edit",
        ]}
        tableRows={allCompanies}
      />
    </div>
  );
}
