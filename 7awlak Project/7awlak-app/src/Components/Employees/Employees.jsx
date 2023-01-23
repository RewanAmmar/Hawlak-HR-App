import React,{useState,useEffect} from 'react'
import "./Employees.scss"
import TableData from '../../Components/TableData/TableData';
import hawlakServices from '../../services/hawlakServices';
import EditEmployee from '../../Pages/EditEmployee/EditEmployee';
import GeneralModal from '../Modal/Modal';
import { t } from 'i18next';
export default function Employees() {
    const [allEmployees, setAllEmployees] = useState([]);
  
    const [currentEditingEmployee, setCurrentEditingEmployee] = useState({});
    const [modalVisable, setModalVisable] = useState(false);
    async function allEmployeesHandler() {
      try{
        let {data: employee} = await hawlakServices.getAllEmployees()
        console.log(employee,"dataaaaaaaaaaaaaaaaaaaaaaa");     
        let formatedEmployees = employee.results.map((employee) => {          
          return {           
          id: employee.id,
          emp_name_en: employee.emp_name_en,
          emp_name_ar: employee.emp_name_ar,          
          phone: employee.phone, 
          mobile: employee.mobile, 
          place_of_birth_en: employee.place_of_birth_en,
          place_of_birth_ar: employee.place_of_birth_ar,          
          edit: (          
            <button
              className="edit-employee-btn"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentEditingEmployee(employee);
                setModalVisable(true);
              }}
            >
             {t("edit")}
            </button>
         
        ),
          };
        });
        console.log(employee.results, "All departments");
        setAllEmployees(formatedEmployees);
      }catch(err){} 
    }
    useEffect(() => {
      allEmployeesHandler();
    }, []);
  return (
    <div className='container'>
       {modalVisable && (
        <GeneralModal>
          <EditEmployee
            currentEmployee={currentEditingEmployee}
            setCurrentEditingEmployee={setCurrentEditingEmployee}
            setModalVisable={setModalVisable}
          />
        </GeneralModal>
      )}          
    <TableData        
    tableHeaders={[
      "emp_name_en",
      "emp_name_ar",
      "phone",
      "mobile" ,
      "place_of_birth_en",
      "place_of_birth_ar",
      "edit"       
    ]}
    tableRows={allEmployees}     
    />      
</div>
  )
}
