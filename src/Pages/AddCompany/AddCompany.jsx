import React ,{useState}from 'react'
import "./AddCompany.scss"
import { useNavigate } from "react-router-dom"; 
import toastPopup from '../../Helpers/Toast';
import Spinner from '../../Components/Spinner/Spinner';
import hawlakServices from "../../services/hawlakServices"
import BackButton from '../../Components/BackButton/BackButton';
import { t } from 'i18next';
export default function AddCompany() {
const [companyNameEN, setCompanyNameEN] = useState("");
const [companyNameAR, setCompanyNameAR] = useState("");
const [taxNumber, setTaxNumber] = useState(0);
const [phoneNumber, setPhoneNumber] = useState("");
const [ mobileNumber , setMobileNumber] = useState("");
const [fax, setFax] = useState("");
const [email, setEmail] = useState("");
const [numberOfEmployees, setNumberOfEmployees] = useState(0);
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

  async function createCompanyHandler(e){
    e.preventDefault()
     const obj ={      
      company_name_en: companyNameEN,
      company_name_ar: companyNameAR,
      tax_num: taxNumber,
      phone: phoneNumber,
      mobile: mobileNumber,
      fax: fax,
      email: email,
      number_of_employees: numberOfEmployees,
      is_active: true
    }   
    if(companyNameEN === ""){
      toastPopup("error", t("companies.empty_name"))
    }else if(companyNameAR === ""){
      toastPopup("error", t("companies.empty_name"))
    }else if(!new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,13})+$/).test(email)
    ) {
      toastPopup("error", t("companies.email"))
    }else if(taxNumber === ""){
      toastPopup("error",t("companies.tax_number"))
    }else{
      try{
        let { data } = await hawlakServices.createCompany(obj);
        console.log(data,"objjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
        setLoading(true);
        toastPopup("success",t("companies.success"));
        setTimeout(() => {
          navigate(0);
        }, 2000);
      }catch(error){
        setLoading(false);
        toastPopup("error", t("companies.error"))
      }
    }
  }
   
  return (
    <div>
      {loading && <Spinner/>}
      <div className="company-container">
      <BackButton />
        <div className="company-content">
          <form
            className="company-card"            
          >
            <div className='form-header'>
            <i className="fa-solid fa-building company-icon"></i><p className="title">{t("companies.add_company")}</p>
            </div>
            <div className="form-inputs-container">      
          <div className='container'>
          <div className='left-side'>
              <div className="company-input-container">
                <label htmlFor="company-name" className="company-label">
                  Company Name
                </label>

                <input
                  id="company-name"
                  name="company-name"
                  placeholder="Company Name"
                  className="add-department-name"
                 onChange={(e)=> setCompanyNameEN(e.target.value)}
                />
              </div>
              <div className="company-input-container">
                <label htmlFor="company-name-ar" className="company-label">
                  اسم الشركة
                </label>

                <input
                  name="company-name-ar"
                  type="text"
                  id="company-name-ar"
                  placeholder="اسم الشركة"
                  className="add-department-name"
                  onChange={(e)=> setCompanyNameAR(e.target.value)}
                />
              </div>
              <div className="company-input-container">
                <label htmlFor="tax-number" className="company-label">
                  Tax Number
                </label>

                <input
                  name="tax-number"
                  type="text"
                  id="tax-number"
                  placeholder="Tax Number"
                  className="add-department-name"
                  onChange={(e)=> setTaxNumber(e.target.value)}
                />
              </div>
           
              </div>
              <div className='left-side '>
              <div className="company-input-container">
                <label htmlFor="email" className="company-label">
                  Email
                </label>

                <input
                  name="email"
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="add-department-name"
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <div className="company-input-container">
                <label htmlFor="mobile" className="company-label">
                  Mobile
                </label>

                <input
                  name="mobile"
                  type="text"
                  id="mobile"
                  placeholder="Mobile"
                  className="add-department-name"
                  onChange={(e)=> setMobileNumber(e.target.value)}
                />
              </div>
              <div className="company-input-container">
                <label htmlFor="phone" className="company-label">
                  Phone
                </label>

                <input
                  name="phone"
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  className="add-department-name"
                  onChange={(e)=> setPhoneNumber(e.target.value)}
                />
              </div>
              </div>
              <div className='left-side'>
              <div className="company-input-container">
                <label htmlFor="fax" className="company-label">
                  Fax
                </label>

                <input
                  id="fax"
                  name="fax"
                  placeholder="Fax"
                  className="add-department-name"
                  onChange={(e)=> setFax(e.target.value)}
                />
              </div>
         
              <div className="company-input-container">
                <label htmlFor="number-of-employee" className="company-label">
                  Number Of Employees
                </label>

                <input
                  name="number-of-employee"
                  type="text"
                  id="number-of-employee"
                  placeholder="Number Of Employees"
                  className="add-department-name"
                  onChange={(e)=> setNumberOfEmployees(e.target.value)}
                />
              </div>
              {/* Input */}
           
              </div>
              </div>
              <div className="button">
                <button
                  name="add-button"
                  className="company-btn"
                  type="submit"
                  onClick={(e)=> createCompanyHandler(e)}
                >
                 Add
                </button>            
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}
