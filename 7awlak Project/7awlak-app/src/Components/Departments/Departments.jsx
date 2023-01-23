import React,{useState,useEffect} from 'react'
import "./Departments.scss"
import { useNavigate } from "react-router-dom"
import TableData from '../../Components/TableData/TableData';
import hawlakServices from '../../services/hawlakServices';
import GeneralModal from './../Modal/Modal';
import EditDepartment from '../../Pages/EditDepartment/EditDepartment';
import { t } from 'i18next';
export default function Departments() {
  const navigate = useNavigate()
    const [allDepartments, setAllDepartments] = useState([])
    const [currentEditingDepartment, setCurrentEditingDepartment] = useState({});
    function handleRowClick(tableRow) {
      navigate(`/department-details/${tableRow.id}`);
      console.log(tableRow, "hhhhhhhhhhhhhhh");
    }
    const [modalVisable, setModalVisable] = useState(false);
    async function allDepartmentsHandler() {
        try{
          let {data: department} = await hawlakServices.getAllDepartments()
          console.log(department,"dataaaaaaaaaaaaaaaaaaaaaaa");     
          let formatedDepartments = department.results.map((department) => {
            
            return {
             
            id: department.id,
            department_name_en: department.department_name_en,
            department_name_ar: department.department_name_ar,          
            number_of_employees: department.number_of_employees, 
            branch: department.branch,         
            is_active: department.is_active,
            edit: (            
              <button
                className="edit-department-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentEditingDepartment(department);
                  setModalVisable(true);
                }}
              >
                {t("edit")}
              </button>
           
          ),
            };
          });
          console.log(department.results, "All departments");
          setAllDepartments(formatedDepartments);
        }catch(err){} 
      }
      useEffect(() => {
        allDepartmentsHandler();
      }, []);
  return (
    <div className='container'>  
        {modalVisable && (
        <GeneralModal>
          <EditDepartment
            currentDepartment={currentEditingDepartment}
            setCurrentEditingDepartment={setCurrentEditingDepartment}
            setModalVisable={setModalVisable}
          />
        </GeneralModal>
      )}    
        <TableData  
        handleRowClick={handleRowClick}      
        tableHeaders={[
          "department_name_en",
          "department_name_ar",
          "number_of_employees",
          "branch",
          "edit"       
        ]}
        tableRows={allDepartments}     
        />      
    </div>
  )
}
