import React, { useEffect, useState } from "react";
import "./CompanyDetails.scss";
import { useParams, useNavigate } from "react-router-dom";
import hawlakServices from "../../services/hawlakServices";
export default function CompanyDetails() {
  const params = useParams();
  const companyId = params.companyId;

  const [company, setCompany] = useState([]);
  console.log(company, "company companyy");
  useEffect(() => {
    getInitialListsHandler();
  }, []);
  
  async function getInitialListsHandler() {
    try {
      const { data: CompanyDetails } = await hawlakServices.getCompanyDetails(
        companyId
      );
     console.log(CompanyDetails,"detailllllllllllllllllllls");
   
      setCompany(CompanyDetails);
    } catch (error) {}
  }
  return (
    <div className="company-content">
      <div className="name-container">
        <div className="company-name">
          <h6 className="name">Company Name:</h6>
          <p className="data">{company?.company_name_en}</p>
        </div>
        <div className="company-name">
          <h6 className="name">اسم الشركة:</h6>
          <p className="data">{company?.company_name_ar}</p>
        </div>
      </div>
      <div className="tax-fax-container">
        <div className="company-name">
          <h6 className="name">Phone:</h6>
          <p className="data">{company?.phone}</p>
        </div>
        <div className="company-name">
          <h6 className="name">Mobile:</h6>
          <p className="data">{company?.mobile}</p>
        </div>
      </div>
      <div className="phone-container">
        <div className="company-name">
          <h6 className="name">Fax:</h6>
          <p className="data">{company?.fax}</p>
        </div>
        <div className="company-name">
          <h6 className="name">Tax Number:</h6>
          <p className="data">{company?.tax_num}</p>
        </div>
      </div>
      <div className="email-number-employee-container">
        <div className="company-name">
          <h6 className="name">Email:</h6>
          <p className="data">{company?.email}</p>
        </div>
        <div className="company-name">
          <h6 className="name">Number Of Employees:</h6>
          <p className="data">{company?.number_of_employees}</p>
        </div>
      </div>
      <div className="date-container">
        <div className="company-name">
          <h6 className="name">Creation Date:</h6>
          <p className="data">{company?.creation_date}</p>
        </div>
      </div>
    </div>
  );
}
