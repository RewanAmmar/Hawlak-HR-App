import React,{ useEffect, useState } from 'react'
import "./DepartmentDetails.scss"
import { useParams } from "react-router-dom";
import hawlakServices from "../../services/hawlakServices";
export default function DepartmentDetails() {
    const params = useParams();
    const departmentId = params.departmentId;
  
    const [department, setDepartment] = useState([]);
    console.log(department, "company companyy");
    useEffect(() => {
      getInitialListsHandler();
    }, []);
    
    async function getInitialListsHandler() {
      try {
        const { data: departmentDetails } = await hawlakServices.getDepartmentDetails(
            departmentId
        );
       console.log(departmentDetails,"detailllllllllllllllllllls");
     
       setDepartment(departmentDetails);
      } catch (error) {}
    }
  return (
    <div className="company-content">
      <div className="name-container">
        <div className="company-name">
          <h6 className="name">Department Name:</h6>
          <p className="data">{department?.department_name_en}</p>
        </div>
        <div className="company-name">
          <h6 className="name">اسم القسم:</h6>
          <p className="data">{department?.department_name_ar}</p>
        </div>
      </div>
      <div className="tax-fax-container">
        <div className="company-name">
          <h6 className="name">Number of Employees:</h6>
          <p className="data">{department?.number_of_employees}</p>
        </div>
        <div className="company-name">
          <h6 className="name">Branch:</h6>
          <p className="data">{department?.branch}</p>
        </div>
      </div>
     
    </div>
  )
}
