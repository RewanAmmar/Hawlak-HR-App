import React,{useState, useEffect} from 'react'
import "./BranchesDetails.scss"
import { useParams } from "react-router-dom";
import hawlakServices from '../../services/hawlakServices';
export default function BranchesDetails() {
    const params = useParams();
    const branchId = params.branchId;
  
    const [branch, setBranch] = useState([]);
    console.log(branch, "company companyy");
    useEffect(() => {
      getInitialListsHandler();
    }, []);
    
    async function getInitialListsHandler() {
      try {
        const { data: branchDetails } = await hawlakServices.getBranchDetails(
            branchId
        );
       console.log(branchDetails,"detailllllllllllllllllllls");
     
       setBranch(branchDetails);
      } catch (error) {}
    }
  return (
    <div className="company-content">
      <div className="name-container">
        <div className="company-name">
          <h6 className="name">Branch Name</h6>
          <p className="data">{branch?.branch_name_en}</p>
        </div>
        <div className="company-name">
          <h6 className="name">اسم الفرع</h6>
          <p className="data">{branch?.branch_name_ar}</p>
        </div>
      </div>
      <div className="tax-fax-container">
        <div className="company-name">
          <h6 className="name">Number Of Employee</h6>
          <p className="data">{branch?.number_of_employees}</p>
        </div>
        <div className="company-name">
          <h6 className="name">Country Name</h6>
          <p className="data">{branch?.country_en}</p>
        </div>
      </div>
      <div className="phone-container">
        <div className="company-name">
          <h6 className="name">اسم الدولة</h6>
          <p className="data">{branch?.country_ar}</p>
        </div>
        <div className="company-name">
          <h6 className="name">Address</h6>
          <p className="data">{branch?.address_en}</p>
        </div>
      </div>
      <div className="email-number-employee-container">
        <div className="company-name">
          <h6 className="name">العنوان</h6>
          <p className="data">{branch?.address_ar}</p>
        </div>
        <div className="company-name">
          <h6 className="name">Latitude</h6>
          <p className="data">{branch?.latitude}</p>
        </div>
      </div>
      <div className="date-container">
        <div className="company-name">
          <h6 className="name">Longitude</h6>
          <p className="data">{branch?.longitude}</p>
        </div>
        <div className="company-name">
          <h6 className="name">Creation Date</h6>
          <p className="data">{branch?.creation_date}</p>
        </div>
      </div>
    </div>
  )
}
