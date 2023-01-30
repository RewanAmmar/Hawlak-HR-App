import React,{useState} from "react";
import "./EditEmployee.scss";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import toastPopup from "../../Helpers/Toast";
import hawlakServices from '../../services/hawlakServices';
import Spinner from '../../Components/Spinner/Spinner';
export default function EditEmployee({
  currentEmployee,
  setCurrentEditingEmployee,
  setModalVisable,
}) {
  console.log(currentEmployee,"currentEmployee");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
   async function editEmployeeHandler(){
    let obj ={
      user:{
        username: currentEmployee.username,
        email: currentEmployee.email,
        password: currentEmployee.password
      },
      position:{
        start_date: currentEmployee.start_date,
        manager: currentEmployee.manager,
        job_title: currentEmployee.job_title,
        contract_type: currentEmployee.contract_type
      },
      emp_name_en: currentEmployee.emp_name_en,
      emp_name_ar: currentEmployee.emp_name_ar,
      phone: currentEmployee.phone,
      mobile: currentEmployee.mobile,
      place_of_birth_en: currentEmployee.place_of_birth_en,
      place_of_birth_ar: currentEmployee.place_of_birth_ar,
      date_of_birth: currentEmployee.date_of_birth,
      hiredate: currentEmployee.hiredate,
      identification_type_en: currentEmployee.identification_type_en,
      identification_type_ar: currentEmployee.identification_type_ar,
      identification_number: currentEmployee.identification_number,
      nationality_en: currentEmployee.nationality_en,
      nationality_ar: currentEmployee.nationality_ar,
      address1: currentEmployee.address1,
      address2: currentEmployee.address2,
      field_of_study_en: currentEmployee.field_of_study_en,
      field_of_study_ar: currentEmployee.field_of_study_ar,
      education_degree_en: currentEmployee.education_degree_en,
      education_degree_ar: currentEmployee.education_degree_ar,
      gender_en: currentEmployee.gender_en,
      gender_ar: currentEmployee.gender_ar,
      social_status_en: currentEmployee.social_status_en,
      social_status_ar: currentEmployee.social_status_ar,
      religion_en: currentEmployee.religion_en,
      religion_ar: currentEmployee.religion_en,
      bank_name_en: currentEmployee.bank_name_en,
      bank_name_ar: currentEmployee.bank_name_en,
      iban: currentEmployee.iban,
      branch: currentEmployee.branch
    }
    try{
      let { data } = hawlakServices.editEmployee(currentEmployee.id, obj)
      setLoading(true)
      console.log(data,"employee data");
      toastPopup("success",t("employees.success_edit"))
      setTimeout(()=>{
        navigate(0)
      },1500)
    }catch(error){
      setLoading(false)
      toastPopup("error",t("employees.error"))
    }
   }
  return (
    <div>
      {loading && <Spinner/>}
      <div className="employee-container">
        <div className="employee-content">
          <form className="employee-card">
            <div className="form-header">
              <i class="fa-solid fa-people-group employee-icon"></i>
              <p className="title">{t("employees.edit_employee")}</p>
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
                      value={currentEmployee.username}
                      onChange={(e)=>{
                        setCurrentEditingEmployee((prev) =>{
                          return {...prev, username: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.email}
                      onChange={(e)=>{
                        setCurrentEditingEmployee((prev) =>{
                          return {...prev, email: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.password}
                      onChange={(e)=>{
                        setCurrentEditingEmployee((prev) =>{
                          return {...prev, password: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.start_date}
                      onChange={(e)=>{
                        setCurrentEditingEmployee((prev) =>{
                          return {...prev, start_date: e.target.value}
                        })
                      }}
                    />
                  </div>
                  
                </div>
                <div className="left-side ">
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
                      value={currentEmployee.manager}
                      onChange={(e)=>{
                        setCurrentEditingEmployee((prev) =>{
                          return {...prev, manager: e.target.value}
                        })
                      }}
                    />
                  </div>
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
                      value={currentEmployee.job_title}
                      onChange={(e)=>{
                        setCurrentEditingEmployee((prev) =>{
                          return {...prev, job_title: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.contract_type}
                      onChange={(e)=>{
                        setCurrentEditingEmployee((prev) =>{
                          return {...prev, contract_type: e.target.value}
                        })
                      }}
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
                    value={currentEmployee.emp_name_en}
                    onChange={(e)=>{
                      setCurrentEditingEmployee((prev) =>{
                        return {...prev, emp_name_en: e.target.value}
                      })
                    }}
                    />
                  </div>
                 
                </div>
                <div className="left-side ">  
                
                <div className="employee-input-container">
                    <label htmlFor="employee-ar" className="employee-label">
                      اسم الموظف
                    </label>

                    <input
                      id="employee-ar"
                      name="employee-ar"
                      placeholder="اسم الموظف"
                      className="add-department-name"
                      value={currentEmployee.emp_name_ar}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, emp_name_ar: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.phone}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, phone: e.target.value}
                        })
                      }}
                    />
                  </div>
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
                      value={currentEmployee.mobile}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, mobile: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.date_of_birth}
                      onChange={(e)=>{
                        setCurrentEditingEmployee((prev) =>{
                          return {...prev, date_of_birth: e.target.value}
                        })
                      }}
                    />
                  </div>
                 
                </div>
                <div className="left-side ">
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
                      value={currentEmployee.hiredate}
                      onChange={(e)=>{
                        setCurrentEditingEmployee((prev) =>{
                          return {...prev, hiredate: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.place_of_birth_en}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, place_of_birth_en: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.place_of_birth_ar}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, place_of_birth_ar: e.target.value}
                        })
                      }}
                    />
                  </div>
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
                      value={currentEmployee.identification_type_en}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, identification_type_en: e.target.value}
                        })
                      }}
                    />
                  </div>
                  
                </div>
                <div className="left-side ">
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
                      value={currentEmployee.identification_type_ar}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, identification_type_ar: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.identification_number}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, identification_number: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.nationality_en}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, nationality_en: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.nationality_ar}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, nationality_ar: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.address1}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, address1: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.address2}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, address2: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.field_of_study_en}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, field_of_study_en: e.target.value}
                        })
                      }}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="field-of-study-ar" className="employee-label">
                      مجال الدراسة
                    </label>

                    <input
                      id="field-of-study-ar"
                      name="field-of-study-ar"
                      placeholder="مجال الدراسة"
                      className="add-department-name"
                      value={currentEmployee.field_of_study_ar}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, field_of_study_ar: e.target.value}
                        })
                      }}
                    />
                  </div>
                  
                </div>
                <div className="left-side ">
                <div className="employee-input-container">
                    <label htmlFor="education-degree" className="employee-label">
                      Education Degree
                    </label>

                    <input
                      id="education-degree"
                      name="education-degree"
                      placeholder="Education Degree"
                      className="add-department-name"
                      value={currentEmployee.education_degree_en}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, education_degree_en: e.target.value}
                        })
                      }}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="education-degree-ar" className="employee-label">
                      درجة المؤهل
                    </label>

                    <input
                      name="education-degree-ar"
                      type="text"
                      id="education-degree-ar"
                      placeholder="درجة المؤهل"
                      className="add-department-name"
                      value={currentEmployee.education_degree_ar}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, education_degree_ar: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.gender_en}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, gender_en: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.gender_ar}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, gender_ar: e.target.value}
                        })
                      }}
                    />
                  </div>
                  
                </div>
                <div className="left-side ">
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
                      value={currentEmployee.social_status_en}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, social_status_en: e.target.value}
                        })
                      }}
                    />
                  </div>
                  <div className="employee-input-container">
                    <label htmlFor="social-status-ar" className="employee-label">
                      الحالة الاجتماعية
                    </label>

                    <input
                      name="social-status-ar"
                      type="text"
                      id="social-status-ar"
                      placeholder="الحالة الاجتماعية"
                      className="add-department-name"
                      value={currentEmployee.social_status_ar}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, social_status_ar: e.target.value}
                        })
                      }}
                    />
                  </div>
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
                      value={currentEmployee.religion_en}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, religion_en: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.religion_ar}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, religion_ar: e.target.value}
                        })
                      }}
                    />
                  </div>               

                </div>
                <div className="left-side">
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
                      value={currentEmployee.bank_name_en}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, bank_name_en: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.bank_name_ar}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, bank_name_ar: e.target.value}
                        })
                      }}
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
                      value={currentEmployee.iban}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, iban: e.target.value}
                        })
                      }}
                    />
                  </div>
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
                      value={currentEmployee.branch}
                      onChange ={(e)=>{
                        setCurrentEditingEmployee((prev)=>{
                          return {...prev, branch: e.target.value}
                        })
                      }}
                    />
                  </div>               
                </div>
                
              </div>
              <div className="button">
                <button
                  name="add-button"
                  className="employee-btn"
                  type="submit"
                  onClick={() => editEmployeeHandler()}
                >
                  {t("save")}
                </button>
                <button
                  name="add-button"
                  className="employee-btn"
                  type="submit"
                  onClick={() => setModalVisable(false)}
                >
                  {t("cancel")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
