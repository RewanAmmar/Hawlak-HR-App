import React,{useState, useEffect} from 'react'
import "./BranchesDetails.scss"
import { useParams } from "react-router-dom";
import hawlakServices from '../../services/hawlakServices';
import BackButton from '../../Components/BackButton/BackButton';
import i18n from '../../Components/Localize/i18n';
import { t } from 'i18next';
export default function BranchesDetails() {
    const lang = i18n.language;
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

     <div className="branch-container">
        <BackButton />
     <div className="branch-content">
       <form
         className="branch-card"            
       >
         <div className='form-header'>
         <i class="fa-solid fa-code-branch branch-icon"></i><p className="title">{t("navbar.branches")}</p>
         </div>
         <div className="form-inputs-container">
         
       <div className='container'>
       <div className='left-side'>
        <>
        {lang === "en" ?(
            <div className="branch-input-container">
             <label htmlFor="branch-name" className="branch-label">
               Branch Name
             </label>

             <div
               id="branch-name"
               name="branch-name"
               placeholder="Branch Name"
               className="add-department-name"              
             >{branch?.branch_name_en}</div>
           </div>
        ):(
            <div className="branch-input-container">
            <label htmlFor="branch" className="branch-label">
               الفرع
            </label>

            <div
              name="branch"
              type="text"
              id="branch"
              placeholder="اسم الفرع"
              className="add-department-name"               
            >{branch?.branch_name_ar}</div>
          </div>
        )}
           </>
          
           <div className="branch-input-container">
             <label htmlFor="company" className="branch-label">
               Number Of Employees
             </label>

             <div
               name="company"
               type="text"
               id="company"
               placeholder="Companies Name"
               className="add-department-name"
              
             >{branch?.number_of_employees}</div>
           </div>
       
           </div>
           <div className='left-side '>
            {lang === "en" ? (
                <div className="branch-input-container">
             <label htmlFor="country" className="branch-label">
               Country
             </label>

             <div
               name="country"
               type="text"
               id="country"
               placeholder="Country"
               className="add-department-name"               
             >{branch?.country_en}</div>
           </div>
            ):(
                <div className="branch-input-container">
             <label htmlFor="country-ar" className="branch-label">
               الدولة
             </label>

             <div
               name="country-ar"
               type="text"
               id="country-ar"
               placeholder="الدولة"
               className="add-department-name"
              
             >{branch?.country_ar}</div>
           </div>
            )}    
            {lang === "en" ? (
                 <div className="branch-input-container">
            
                 <label htmlFor="number-of-employee" className="branch-label">
                 Address
                 </label>
    
                 <div
                   id="number-of-employee"
                   name="number-of-employee"
                   placeholder="Number Of Employees"
                   className="add-department-name"
                   
                 >{branch?.address_en}</div>
               </div>
            ):(
                <div className="branch-input-container">
             <label htmlFor="address" className="branch-label">
               العنوان
             </label>

             <div
               name="address"
               type="text"
               id="address"
               placeholder="Address"
               className="add-department-name"
               
             >{branch?.address_ar}</div>
           </div>
            )}
          
           </div>
           <div className='left-side '>
           
           <div className="branch-input-container">
             <label htmlFor="address-ar" className="branch-label">
            Latitude
             </label>

             <div
               name="address-ar"
               type="text"
               id="address-ar"
               placeholder="العنوان"
               className="add-department-name"
             >{branch?.latitude}</div>
           </div>
           <div className="branch-input-container">
             <label htmlFor="latitude" className="branch-label">
               Longitude
             </label>

             <div
               name="latitude"
               type="text"
               id="latitude"
               placeholder="Latitude"
               className="add-department-name"
             >{branch?.longitude}</div>
           </div>
           </div>
           <div className='left-side '>
           <div className="branch-input-container">
             <label htmlFor="longitude" className="branch-label">
               Creation Date
             </label>

             <div
               name="longitude"
               type="text"
               id="longitude"
               placeholder="Longitude"
               className="add-department-name"
               
             >{branch?.creation_date}</div>
           </div>
               
           </div>
           {/* Input */}
           
           </div>
      
         </div>
       </form>
     </div>
   </div>
  )
}
