import React from 'react'
import hawlakServices from '../../services/hawlakServices'
import "./EditCompany.scss"
import toastPopup from '../../Helpers/Toast'
import { useNavigate } from "react-router-dom";
export default function EditCompany({currentCompany,setCurrentEditingCompanies}) {
    const navigate = useNavigate();
    
    async function editCompanyHandler(){
        let obj = {
            id: currentCompany.id,
            company_name_en: currentCompany.companyNameEN,
            company_name_ar: currentCompany.companyNameAR,
            tax_num: currentCompany.taxNumber,
            phone: currentCompany.phoneNumber,
            mobile: currentCompany.mobileNumber,
            fax: currentCompany.fax,
            email: currentCompany.email,
            number_of_employees: currentCompany.numberOfEmployees,
            is_active: true
        }
        try{
            let {data} = await hawlakServices.editCompany(obj);
            toastPopup("success");
            setTimeout(() => {
              navigate(0);
          }, 1500);
        }catch(error){
            toastPopup("error");
        }
    }
  return (
    <div>    
    <div className="company-container">
      <div className="company-content">
        <form
          className="company-card"            
        >
          <div className='form-header'>
          <i className="fa-solid fa-building company-icon"></i><p className="title">Edit Company</p>
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
               value={currentCompany.companyNameEN}
               onChange={(e) => {
                setCurrentEditingCompanies((prev) => {
                  return { ...prev, companyNameEN: e.target.value };
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
                value={currentCompany.companyNameAR}
                onChange={(e) => {
                    setCurrentEditingCompanies((prev) => {
                      return { ...prev, companyNameAR: e.target.value };
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
              value={currentCompany.taxNumber}
              onChange={(e) => {
                setCurrentEditingCompanies((prev) => {
                  return { ...prev, taxNumber: e.target.value };
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
                setCurrentEditingCompanies((prev) => {
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
                value={currentCompany.mobileNumber}
                onChange={(e) => {
                    setCurrentEditingCompanies((prev) => {
                      return { ...prev, mobileNumber: e.target.value };
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
                value={currentCompany.phoneNumber}
                onChange={(e) => {
                    setCurrentEditingCompanies((prev) => {
                      return { ...prev, phoneNumber: e.target.value };
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
               value={currentCompany.faxNumber}
               onChange={(e) => {
                setCurrentEditingCompanies((prev) => {
                  return { ...prev, faxNumber: e.target.value };
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
                value={currentCompany.numberOfEmployees}
                onChange={(e) => {
                    setCurrentEditingCompanies((prev) => {
                      return { ...prev, numberOfEmployees: e.target.value };
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
               Edit
              </button>            
            </div>
          </div>
        </form>
      </div>
    </div>
    
  </div>
  )
}
