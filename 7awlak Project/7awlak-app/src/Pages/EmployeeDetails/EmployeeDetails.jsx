import React, { useState, useEffect } from "react";
import "./EmployeeDetails.scss";
import { useParams } from "react-router-dom";
import hawlakServices from "../../services/hawlakServices";
import BackButton from "../../Components/BackButton/BackButton";
import i18n from "../../Components/Localize/i18n";
import { t } from "i18next";
export default function EmployeeDetails() {
  const params = useParams();
  const employeeId = params.employeeId;
  const lang = i18n.language;
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    getInitialListsHandler();
  }, []);

  async function getInitialListsHandler() {
    try {
      const { data: employeeDetails } = await hawlakServices.getEmployeeDetails(
        employeeId
      );
      console.log(employeeDetails, "detailllllllllllllllllllls");

      setEmployee(employeeDetails);
    } catch (error) {}
  }
  return (
    <div>
      <div className="employee-container">
        <BackButton />
        <div className="employee-content">
          <form className="employee-card">
            <div className="form-header">
              <i class="fa-solid fa-people-group employee-icon"></i>
              <p className="title">{t("navbar.employees")}</p>
            </div>
            <div className="form-inputs-container">
              <div className="container">
                <div className="left-side">
                  <div className="employee-input-container">
                    <label htmlFor="user-name" className="employee-label">
                      User Name
                    </label>

                    <div
                      id="user-name"
                      name="user-name"
                      placeholder="User Name"
                      className="add-department-name"
                    >
                      {employee?.username}
                    </div>
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="email" className="employee-label">
                      Email
                    </label>

                    <div
                      name="email"
                      type="text"
                      id="email"
                      placeholder="Email"
                      className="add-department-name"
                    >
                      {employee?.email}
                    </div>
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="password" className="employee-label">
                      Password
                    </label>

                    <div
                      name="password"
                      type="text"
                      id="password"
                      placeholder="Password"
                      className="add-department-name"
                    >
                      {employee?.password}
                    </div>
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="start-date" className="employee-label">
                      Start Date
                    </label>

                    <div
                      name="start-date"
                      type="date"
                      id="start-date"
                      placeholder="Start Date"
                      className="add-department-name"
                    >
                      {employee?.start_date}
                    </div>
                  </div>
              
                </div>
                <div className="left-side ">
                <div className="employee-input-container">
                    <label htmlFor="manager" className="employee-label">
                      Manager
                    </label>

                    <div
                      name="manager"
                      type="text"
                      id="manager"
                      placeholder="Manager"
                      className="add-department-name"
                    >
                      {employee?.manager}
                    </div>
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="job-title" className="employee-label">
                      Job Title
                    </label>

                    <div
                      name="job-title"
                      type="text"
                      id="job-title"
                      placeholder="Job Tilte"
                      className="add-department-name"
                    >
                      {employee?.job_title}
                    </div>
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="contract-type" className="employee-label">
                      Contract Type
                    </label>

                    <div
                      name="contract-type"
                      type="text"
                      id="contract-type"
                      placeholder="Contract Type"
                      className="add-department-name"
                    >
                      {employee?.contract_type}
                    </div>
                  </div>
                  {lang === "en" ? (
                    <div className="employee-input-container">
                      <label htmlFor="employee-name" className="employee-label">
                        Employee Name
                      </label>

                      <div
                        id="employee-name"
                        name="employee-name"
                        placeholder="Employee Name"
                        className="add-department-name"
                      >
                        {employee?.emp_name_en}
                      </div>
                    </div>
                  ) : (
                    <div className="employee-input-container">
                      <label htmlFor="employee-ar" className="employee-label">
                        اسم الموظف
                      </label>

                      <div
                        id="employee-ar"
                        name="employee-ar"
                        placeholder="اسم الموظف"
                        className="add-department-name"
                      >
                        {employee?.emp_name_ar}
                      </div>
                    </div>
                  )}

                  
                </div>
                <div className="left-side ">
                <div className="employee-input-container">
                    <label htmlFor="phone" className="employee-label">
                      Phone
                    </label>

                    <div
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      className="add-department-name"
                    >
                      {employee?.phone}
                    </div>
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="mobile" className="employee-label">
                      Mobile
                    </label>

                    <div
                      name="mobile"
                      type="text"
                      id="mobile"
                      placeholder="Mobile"
                      className="add-department-name"
                    >
                      {employee?.mobile}
                    </div>
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="date-of-birth" className="employee-label">
                      Date Of Birth
                    </label>

                    <div
                      name="date-of-birth"
                      type="date"
                      id="date-of-birth"
                      placeholder="Date Of Birth"
                      className="add-department-name"
                    >
                      {employee?.date_of_birth}
                    </div>
                  </div>

                  <div className="employee-input-container">
                    <label htmlFor="hire-date" className="employee-label">
                      Hire Date
                    </label>

                    <div
                      id="hire-date"
                      type="date"
                      name="hire-date"
                      placeholder="Hire Date"
                      className="add-department-name"
                    >
                      {employee?.hiredate}
                    </div>
                  </div>
                  
                </div>
                <div className="left-side ">
                {lang === "en" ? (
                    <div className="employee-input-container">
                      <label
                        htmlFor="place-of-birth"
                        className="employee-label"
                      >
                        Place Of Birth
                      </label>

                      <div
                        id="place-of-birth"
                        name="place-of-birth"
                        placeholder="Place Of Birth"
                        className="add-department-name"
                      >
                        {employee?.place_of_birth_en}
                      </div>
                    </div>
                  ) : (
                    <div className="employee-input-container">
                      <label
                        htmlFor="place-of-birth-ar"
                        className="employee-label"
                      >
                        محل الميلاد
                      </label>

                      <div
                        id="place-of-birth-ar"
                        name="place-of-birth-ar"
                        placeholder="محل الميلاد"
                        className="add-department-name"
                      >
                        {employee?.place_of_birth_ar}
                      </div>
                    </div>
                  )}
                  {lang === "en" ? (
                    <div className="employee-input-container">
                      <label htmlFor="id-type" className="employee-label">
                        ID Type
                      </label>

                      <div
                        name="id-type"
                        type="text"
                        id="id-type"
                        placeholder="ID Type"
                        className="add-department-name"
                      >
                        {employee?.identification_type_en}
                      </div>
                    </div>
                  ) : (
                    <div className="employee-input-container">
                      <label htmlFor="id-type-ar" className="employee-label">
                        نوع الهوية
                      </label>

                      <div
                        name="id-type-ar"
                        type="text"
                        id="id-type-ar"
                        placeholder="نوع الهوية"
                        className="add-department-name"
                      >
                        {employee?.identification_type_ar}
                      </div>
                    </div>
                  )}

                  <div className="employee-input-container">
                    <label htmlFor="id-number" className="employee-label">
                      ID Number
                    </label>

                    <div
                      id="id-number"
                      name="id-number"
                      placeholder="ID Number"
                      className="add-department-name"
                    >
                      {employee?.identification_number}
                    </div>
                  </div>
                  {lang === "en" ? (
                    <div className="employee-input-container">
                      <label htmlFor="nationality" className="employee-label">
                        Nationality
                      </label>

                      <div
                        id="nationality"
                        name="nationality"
                        placeholder="Nationality"
                        className="add-department-name"
                      >
                        {employee?.nationality_en}
                      </div>
                    </div>
                  ) : (
                    <div className="employee-input-container">
                      <label
                        htmlFor="nationality-ar"
                        className="employee-label"
                      >
                        الجنسية
                      </label>

                      <div
                        id="nationality-ar"
                        name="nationality-ar"
                        placeholder="الجنسية"
                        className="add-department-name"
                      >
                        {employee?.nationality_ar}
                      </div>
                    </div>
                  )}
                </div>
                <div className="left-side ">
                  <div className="employee-input-container">
                    <label htmlFor="address-one" className="employee-label">
                      Address 1
                    </label>

                    <div
                      name="address-one"
                      type="text"
                      id="address-one"
                      placeholder="Address 1"
                      className="add-department-name"
                    >
                      {employee?.address1}
                    </div>
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="address-two" className="employee-label">
                      Address 2
                    </label>

                    <div
                      name="address-two"
                      type="text"
                      id="address-two"
                      placeholder="Address 2"
                      className="add-department-name"
                    >
                      {employee?.address2}
                    </div>
                  </div>
                  {lang === "en" ? (
                    <div className="employee-input-container">
                      <label
                        htmlFor="field-of-study"
                        className="employee-label"
                      >
                        Field Of Study
                      </label>

                      <div
                        id="field-of-study"
                        name="field-of-study"
                        placeholder="Field Of Study"
                        className="add-department-name"
                      >
                        {employee?.field_of_study_en}
                      </div>
                    </div>
                  ) : (
                    <div className="employee-input-container">
                      <label
                        htmlFor="field-of-study-ar"
                        className="employee-label"
                      >
                        مجال الدراسة
                      </label>

                      <div
                        id="field-of-study-ar"
                        name="field-of-study-ar"
                        placeholder="مجال الدراسة"
                        className="add-department-name"
                      >
                        {employee?.field_of_study_ar}
                      </div>
                    </div>
                  )}

                  {lang === "en" ? (
                    <div className="employee-input-container">
                      <label
                        htmlFor="education-degree"
                        className="employee-label"
                      >
                        Education Degree
                      </label>

                      <div
                        id="education-degree"
                        name="education-degree"
                        placeholder="Education Degree"
                        className="add-department-name"
                      >
                        {employee?.education_degree_en}
                      </div>
                    </div>
                  ) : (
                    <div className="employee-input-container">
                      <label
                        htmlFor="education-degree-ar"
                        className="employee-label"
                      >
                        درجة المؤهل
                      </label>

                      <div
                        name="education-degree-ar"
                        type="text"
                        id="education-degree-ar"
                        placeholder="درجة المؤهل"
                        className="add-department-name"
                      >
                        {employee?.education_degree_ar}
                      </div>
                    </div>
                  )}
                </div>
                <div className="left-side ">
                  {lang === "en" ? (
                    <div className="employee-input-container">
                      <label htmlFor="gender" className="employee-label">
                        Gender
                      </label>

                      <div
                        name="gender"
                        type="text"
                        id="gender"
                        placeholder="Gender"
                        className="add-department-name"
                      >
                        {employee?.gender_en}
                      </div>
                    </div>
                  ) : (
                    <div className="employee-input-container">
                      <label htmlFor="gender-ar" className="employee-label">
                        النوع
                      </label>

                      <div
                        name="gender-ar"
                        type="text"
                        id="gender-ar"
                        placeholder="النوع"
                        className="add-department-name"
                      >
                        {employee?.gender_ar}
                      </div>
                    </div>
                  )}

                  {lang === "en" ? (
                    <div className="employee-input-container">
                      <label htmlFor="social-status" className="employee-label">
                        Social Status
                      </label>

                      <div
                        name="social-status"
                        type="text"
                        id="social-status"
                        placeholder="Social Status"
                        className="add-department-name"
                      >
                        {employee?.social_status_en}
                      </div>
                    </div>
                  ) : (
                    <div className="employee-input-container">
                      <label
                        htmlFor="social-status-ar"
                        className="employee-label"
                      >
                        الحالة الاجتماعية
                      </label>

                      <div
                        name="social-status-ar"
                        type="text"
                        id="social-status-ar"
                        placeholder="الحالة الاجتماعية"
                        className="add-department-name"
                      >
                        {employee?.social_status_ar}
                      </div>
                    </div>
                  )}
                   {lang === "en" ? (
                    <div className="employee-input-container">
                      <label htmlFor="religion" className="employee-label">
                        Religion
                      </label>

                      <div
                        name="religion"
                        type="text"
                        id="religion"
                        placeholder="Religion"
                        className="add-department-name"
                      >
                        {employee?.religion_en}
                      </div>
                    </div>
                  ) : (
                    <div className="employee-input-container">
                      <label htmlFor="religion-ar" className="employee-label">
                        الديانة
                      </label>

                      <div
                        name="religion-ar"
                        type="text"
                        id="religion-ar"
                        placeholder="الديانة"
                        className="add-department-name"
                      >
                        {employee?.religion_ar}
                      </div>
                    </div>
                  )}

                  {lang === "en" ? (
                    <div className="employee-input-container">
                      <label htmlFor="banck-name" className="employee-label">
                        Bank Name
                      </label>

                      <div
                        name="banck-name"
                        type="text"
                        id="banck-name"
                        placeholder="Bank Name"
                        className="add-department-name"
                      >
                        {employee?.bank_name_en}
                      </div>
                    </div>
                  ) : (
                    <div className="employee-input-container">
                      <label htmlFor="bank-name-ar" className="employee-label">
                        اسم البنك
                      </label>

                      <div
                        name="bank-name-ar"
                        type="text"
                        id="bank-name-ar"
                        placeholder="اسم البنك"
                        className="add-department-name"
                      >
                        {employee?.bank_name_ar}
                      </div>
                    </div>
                  )}
                </div>
               
                <div className="last-side">
                <div className="employee-input-container">
                    <label htmlFor="iban" className="employee-label">
                      IBan
                    </label>

                    <div
                      name="iban"
                      type="text"
                      id="iban"
                      placeholder="IBan"
                      className="add-department-name"
                    >
                      {employee?.iban}
                    </div>
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="branch" className="employee-label">
                      Branch
                    </label>

                    <div
                      name="branch"
                      type="text"
                      id="branch"
                      placeholder="Branch"
                      className="add-department-name"
                    >
                      {employee?.branch}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
