import React,{useState,useEffect} from 'react'
import "./Departments.scss"
import TableData from '../../Components/TableData/TableData';
import hawlakServices from '../../services/hawlakServices';
export default function Departments() {
    const [allDepartments, setAllDepartments] = useState([])

    async function allDepartmentsHandler() {
        try{
          let {data} = await hawlakServices.getAllDepartments()
          console.log(data,"dataaaaaaaaaaaaaaaaaaaaaaa");     
          let formatedDepartments = data.results.map((item) => {
            return {
            id: item.id,
            department_name_en: item.department_name_en,
            department_name_ar: item.department_name_ar,          
            number_of_employees: item.number_of_employees,          
            is_active: item.is_active
            };
          });
          console.log(data.results, "All departments");
          setAllDepartments(formatedDepartments);
        }catch(err){} 
      }
      useEffect(() => {
        allDepartmentsHandler();
      }, []);
  return (
    <div>      
        <TableData        
        tableHeaders={[
          "department_name_en",
          "department_name_ar",
          "number_of_employees",
          "branch"        
        ]}
        tableRows={allDepartments}     
        />      
    </div>
  )
}
