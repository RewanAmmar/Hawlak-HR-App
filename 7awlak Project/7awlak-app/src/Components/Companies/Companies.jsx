import React, { useState, useEffect } from "react";
import "./Companies.scss";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import TableData from "../../Components/TableData/TableData";
import hawlakServices from "../../services/hawlakServices";
import EmptyTable from "./../../Components/TableData/EmptyTable/EmptyTable";
import { NavLink } from "react-router-dom";
import GeneralModal from "./../Modal/Modal";
import i18n from "../Localize/i18n";
import { t } from "i18next";
import EditCompany from "../../Pages/EditCompany/EditCompany";
import BackButton from '../BackButton/BackButton';
export default function Companies() {
  const [allCompanies, setAllCompanies] = useState([]);
  const navigate = useNavigate();
  const [currentEditingCompany, setCurrentEditingCompany] = useState({});
  const [modalVisable, setModalVisable] = useState(false);
  const lang = i18n.language;
  function handleRowClick(tableRow) {
    navigate(`/company-details/${tableRow.id}`);
    console.log(tableRow, "hhhhhhhhhhhhhhh");
  }
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
          creation_date: item.creation_date,
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
      <BackButton />
      <div className="btn-section">
        <NavLink to="/add-company">
          <button className="add-company-btn">{t("companies.add_company")}</button>
        </NavLink>
      </div>
      {modalVisable && (
        <GeneralModal>
          <EditCompany
            currentCompany={currentEditingCompany}
            setCurrentEditingCompany={setCurrentEditingCompany}
            setModalVisable={setModalVisable}
          />
        </GeneralModal>
      )}
      <>
        {lang === "en" ? (
          <TableData
            handleRowClick={handleRowClick}
            tableHeaders={[
              "company_name_en",
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
        ) : (
          <TableData
            handleRowClick={handleRowClick}
            tableHeaders={[
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
        )}
      </>
     
    </div>
  );
}
