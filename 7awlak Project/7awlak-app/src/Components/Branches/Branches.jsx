import React, { useState, useEffect } from "react";
import "./Branches.scss";
import TableData from "../../Components/TableData/TableData";
import hawlakServices from "../../services/hawlakServices";
import GeneralModal from "../Modal/Modal";
import { NavLink, useNavigate } from "react-router-dom";
import EditBranch from "../../Pages/EditBranch/EditBranch";
import { t } from "i18next";
import i18n from "../Localize/i18n";
import BackButton from '../BackButton/BackButton';

export default function Branches() {
  const navigate = useNavigate();
  const lang = i18n.language;
  const [allBranches, setAllBranches] = useState([]);
  const [currentEditingBranch, setCurrentEditingBranch] = useState({});
  const [modalVisable, setModalVisable] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [itemsCount, setItemsCount] = useState(0);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  function handleRowClick(tableRow) {
    navigate(`/branch-details/${tableRow.id}`);
    console.log(tableRow, "hhhhhhhhhhhhhhh");
  }

  async function allDepartmentsHandler() {
    try {
      let { data:branch } = await hawlakServices.getAllBranches();
      console.log(branch, "dataaaaaaaaaaaaaaaaaaaaaaa");
      let formatedBranches = branch.results.map((item) => {
        return {
          id: item.id,
          branch_name_en: item.branch_name_en,
          branch_name_ar: item.branch_name_ar,
          number_of_employees: item.number_of_employees,
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
              {t("table.edit")}
            </button>
          ),
        };
      });
      console.log(branch.results, "All branches");
      setAllBranches(formatedBranches);
      setItemsCount(branch.count);
    } catch (err) {}
  }
  useEffect(() => {
    allDepartmentsHandler();
  }, [activePage]);
  return (
    <div className="container">
      <BackButton />
      <div className="btn-section">
        <NavLink to="/add-branch">
          <button className="add-branch-btn">{t("branches.add_branch")}</button>
        </NavLink>
      </div>

      {modalVisable && (
        <GeneralModal>
          <EditBranch
            currentBranch={currentEditingBranch}
            setCurrentEditingBranch={setCurrentEditingBranch}
            setModalVisable={setModalVisable}
          />
        </GeneralModal>
      )}
      <>
        {lang === "en" ? (
          <TableData
            handleRowClick={handleRowClick}
            tableHeaders={[
              "branch_name_en",
              "country_en",
              "address_en",
              "latitude",
              "longitude",
              "creation_date",
              "company",
              "edit",
            ]}
            tableRows={allBranches}
            showPagination={true}
            handlePageChange={handlePageChange}
            activePage={activePage}
            itemsCount={itemsCount}
          />
        ) : (
          <TableData
          handleRowClick={handleRowClick}
          tableHeaders={[
            "branch_name_ar",
            "number_of_employees",
            "country_ar",
            "address_ar",
            "latitude",
            "longitude",
            "creation_date",
            "company",
            "edit"
          ]}
          tableRows={allBranches}
          showPagination={true}
            handlePageChange={handlePageChange}
            activePage={activePage}
            itemsCount={itemsCount}
        />          
        )}
      </>
    </div>
  );
}
