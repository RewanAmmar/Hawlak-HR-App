import React,{useState} from 'react'
import toastPopup from '../../Helpers/Toast'
import "./AddBranch.scss"
import { useNavigate } from "react-router-dom"; 
import hawlakServices from './../../services/hawlakServices';
export default function AddBranch() {
const [branchNameEN, setBranchNameEN] = useState("")
const [branchNameAR, setBranchNameAR] = useState("")
const [numberOfEmployees, setNumberOfEmployees] = useState(0)
const [countryEN, setCountryEN] = useState("");
const [countryAR, setCountryAR] = useState("")
const [addressEN, setAddressEN] = useState("")
const [addressAR, setAddressAR] = useState("")
const [company, setCompany] = useState(0)
const [latitude, setLatitude] =useState(0)
const [longitude, setLongitude] = useState(0)
const navigate = useNavigate();
const [loading, setLoading] = useState(false)
//country en - country ar - address en - address ar - latitude - longitude
  async function createBranchHandler(e){
    e.preventDefault()
    const obj = {
      branch_name_en: branchNameEN,
      branch_name_ar: branchNameAR,
      number_of_employees: numberOfEmployees,
      country_en : countryEN,
      country_ar: countryAR,
      address_en: addressEN,
      address_ar: addressAR,
      company: company,
      is_active: true,
      latitude: latitude,
      longitude: longitude
    }
    if(branchNameEN === ""){
      toastPopup("error","Enter Branch Name in English")
    }else if(branchNameAR === ""){
      toastPopup("error","Enter Branch Name in Arabic")
    }else if(latitude === ""){
      toastPopup("error","Enter Latitude")
    }else if(longitude === ""){
      toastPopup("error","Enter Longitude")
    }else if(company === ""){
      toastPopup("error","Enter Number of Company")
    }else{
      try{
        let {data} = await hawlakServices.createBranch(obj);
        console.log(data,"dataaaaaaaaaaaaaaaaaaaaaaaa");
        setLoading(false);
        toastPopup("success","Adding Branch Successfully");
        setTimeout(() => {
          navigate(0);
        }, 2000);
      }catch(error){
        setLoading(false);
        toastPopup("error", "Error When Adding Branch")
      }
    }
  }
  return (
    <div>
      <div className="branch-container">
        <div className="branch-content">
          <form
            className="branch-card"            
          >
            <div className='form-header'>
            <i class="fa-solid fa-code-branch branch-icon"></i><p className="title">Add Branch</p>
            </div>
            <div className="form-inputs-container">
            
          <div className='container'>
          <div className='left-side'>
              <div className="branch-input-container">
                <label htmlFor="branch-name" className="branch-label">
                  Branch Name
                </label>

                <input
                  id="branch-name"
                  name="branch-name"
                  placeholder="Branch Name"
                  className="add-department-name"
                 onChange={(e)=> setBranchNameEN(e.target.value)}
                />
              </div>
              <div className="branch-input-container">
                <label htmlFor="branch" className="branch-label">
                  اسم الفرع
                </label>

                <input
                  name="branch"
                  type="text"
                  id="branch"
                  placeholder="اسم الفرع"
                  className="add-department-name"
                  onChange={(e)=> setBranchNameAR(e.target.value)}
                />
              </div>
              <div className="branch-input-container">
                <label htmlFor="company" className="branch-label">
                  Company
                </label>

                <input
                  name="company"
                  type="text"
                  id="company"
                  placeholder="Companies Name"
                  className="add-department-name"
                  onChange={(e)=> setCompany(e.target.value)}
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
                  onChange={(e)=> setCountryEN(e.target.value)}
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
                  onChange={(e)=> setCountryAR(e.target.value)}
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
                  onChange={(e)=> setNumberOfEmployees(e.target.value)}
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
                  onChange={(e)=> setAddressEN(e.target.value)}
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
                  onChange={(e)=> setAddressAR(e.target.value)}
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
                  onChange={(e)=> setLatitude(e.target.value)}
                />
              </div>
              </div>
              <div className='left-side '>
              <div className="branch-input-container">
                <label htmlFor="longitude" className="branch-label">
                  Longitude
                </label>

                <input
                  name="longitude"
                  type="text"
                  id="longitude"
                  placeholder="Longitude"
                  className="add-department-name"
                  onChange={(e)=> setLongitude(e.target.value)}
                />
              </div>
                  
              </div>
              {/* Input */}
              
              </div>
              <div className="button">
                <button
                  name="add-button"
                  className="branch-btn"
                  type="submit"
                  onClick={(e)=> createBranchHandler(e)}
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
