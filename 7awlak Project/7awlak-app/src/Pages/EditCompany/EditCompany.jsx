import React,{useState} from 'react'
import hawlakServices from '../../services/hawlakServices'
import "./EditCompany.scss"
import { t } from "i18next";
import toastPopup from '../../Helpers/Toast'
import { useNavigate } from "react-router-dom";
import Spinner from '../../Components/Spinner/Spinner';
export default function EditCompany({currentCompany,setCurrentEditingCompany,setModalVisable}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    async function editCompanyHandler(){
        let obj = {            
            company_name_en: currentCompany.company_name_en,
            company_name_ar: currentCompany.company_name_ar,
            tax_num: currentCompany.tax_num,
            phone: currentCompany.phone,
            mobile: currentCompany.mobile,
            fax: currentCompany.fax,
            email: currentCompany.email,
            number_of_employees: currentCompany.number_of_employees,
            is_active: true
        }
        try{
            let {data} = await hawlakServices.editCompany(currentCompany.id,obj);
            setLoading(true)
            toastPopup("success",t("companies.success_edit"));
            setTimeout(() => {
              navigate(0);
          }, 1500);
        }catch(error){
          setLoading(false)
            toastPopup("error",t("companies.error"));
        }
    }
  return (
    <div> 
      {loading && <Spinner/>}   
    <div className="company-container">
      
      <div className="company-content">
        <form
          className="company-card"            
        >
          <div className='form-header'>
          <i className="fa-solid fa-building company-icon"></i><p className="title">{t("companies.edit_company")}</p>
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
               value={currentCompany.company_name_en}
               onChange={(e) => {
                setCurrentEditingCompany((prev) => {
                  return { ...prev, company_name_en: e.target.value };
                });
              }}
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
                value={currentCompany.company_name_ar}
                onChange={(e) => {
                    setCurrentEditingCompany((prev) => {
                      return { ...prev, company_name_ar: e.target.value };
                    });
                  }}
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
              value={currentCompany.tax_num}
              onChange={(e) => {
                setCurrentEditingCompany((prev) => {
                  return { ...prev, tax_num: e.target.value };
                });
              }}
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
               value={currentCompany.email}
               onChange={(e) => {
                setCurrentEditingCompany((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
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
                value={currentCompany.mobile}
                onChange={(e) => {
                    setCurrentEditingCompany((prev) => {
                      return { ...prev, mobile: e.target.value };
                    });
                  }}
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
                value={currentCompany.phone}
                onChange={(e) => {
                    setCurrentEditingCompany((prev) => {
                      return { ...prev, phone: e.target.value };
                    });
                  }}
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
               value={currentCompany.fax}
               onChange={(e) => {
                setCurrentEditingCompany((prev) => {
                  return { ...prev, fax: e.target.value };
                });
              }}
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
                value={currentCompany.number_of_employees}
                onChange={(e) => {
                    setCurrentEditingCompany((prev) => {
                      return { ...prev, number_of_employees: e.target.value };
                    });
                  }}
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
                onClick={() => editCompanyHandler()}
              >
               Save
              </button> 
              <button
                  name="add-button"
                  className="company-btn"
                  type="submit"
                  onClick={() => setModalVisable(false)}
                >
                  Cancel
                </button>           
            </div>
          </div>
        </form>
      </div>
    </div>
    
  </div>
  )
}
