import React, { useState } from "react";
import toastPopup from "../../Helpers/Toast";
import hawlakServices from "../../services/hawlakServices";
import "./AddEmployee.scss";
import { useNavigate } from "react-router-dom";
import BackButton from '../../Components/BackButton/BackButton';
import { t } from "i18next";
export default function AddEmployee() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [startDate, setStartDate] = useState(0);
  const [manager, setManager] = useState(0);
  const [jobTitle, setJobTitle] = useState(0);
  const [contractType, setContractType] = useState(0);
  const [employeeNameEN, setEmployeeNameEN] = useState("");
  const [employeeNameAR, setEmployeeNameAR] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [placeOfBirthEN, setPlaceOfBirthEN] = useState("");
  const [placeOfBirthAR, setPlaceOfBirthAR] = useState("");
  const [idTypeEN, setIdTypeEN] = useState("");
  const [idTypeAR, setIdTypeAR] = useState("");
  const [idNumber, setIdNumber] = useState(0);
  const [nationalityEN, setNationalityEN] = useState("");
  const [nationalityAR, setNationalityAR] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [fieldOfStudyEN, setFieldOfStudyEN] = useState("");
  const [fieldOfStudyAR, setFieldOfStudyAR] = useState("");
  const [educationDegreeEN, setEducationDegreeEN] = useState("");
  const [educationDegreeAR, setEducationDegreeAR] = useState("");
  const [genderEN, setGenderEN] = useState("");
  const [genderAR, setGenderAR] = useState("");
  const [socialStatusEN, setSocialStatusEN] = useState("");
  const [socialStatusAR, setSocialStatusAR] = useState("");
  const [religionEN, setReligionEN] = useState("");
  const [religionAR, setReligionAR] = useState("");
  const [bankNameEN, setBankNameEN] = useState("");
  const [bankNameAR, setBankNameAR] = useState("");
  const [iban, setIban] = useState("");
  const [branch, setBranch] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function createEmployeeHandler(e) {
    e.preventDefault();
    let user = {
      email: email,
      username: userName,
      password: password,
    };
    let position = {
      start_date: startDate,
      manager: manager,
      job_title: jobTitle,
      contract_type: contractType,
    };

    let formData = new FormData();
    formData.append("user.username", user.username);
    formData.append("user.email", user.email);
    formData.append("user.password", user.password);
    formData.append("position.start_date", position.start_date);
    formData.append("position.manager", position.manager);
    formData.append("position.job_title", position.job_title);
    formData.append("position.contract_type", position.contract_type);
    formData.append("emp_name_en", employeeNameEN);
    formData.append("emp_name_ar", employeeNameAR);
    formData.append("phone", phoneNumber);
    formData.append("mobile", mobileNumber);
    formData.append("date_of_birth", dateOfBirth);
    formData.append("hiredate", hireDate);
    formData.append("place_of_birth_en", placeOfBirthEN);
    formData.append("place_of_birth_ar", placeOfBirthAR);
    formData.append("identification_type_en", idTypeEN);
    formData.append("identification_type_ar", idTypeAR);
    formData.append("identification_number", idNumber);
    formData.append("nationality_en", nationalityEN);
    formData.append("nationality_ar", nationalityAR);
    formData.append("address1", addressOne);
    formData.append("address2", addressTwo);
    formData.append("field_of_study_en", fieldOfStudyEN);
    formData.append("field_of_study_ar", fieldOfStudyAR);
    formData.append("education_degree_en", educationDegreeEN);
    formData.append("education_degree_ar", educationDegreeAR);
    formData.append("gender_en", genderEN);
    formData.append("gender_ar", genderAR);
    formData.append("social_status_en", socialStatusEN);
    formData.append("social_status_ar", socialStatusAR);
    formData.append("religion_ar", religionAR);
    formData.append("religion_en", religionEN);
    formData.append("bank_name_en", bankNameEN);
    formData.append("bank_name_ar", bankNameAR);
    formData.append("iban", iban);
    formData.append("branch", branch);

    // const obj = {
    //   user: {

    //   },
    //   position: {

    //   },
    //   emp_name_en: employeeNameEN,
    //   emp_name_ar: employeeNameAR,
    //   phone: phoneNumber,
    //   mobile: mobileNumber,
    //   date_of_birth: dateOfBirth,
    //   hiredate: hireDate,
    //   is_active: true,
    //   place_of_birth_en: placeOfBirthEN,
    //   place_of_birth_ar: placeOfBirthAR,
    //   identification_type_en: idTypeEN,
    //   identification_type_ar: idTypeAR,
    //   identification_number: idNumber,
    //   nationality_en: nationalityEN,
    //   nationality_ar: nationalityAR,
    //   address1: addressOne,
    //   address2: addressTwo,
    //   field_of_study_en: fieldOfStudyEN,
    //   field_of_study_ar: fieldOfStudyAR,
    //   education_degree_en: educationDegreeEN,
    //   education_degree_ar: educationDegreeAR,
    //   gender_en: genderEN,
    //   gender_ar: genderAR,
    //   social_status_en: socialStatusEN,
    //   social_status_ar: socialStatusAR,
    //   religion_en: religionEN,
    //   religion_ar: religionAR,
    //   bank_name_en: bankNameEN,
    //   bank_name_ar: bankNameAR,
    //   iban: iban,
    //   is_admin: true,
    //   branch: branch,
    // };

    if (email === "") {
      toastPopup("error", "Enter Your Email");
    } else if (userName === "") {
      toastPopup("error", "Enter Your User Name");
    } else if (password === "") {
      toastPopup("error", "Enter Your Password");
    } else if (employeeNameEN === "") {
      toastPopup("error", "Enter Your Name in English");
    } else if (employeeNameAR === "") {
      toastPopup("error", "Enter Your Name in Arabic");
    } else if (idTypeEN === "") {
      toastPopup("error", "Enter Your Id Type in English");
    } else if (idTypeAR === "") {
      toastPopup("error", "Enter Your Id Type in Arabic");
    } else if (idNumber === "") {
      toastPopup("error", "Enter Your Id Number");
    } else if (branch === "") {
      toastPopup("error", "Enter Branch");
    } else {
      try {
        let { data } = await hawlakServices.createEmployee(formData);
        console.log(data, "dataaaaaaaaaaaaaaa");
        setLoading(false);
        toastPopup("success", "Adding Employee Successfully");
        setTimeout(() => {
          navigate(0);
        }, 2000);
      } catch (error) {
        setLoading(false);
        toastPopup("error", "Error When Adding Employee");
      }
    }
  }
  return (
    <div>
      <div className="employee-container">
      <BackButton />
        <div className="employee-content">
          <form className="employee-card">
            <div className="form-header">
              <i class="fa-solid fa-people-group employee-icon"></i>
              <p className="title">{t("employees.add_employee")}</p>
            </div>
            <div className="form-inputs-container">
              <div className="container">
                <div className="left-side">
                  <div className="employee-input-container">
                    <label htmlFor="user-name" className="employee-label">
                      User Name
                    </label>

                    <input
                      id="user-name"
                      name="user-name"
                      placeholder="User Name"
                      className="add-department-name"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="email" className="employee-label">
                      Email
                    </label>

                    <input
                      name="email"
                      type="text"
                      id="email"
                      placeholder="Email"
                      className="add-department-name"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="password" className="employee-label">
                      Password
                    </label>

                    <input
                      name="password"
                      type="text"
                      id="password"
                      placeholder="Password"
                      className="add-department-name"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="start-date" className="employee-label">
                      Start Date
                    </label>

                    <input
                      name="start-date"
                      type="date"
                      id="start-date"
                      placeholder="Start Date"
                      className="add-department-name"
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="manager" className="employee-label">
                      Manager
                    </label>

                    <input
                      name="manager"
                      type="text"
                      id="manager"
                      placeholder="Manager"
                      className="add-department-name"
                      onChange={(e) => setManager(e.target.value)}
                    />
                  </div>
                </div>
                <div className="left-side ">
                  <div className="employee-input-container">
                    <label htmlFor="job-title" className="employee-label">
                      Job Title
                    </label>

                    <input
                      name="job-title"
                      type="text"
                      id="job-title"
                      placeholder="Job Tilte"
                      className="add-department-name"
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="contract-type" className="employee-label">
                      Contract Type
                    </label>

                    <input
                      name="contract-type"
                      type="text"
                      id="contract-type"
                      placeholder="Contract Type"
                      className="add-department-name"
                      onChange={(e) => setContractType(e.target.value)}
                    />
                  </div>

                  <div className="employee-input-container">
                    <label htmlFor="employee-name" className="employee-label">
                      Employee Name
                    </label>

                    <input
                      id="employee-name"
                      name="employee-name"
                      placeholder="Employee Name"
                      className="add-department-name"
                      onChange={(e) => setEmployeeNameEN(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="employee-ar" className="employee-label">
                      اسم الموظف
                    </label>

                    <input
                      id="employee-ar"
                      name="employee-ar"
                      placeholder="اسم الموظف"
                      className="add-department-name"
                      onChange={(e) => setEmployeeNameAR(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="phone" className="employee-label">
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      className="add-department-name"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="left-side ">
                  <div className="employee-input-container">
                    <label htmlFor="mobile" className="employee-label">
                      Mobile
                    </label>

                    <input
                      name="mobile"
                      type="text"
                      id="mobile"
                      placeholder="Mobile"
                      className="add-department-name"
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="date-of-birth" className="employee-label">
                      Date Of Birth
                    </label>

                    <input
                      name="date-of-birth"
                      type="date"
                      id="date-of-birth"
                      placeholder="Date Of Birth"
                      className="add-department-name"
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </div>

                  <div className="employee-input-container">
                    <label htmlFor="hire-date" className="employee-label">
                      Hire Date
                    </label>

                    <input
                      id="hire-date"
                      type="date"
                      name="hire-date"
                      placeholder="Hire Date"
                      className="add-department-name"
                      onChange={(e) => setHireDate(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="place-of-birth" className="employee-label">
                      Place Of Birth
                    </label>

                    <input
                      id="place-of-birth"
                      name="place-of-birth"
                      placeholder="Place Of Birth"
                      className="add-department-name"
                      onChange={(e) => setPlaceOfBirthEN(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label
                      htmlFor="place-of-birth-ar"
                      className="employee-label"
                    >
                      محل الميلاد
                    </label>

                    <input
                      id="place-of-birth-ar"
                      name="place-of-birth-ar"
                      placeholder="محل الميلاد"
                      className="add-department-name"
                      onChange={(e) => setPlaceOfBirthAR(e.target.value)}
                    />
                  </div>
                </div>
                <div className="left-side ">
                  <div className="employee-input-container">
                    <label htmlFor="id-type" className="employee-label">
                      ID Type
                    </label>

                    <input
                      name="id-type"
                      type="text"
                      id="id-type"
                      placeholder="ID Type"
                      className="add-department-name"
                      onChange={(e) => setIdTypeEN(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="id-type-ar" className="employee-label">
                      نوع الهوية
                    </label>

                    <input
                      name="id-type-ar"
                      type="text"
                      id="id-type-ar"
                      placeholder="نوع الهوية"
                      className="add-department-name"
                      onChange={(e) => setIdTypeAR(e.target.value)}
                    />
                  </div>

                  <div className="employee-input-container">
                    <label htmlFor="id-number" className="employee-label">
                      ID Number
                    </label>

                    <input
                      id="id-number"
                      name="id-number"
                      placeholder="ID Number"
                      className="add-department-name"
                      onChange={(e) => setIdNumber(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="nationality" className="employee-label">
                      Nationality
                    </label>

                    <input
                      id="nationality"
                      name="nationality"
                      placeholder="Nationality"
                      className="add-department-name"
                      onChange={(e) => setNationalityEN(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="nationality-ar" className="employee-label">
                      الجنسية
                    </label>

                    <input
                      id="nationality-ar"
                      name="nationality-ar"
                      placeholder="الجنسية"
                      className="add-department-name"
                      onChange={(e) => setNationalityAR(e.target.value)}
                    />
                  </div>
                </div>
                <div className="left-side ">
                  <div className="employee-input-container">
                    <label htmlFor="address-one" className="employee-label">
                      Address 1
                    </label>

                    <input
                      name="address-one"
                      type="text"
                      id="address-one"
                      placeholder="Address 1"
                      className="add-department-name"
                      onChange={(e) => setAddressOne(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="address-two" className="employee-label">
                      Address 2
                    </label>

                    <input
                      name="address-two"
                      type="text"
                      id="address-two"
                      placeholder="Address 2"
                      className="add-department-name"
                      onChange={(e) => setAddressTwo(e.target.value)}
                    />
                  </div>

                  <div className="employee-input-container">
                    <label htmlFor="field-of-study" className="employee-label">
                      Field Of Study
                    </label>

                    <input
                      id="field-of-study"
                      name="field-of-study"
                      placeholder="Field Of Study"
                      className="add-department-name"
                      onChange={(e) => setFieldOfStudyEN(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label
                      htmlFor="field-of-study-ar"
                      className="employee-label"
                    >
                      مجال الدراسة
                    </label>

                    <input
                      id="field-of-study-ar"
                      name="field-of-study-ar"
                      placeholder="مجال الدراسة"
                      className="add-department-name"
                      onChange={(e) => setFieldOfStudyAR(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label
                      htmlFor="education-degree"
                      className="employee-label"
                    >
                      Education Degree
                    </label>

                    <input
                      id="education-degree"
                      name="education-degree"
                      placeholder="Education Degree"
                      className="add-department-name"
                      onChange={(e) => setEducationDegreeEN(e.target.value)}
                    />
                  </div>
                </div>
                <div className="left-side ">
                  <div className="employee-input-container">
                    <label
                      htmlFor="education-degree-ar"
                      className="employee-label"
                    >
                      درجة المؤهل
                    </label>

                    <input
                      name="education-degree-ar"
                      type="text"
                      id="education-degree-ar"
                      placeholder="درجة المؤهل"
                      className="add-department-name"
                      onChange={(e) => setEducationDegreeAR(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="gender" className="employee-label">
                      Gender
                    </label>

                    <input
                      name="gender"
                      type="text"
                      id="gender"
                      placeholder="Gender"
                      className="add-department-name"
                      onChange={(e) => setGenderEN(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="gender-ar" className="employee-label">
                      النوع
                    </label>

                    <input
                      name="gender-ar"
                      type="text"
                      id="gender-ar"
                      placeholder="النوع"
                      className="add-department-name"
                      onChange={(e) => setGenderAR(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="social-status" className="employee-label">
                      Social Status
                    </label>

                    <input
                      name="social-status"
                      type="text"
                      id="social-status"
                      placeholder="Social Status"
                      className="add-department-name"
                      onChange={(e) => setSocialStatusEN(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label
                      htmlFor="social-status-ar"
                      className="employee-label"
                    >
                      الحالة الاجتماعية
                    </label>

                    <input
                      name="social-status-ar"
                      type="text"
                      id="social-status-ar"
                      placeholder="الحالة الاجتماعية"
                      className="add-department-name"
                      onChange={(e) => setSocialStatusAR(e.target.value)}
                    />
                  </div>
                </div>
                <div className="left-side ">
                  <div className="employee-input-container">
                    <label htmlFor="religion" className="employee-label">
                      Religion
                    </label>

                    <input
                      name="religion"
                      type="text"
                      id="religion"
                      placeholder="Religion"
                      className="add-department-name"
                      onChange={(e) => setReligionEN(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="religion-ar" className="employee-label">
                      الديانة
                    </label>

                    <input
                      name="religion-ar"
                      type="text"
                      id="religion-ar"
                      placeholder="الديانة"
                      className="add-department-name"
                      onChange={(e) => setReligionAR(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="banck-name" className="employee-label">
                      Bank Name
                    </label>

                    <input
                      name="banck-name"
                      type="text"
                      id="banck-name"
                      placeholder="Bank Name"
                      className="add-department-name"
                      onChange={(e) => setBankNameEN(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="bank-name-ar" className="employee-label">
                      اسم البنك
                    </label>

                    <input
                      name="bank-name-ar"
                      type="text"
                      id="bank-name-ar"
                      placeholder="اسم البنك"
                      className="add-department-name"
                      onChange={(e) => setBankNameAR(e.target.value)}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="iban" className="employee-label">
                      IBan
                    </label>

                    <input
                      name="iban"
                      type="text"
                      id="iban"
                      placeholder="IBan"
                      className="add-department-name"
                      onChange={(e) => setIban(e.target.vakue)}
                    />
                  </div>
                </div>
                <div className="left-side ">
                  <div className="employee-input-container">
                    <label htmlFor="branch" className="employee-label">
                      Branch
                    </label>

                    <input
                      name="branch"
                      type="text"
                      id="branch"
                      placeholder="Branch"
                      className="add-department-name"
                      onChange={(e) => setBranch(e.target.value)}
                    />
                  </div>
                </div>
                {/* Input */}
              </div>
              <div className="button">
                <button
                  name="add-button"
                  className="employee-btn"
                  type="submit"
                  onClick={(e) => createEmployeeHandler(e)}
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
