import React, { useEffect, useState } from "react";
import "./DepartmentDetails.scss";
import { useParams } from "react-router-dom";
import hawlakServices from "../../services/hawlakServices";
import BackButton from "../../Components/BackButton/BackButton";
import i18n from "../../Components/Localize/i18n";
import { t } from "i18next";
export default function DepartmentDetails() {
  const params = useParams();
  const departmentId = params.departmentId;
  const lang = i18n.language;
  const [department, setDepartment] = useState([]);
  console.log(department, "company companyy");
  useEffect(() => {
    getInitialListsHandler();
  }, []);

  async function getInitialListsHandler() {
    try {
      const { data: departmentDetails } =
        await hawlakServices.getDepartmentDetails(departmentId);
      console.log(departmentDetails, "detailllllllllllllllllllls");

      setDepartment(departmentDetails);
    } catch (error) {}
  }
  return (
    <div className="department-container">
      <BackButton />
      <div className="department-content">
        <form className="department-card">
          <div className="form-header">
            <i className="fa-solid fa-bars department-icon"></i>
            <p className="title">{t("navbar.departments")}</p>
          </div>
          <div className="form-inputs-container">
            <div className="container">
              <div className="left-side">
                {lang === "en" ? (
                  <div className="department-input-container">
                    <label
                      htmlFor="department-name"
                      className="department-label"
                    >
                      Department Name
                    </label>

                    <div
                      id="department-name"
                      name="department-name"
                      placeholder="Department Name"
                      className="add-department-name"
                    >
                      {department?.department_name_en}
                    </div>
                  </div>
                ) : (
                  <div className="department-input-container">
                    <label htmlFor="department" className="department-label">
                      القسم
                    </label>

                    <div
                      name="department"
                      type="text"
                      id="department"
                      placeholder="اسم القسم"
                      className="add-department-name"
                    >
                      {department?.department_name_ar}
                    </div>
                  </div>
                )}

                <div className="department-input-container">
                  <label htmlFor="branch" className="department-label">
                   {t("branches.branch_name")}
                  </label>

                  <div
                    name="branch"
                    type="text"
                    id="branch"
                    placeholder="Branch Name"
                    className="add-department-name"
                  >
                    {department?.branch}
                  </div>
                </div>
                <div className="department-input-container">
                  <label htmlFor="employee" className="department-label">
                   {t("branches.number_of_employees")}
                  </label>

                  <div
                    name="employee"
                    type="text"
                    id="employee"
                    placeholder="Number Of Employees"
                    className="add-department-name"
                  >
                    {department?.number_of_employees}
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
