import React, { useEffect, useState } from "react";
import "./CompanyDetails.scss";
import { useParams } from "react-router-dom";
import hawlakServices from "../../services/hawlakServices";
import BackButton from "../../Components/BackButton/BackButton";
import i18n from "../../Components/Localize/i18n";
import { t } from "i18next";
export default function CompanyDetails() {
  const params = useParams();
  const companyId = params.companyId;
  const lang = i18n.language;
  const [company, setCompany] = useState([]);
  console.log(company, "company companyy");
  useEffect(() => {
    getInitialListsHandler();
  }, []);

  async function getInitialListsHandler() {
    try {
      const { data: CompanyDetails } = await hawlakServices.getCompanyDetails(
        companyId
      );
      console.log(CompanyDetails, "detailllllllllllllllllllls");

      setCompany(CompanyDetails);
    } catch (error) {}
  }
  return (
    <div className="company-container">
      <BackButton />
      <div className="company-content">
        <form className="company-card">
          <div className="form-header">
            <i className="fa-solid fa-building company-icon"></i>
            <p className="title">{t("navbar.companies")}</p>
          </div>
          <div className="form-inputs-container">
            <div className="container">
              <div className="left-side">
                {lang === "en" ? (
                  <div className="company-input-container">
                    <label htmlFor="company-name" className="company-label">
                      Company Name
                    </label>

                    <div
                      id="company-name"
                      name="company-name"
                      placeholder="Company Name"
                      className="add-department-name"
                    >
                      {company?.company_name_en}
                    </div>
                  </div>
                ) : (
                  <div className="company-input-container">
                    <label htmlFor="company-name-ar" className="company-label">
                      ????????????
                    </label>

                    <div
                      name="company-name-ar"
                      type="text"
                      id="company-name-ar"
                      placeholder="?????? ????????????"
                      className="add-department-name"
                    >
                      {company?.company_name_ar}
                    </div>
                  </div>
                )}

                <div className="company-input-container">
                  <label htmlFor="tax-number" className="company-label">
                    {t("companies.phone")}
                  </label>

                  <div
                    name="tax-number"
                    type="text"
                    id="tax-number"
                    placeholder="Tax Number"
                    className="add-department-name"
                  >
                    {company?.phone}
                  </div>
                </div>
                <div className="company-input-container">
                  <label htmlFor="email" className="company-label">
                    {t("companies.mobile")}
                  </label>

                  <div
                    name="email"
                    type="text"
                    id="email"
                    placeholder="Email"
                    className="add-department-name"
                  >
                    {company?.mobile}
                  </div>
                </div>
              </div>
              <div className="left-side ">
                <div className="company-input-container">
                  <label htmlFor="mobile" className="company-label">
                    {t("companies.tax_number")}
                  </label>

                  <div
                    name="mobile"
                    type="text"
                    id="mobile"
                    placeholder="Mobile"
                    className="add-department-name"
                  >
                    {company?.tax_num}
                  </div>
                </div>
                <div className="company-input-container">
                  <label htmlFor="phone" className="company-label">
                    {t("companies.email")}
                  </label>

                  <div
                    name="phone"
                    type="text"
                    id="phone"
                    placeholder="Phone"
                    className="add-department-name"
                  >
                    {company?.email}
                  </div>
                </div>
                <div className="company-input-container">
                  <label htmlFor="fax" className="company-label">
                    {t("companies.number_of_employees")}
                  </label>

                  <div
                    id="fax"
                    name="fax"
                    placeholder="Fax"
                    className="add-department-name"
                  >
                    {company?.number_of_employees}
                  </div>
                </div>
              </div>
              <div className="left-side">
                <div className="company-input-container">
                  <label htmlFor="number-of-employee" className="company-label">
                    {t("companies.creation_date")}
                  </label>

                  <div
                    name="number-of-employee"
                    type="text"
                    id="number-of-employee"
                    placeholder="Number Of Employees"
                    className="add-department-name"
                  >
                    {company?.creation_date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
