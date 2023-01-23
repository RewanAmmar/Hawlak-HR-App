import React from "react";
import "./EditDepartment.scss";
import hawlakServices from "../../services/hawlakServices";
import toastPopup from "../../Helpers/Toast";
import { useNavigate } from "react-router-dom";
export default function EditDepartment({
  currentDepartment,
  setCurrentEditingDepartment,
  setModalVisable,
}) {
  const navigate = useNavigate();
  async function editDepartmentHandler() { 
    let obj ={
        department_name_en:currentDepartment.department_name_en,
        department_name_ar:currentDepartment.department_name_ar,
        number_of_employees:currentDepartment.number_of_employees,
        branch:currentDepartment.branch
    }  
    try {
      let { data } = await hawlakServices.editDepartment(
        currentDepartment.id,
        obj
      );
      console.log(data,"dataaaaaaaaaaaa");
      toastPopup("success");
      setTimeout(() => {
        navigate(0);
      }, 1500);
    } catch (error) {
      toastPopup("error");
    }
  }
  return (
    <div>
      <div className="department-container">
        <div className="department-content">
          <form className="department-card">
            <div className="form-header">
              <i class="fa-solid fa-bars department-icon"></i>
              <p className="title">Edit Department</p>
            </div>
            <div className="form-inputs-container">
              <div className="container">
                <div className="left-side">
                  <div className="department-input-container">
                    <label
                      htmlFor="department-name"
                      className="department-label"
                    >
                      Department Name
                    </label>

                    <input
                      id="department-name"
                      name="department-name"
                      placeholder="Department Name"
                      className="add-department-name"
                      value={currentDepartment.department_name_en}
                      onChange={(e) => {
                        setCurrentEditingDepartment((prev) => {
                          return { ...prev, department_name_en: e.target.value };
                        });
                      }}
                    />
                  </div>
                  <div className="department-input-container">
                    <label htmlFor="department" className="department-label">
                      اسم القسم
                    </label>

                    <input
                      name="department"
                      type="text"
                      id="department"
                      placeholder="اسم القسم"
                      className="add-department-name"
                      value={currentDepartment.department_name_ar}
                      onChange={(e) => {
                        setCurrentEditingDepartment((prev) => {
                          return { ...prev, department_name_ar: e.target.value };
                        });
                      }}
                    />
                  </div>
                  <div className="department-input-container">
                    <label htmlFor="branch" className="department-label">
                      Branch
                    </label>

                    <input
                      name="branch"
                      type="text"
                      id="branch"
                      placeholder="Branch"
                      className="add-department-name"
                      value={currentDepartment.branch}
                      onChange={(e) => {
                        setCurrentEditingDepartment((prev) => {
                          return { ...prev, branch: e.target.value };
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="left-side ">
                  <div className="department-input-container">
                    <label htmlFor="employee" className="department-label">
                      Number Of Employees
                    </label>

                    <input
                      name="employee"
                      type="text"
                      id="employee"
                      placeholder="Number Of Employees"
                      className="add-department-name"
                      value={currentDepartment.number_of_employees}
                      onChange={(e) => {
                        setCurrentEditingDepartment((prev) => {
                          return { ...prev, number_of_employees: e.target.value };
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="button">
                <button
                  name="add-button"
                  className="department-btn"
                  type="submit"
                  onClick={() => editDepartmentHandler()}
                >
                  Save
                </button>
                <button
                  name="add-button"
                  className="department-btn"
                  type="submit"
                  onClick={() => setModalVisable(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
