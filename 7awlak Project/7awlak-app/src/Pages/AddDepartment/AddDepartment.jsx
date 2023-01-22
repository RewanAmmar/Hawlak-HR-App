import React,{useState} from 'react'
import toastPopup from '../../Helpers/Toast'
import "./AddDepartment.scss"
import hawlakServices from './../../services/hawlakServices';
import { useNavigate } from "react-router-dom"; 
export default function AddDepartment() {
const [departmentNameEN, setDepartmentNameEN] = useState("")
const [departmentNameAR, setDepartmentNameAR] = useState("")
const [numberOfEmployees, setNumberOfEmployees] = useState(0)
const [loading, setLoading] = useState(false)
const [branch, setBranch] = useState("")
const navigate = useNavigate();

  async function createDepartmentHandler(e){
    e.preventDefault()
    const obj = {
      department_name_en: departmentNameEN,
      department_name_ar: departmentNameAR,
      number_of_employees: numberOfEmployees,
      branch: branch,
      is_active: true
    }
    if(departmentNameEN === ""){
      toastPopup("error","Enter Department Name in English")
    }else if(departmentNameAR === ""){
      toastPopup("error", "Enter Department in Arabic")
    }else if(branch === ""){
      toastPopup("error", "Choose The Branch")
    }else{
      try{
        let {data} = await hawlakServices.createDepartment(obj)
        console.log(data,"dataaaaaaaaaaaa");
        setLoading(false);
        toastPopup("success","Adding Department Successfully");        
        setTimeout(() => {
          navigate(0);
        }, 2000);
      }catch(error){
        setLoading(false);
        toastPopup("error", "Error When Adding Department")
      }
    }
  }
  return (
    <div>
    <div className="department-container">
      <div className="department-content">
        <form
          className="department-card"            
        >
          <div className='form-header'>
          <i className="fa-solid fa-bars department-icon"></i><p className="title">Add Department</p>
          </div>
          <div className="form-inputs-container">
          
        <div className='container'>
        <div className='left-side'>
            <div className="department-input-container">
              <label htmlFor="department-name" className="department-label">
                Department Name
              </label>

              <input
                id="department-name"
                name="department-name"
                placeholder="Department Name"
                className="add-department-name"
               onChange={(e)=> setDepartmentNameEN(e.target.value)}
              />
            </div>
            <div className="department-input-container">
              <label htmlFor="department" className="department-label">
                اسم القسم
              </label>

              <input
                name="department"
                type="text"
                id="department"
                placeholder="اسم القسم"
                className="add-department-name"
                onChange={(e)=> setDepartmentNameAR(e.target.value)}
              />
            </div>
            <div className="department-input-container">
              <label htmlFor="branch" className="department-label">
                Branch Name
              </label>

              <input
                name="branch"
                type="text"
                id="branch"
                placeholder="Branch Name"
                className="add-department-name" 
                onChange={(e)=> setBranch(e.target.value)}               
              />
            </div>
        
            </div>
            <div className='left-side '>
            <div className="department-input-container">
              <label htmlFor="employee" className="department-label">
                Number Of Employees
              </label>

              <input
                name="employee"
                type="text"
                id="employee"
                placeholder="Number Of Employees"
                className="add-department-name"
                onChange={(e)=> setNumberOfEmployees(e.target.value)}
              />
            </div>           
            </div>        
            
            </div>
            <div className="button">
              <button
                name="add-button"
                className="department-btn"
                type="submit"
                onClick={(e)=> createDepartmentHandler(e)}
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
