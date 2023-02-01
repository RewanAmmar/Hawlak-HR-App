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
  const [activePage, setActivePage] = useState(1);
  const [itemsCount, setItemsCount] = useState(0);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  function handleRowClick(tableRow) {
    navigate(`/company-details/${tableRow.id}`);
    console.log(tableRow, "hhhhhhhhhhhhhhh");
  }
  async function allCompaniesHandler() {
    try {
      let { data: company } = await hawlakServices.getAllCompanies(activePage);
      console.log(company.count, "dataaaaaaaaaaaaaaaaaaaaaaa");
      let formatedCompanies = company.results.map((company) => {
        return {
          id: company.id,
          company_name_en: company.company_name_en,
          company_name_ar: company.company_name_ar,
          tax_num: company.tax_num,
          phone: company.phone,
          mobile: company.mobile,
          fax: company.fax,
          email: company.email,
          number_of_employees: company.number_of_employees,
          creation_date: company.creation_date,
          is_active: company.is_active,
          edit: (
            <button
              className="edit-company-btn"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentEditingCompany(company);
                setModalVisable(true);
              }}
            >
              {t("table.edit")}
            </button>
          ),
        };
      });
      console.log(company.results, "All companies");
      setAllCompanies(formatedCompanies);
      setItemsCount(company.count);
    } catch (err) {}
  }
  useEffect(() => {
    allCompaniesHandler();
  }, [activePage]);
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
            showPagination={true}
            handlePageChange={handlePageChange}
            activePage={activePage}
            itemsCount={itemsCount}
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
            showPagination={true}
            handlePageChange={handlePageChange}
            activePage={activePage}
            itemsCount={itemsCount}
          />
        )}
           
    </div>
  );
}
