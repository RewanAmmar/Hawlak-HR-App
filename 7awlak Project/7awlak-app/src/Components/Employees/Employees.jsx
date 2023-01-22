import React,{useState,useEffect} from 'react'
import "./Employees.scss"
import TableData from '../../Components/TableData/TableData';
import hawlakServices from '../../services/hawlakServices';
export default function Employees() {
    const [allEmployees, setAllEmployees] = useState([]);
    async function allEmployeesHandler(){
        try{
            let {data} = await hawlakServices.getAllEmployees()
        }catch(error){}
    }

    useEffect(() => {
        allEmployeesHandler();
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
    tableRows={allEmployees}     
    />      
</div>
  )
}
