import React ,{useState, useEffect}from 'react'
import "./Branches.scss"
import TableData from '../../Components/TableData/TableData';
import hawlakServices from '../../services/hawlakServices';
import GeneralModal from '../Modal/Modal';
import { useNavigate } from "react-router-dom"
import EditBranch from '../../Pages/EditBranch/EditBranch';
import { t } from 'i18next';
export default function Branches() {
  const navigate = useNavigate()
    const [allBranches, setAllBranches] = useState([]);
    const [currentEditingBranch, setCurrentEditingBranch] = useState({});
    const [modalVisable, setModalVisable] = useState(false);
    function handleRowClick(tableRow) {
      navigate(`/branch-details/${tableRow.id}`);
      console.log(tableRow, "hhhhhhhhhhhhhhh");
    }
    async function allDepartmentsHandler() {
        try{
          let {data} = await hawlakServices.getAllBranches()
          console.log(data,"dataaaaaaaaaaaaaaaaaaaaaaa");     
          let formatedBranches = data.results.map((item) => {
            return {
            id: item.id,
                     
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
            edit: (
            
              <button
                className="edit-branch-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentEditingBranch(item);
                  setModalVisable(true);
                }}
              >
                {t("edit")}
              </button>
           
          ),
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
    <div className='container'> 
    {modalVisable && (
        <GeneralModal>
          <EditBranch
            currentBranch={currentEditingBranch}
            setCurrentEditingBranch={setCurrentEditingBranch}
            setModalVisable={setModalVisable}
          />
        </GeneralModal>
      )}     
    <TableData  
    handleRowClick={handleRowClick}      
    tableHeaders={[
      
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
