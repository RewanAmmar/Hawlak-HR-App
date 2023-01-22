import React ,{useState, useEffect}from 'react'
import "./Branches.scss"
import TableData from '../../Components/TableData/TableData';
import hawlakServices from '../../services/hawlakServices';
export default function Branches() {
    const [allBranches, setAllBranches] = useState([]);

    async function allDepartmentsHandler() {
        try{
          let {data} = await hawlakServices.getAllBranches()
          console.log(data,"dataaaaaaaaaaaaaaaaaaaaaaa");     
          let formatedBranches = data.results.map((item) => {
            return {
            id: item.id,
            company_name_en: item.company_name_en,
            company_name_ar: item.company_name_ar,          
            branch_name_en: item.branch_name_en,
            branch_name_ar: item.branch_name_ar,
            number_of_employees:item.number_of_employees,
            country_en: item.country_en,
            country_ar: item.country_ar,
            address_en: item.address_en,
            address_ar: item.address_ar,
            latitude: item.latitude,
            longitude: item.longitude,
            creation_date: item.creation_date,
            company: item.company,          
            is_active: item.is_active,
            
            };
          });
          console.log(data.results, "All branches");
          setAllBranches(formatedBranches);
        }catch(err){} 
      }
      useEffect(() => {
        allDepartmentsHandler();
      }, []);
  return (
    <div>      
    <TableData        
    tableHeaders={[
      "company_name_en",
      "company_name_ar",
      "branch_name_en",
      "branch_name_ar",
      "number_of_employees",
      "country_en",
      "country_ar",
      "address_en" ,
      "address_ar",
      "latitude",
      "longitude",
      "creation_date" ,
      "company" ,
      "edit"  

    ]}
    tableRows={allBranches}     
    />      
</div>
  )
}
