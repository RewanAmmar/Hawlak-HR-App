import React,{useState} from 'react'
import "./EditBranch.scss"
import { useNavigate } from "react-router-dom";
import hawlakServices from '../../services/hawlakServices';
import toastPopup from '../../Helpers/Toast';
import Spinner from '../../Components/Spinner/Spinner';
import { t } from "i18next";
export default function EditBranch({currentBranch,setCurrentEditingBranch,setModalVisable}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    async function editBranchHandler(){
        let obj = {            
            branch_name_en: currentBranch.branch_name_en,
            branch_name_ar: currentBranch.branch_name_ar,
            number_of_employees:currentBranch.number_of_employees,
            country_en: currentBranch.country_en,
            country_ar: currentBranch.country_ar,
            address_en: currentBranch.address_en,
            address_ar: currentBranch.address_ar,
            latitude: currentBranch.latitude,
            longitude: currentBranch.longitude,
            company: currentBranch.company
        }
        try{
            let {data} = await hawlakServices.editBranch(currentBranch.id,obj);
            setLoading(true)
            toastPopup("success",t("branches.success_edit"));
            setTimeout(() => {
              navigate(0);
          }, 1500);
        }catch(error){
          setLoading(false)
            toastPopup("error",("branches.error"));
        }
    }
  return (
    <div>
      {loading && <Spinner/>}
      <div className="branch-container">
        
        <div className="branch-content">
          <form
            className="branch-card"            
          >
            <div className='form-header'>
            <i class="fa-solid fa-code-branch branch-icon"></i><p className="title">{t("branches.edit_branch")}</p>
            </div>
            <div className="form-inputs-container">
            
          <div className='container'>
          <div className='left-side'>
              <div className="branch-input-container">
                <label htmlFor="branch-name" className="branch-label">
                  Branch
                </label>

                <input
                  id="branch-name"
                  name="branch-name"
                  placeholder="Branch"
                  className="add-department-name"
                  value={currentBranch.branch_name_en}
                  onChange={(e) => {
                    setCurrentEditingBranch((prev) => {
                     return { ...prev, branch_name_en: e.target.value };
                   });
                 }}
                />
              </div>
              <div className="branch-input-container">
                <label htmlFor="branch" className="branch-label">
                   الفرع
                </label>

                <input
                  name="branch"
                  type="text"
                  id="branch"
                  placeholder=" الفرع"
                  className="add-department-name"
                  value={currentBranch.branch_name_ar}
                  onChange={(e) => {
                    setCurrentEditingBranch((prev) => {
                     return { ...prev, branch_name_ar: e.target.value };
                   });
                 }}
                />
              </div>
              <div className="branch-input-container">
                <label htmlFor="company" className="branch-label">
                  Company Number
                </label>

                <input
                  name="company"
                  type="text"
                  id="company"
                  placeholder="Company Number"
                  className="add-department-name"
                  value={currentBranch.company}
                  onChange={(e) => {
                    setCurrentEditingBranch((prev) => {
                     return { ...prev, company: e.target.value };
                   });
                 }}
                />
              </div>
          
              </div>
              <div className='left-side '>
              <div className="branch-input-container">
                <label htmlFor="country" className="branch-label">
                  Country
                </label>

                <input
                  name="country"
                  type="text"
                  id="country"
                  placeholder="Country"
                  className="add-department-name"
                  value={currentBranch.country_en}
                  onChange={(e) => {
                    setCurrentEditingBranch((prev) => {
                     return { ...prev, country_en: e.target.value };
                   });
                 }}
                />
              </div>
              <div className="branch-input-container">
                <label htmlFor="country-ar" className="branch-label">
                  الدولة
                </label>

                <input
                  name="country-ar"
                  type="text"
                  id="country-ar"
                  placeholder="الدولة"
                  className="add-department-name"
                  value={currentBranch.country_ar}
                  onChange={(e) => {
                    setCurrentEditingBranch((prev) => {
                     return { ...prev, country_ar: e.target.value };
                   });
                 }}
                />
              </div>
              
             
              <div className="branch-input-container">
                <label htmlFor="number-of-employee" className="branch-label">
                Number Of Employees
                </label>

                <input
                  id="number-of-employee"
                  name="number-of-employee"
                  placeholder="Number Of Employees"
                  className="add-department-name"
                  value={currentBranch.number_of_employees}
                  onChange={(e) => {
                    setCurrentEditingBranch((prev) => {
                     return { ...prev, number_of_employees: e.target.value };
                   });
                 }}
                />
              </div>
              </div>
              <div className='left-side '>
              <div className="branch-input-container">
                <label htmlFor="address" className="branch-label">
                  Address
                </label>

                <input
                  name="address"
                  type="text"
                  id="address"
                  placeholder="Address"
                  className="add-department-name"
                  value={currentBranch.address_en}
                  onChange={(e) => {
                    setCurrentEditingBranch((prev) => {
                     return { ...prev, address_en: e.target.value };
                   });
                 }}
                />
              </div>
              <div className="branch-input-container">
                <label htmlFor="address-ar" className="branch-label">
                  العنوان
                </label>

                <input
                  name="address-ar"
                  type="text"
                  id="address-ar"
                  placeholder="العنوان"
                  className="add-department-name"
                  value={currentBranch.address_ar}
                  onChange={(e) => {
                    setCurrentEditingBranch((prev) => {
                     return { ...prev, address_ar: e.target.value };
                   });
                 }}
                />
              </div>
              <div className="branch-input-container">
                <label htmlFor="latitude" className="branch-label">
                  Latitude
                </label>

                <input
                  name="latitude"
                  type="text"
                  id="latitude"
                  placeholder="Latitude"
                  className="add-department-name"
                  value={currentBranch.latitude}
                  onChange={(e) => {
                    setCurrentEditingBranch((prev) => {
                     return { ...prev, latitude: e.target.value };
                   });
                 }}
                />
              </div>
              </div>
        
              <div className='left-side '>
            
              <div className="branch-input-container">
                <label htmlFor="latitude" className="branch-label">
                  Longitude
                </label>

                <input
                  name="latitude"
                  type="text"
                  id="latitude"
                  placeholder="Latitude"
                  className="add-department-name"
                  value={currentBranch.longitude}
                  onChange={(e) => {
                    setCurrentEditingBranch((prev) => {
                     return { ...prev, longitude: e.target.value };
                   });
                 }}
                />
              </div>
              </div>
              </div>
              <div className="button">
                <button
                  name="add-button"
                  className="branch-btn"
                  type="submit"
                  onClick={()=>editBranchHandler()}
                >
                 {t("save")}
                </button>
                <button
                  name="add-button"
                  className="branch-btn"
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
  )
}
