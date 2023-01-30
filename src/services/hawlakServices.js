import Axios from "./Axios"

let hawlakServices ={
    login: async function (username, email, password) {
        const response = await Axios.post("login/", {
          username,
          email,
          password,
        });
        return response;
      },
      createCompany:async function(obj){
        console.log(obj,"objjjjjjjjjjjjjjjjjjjjjj");
        const response = await Axios.post("company/create_company/",obj)
        return response;
      },
      createBranch: async function(obj){
        console.log(obj,"objbranch");
        const response =  await Axios.post(`company/create_branch/`,obj)
        return response;
      },
      createDepartment: async function(obj){
        console.log(obj,"objdepartment");
        const response =  await Axios.post("company/create_department/",obj)
        return response;
      },
      createEmployee: async function(obj){
        console.log(obj,"objemployee");
        const response =  await Axios.post("employee/create_employee/",obj)
        return response;
      },
      getAllCompanies: async function(){
        
        const response =  await Axios.get("company/list_companies/")
        return response;
      },
      getAllDepartments: async function(){
       const response = await Axios.get(`company/list_departments/`)
       return response;
      },
      getAllBranches: async function(){
        const response = await Axios.get("company/list_branches/")
        return response;
      },
      getAllEmployees: async function(){
        const response = await Axios.get("employee/list_employees/")
        return response;
      },
      editCompany: async function(id,obj){
        const response = await Axios.put(`company/company_details/${id}/`,obj);
        return response;
      },
      editDepartment: async function(id,obj){
        const response = await Axios.put(`company/department_details/${id}/`,obj);
        return response;
      },
      editBranch: async function(id,obj){
        const response = await Axios.put(`company/branch_details/${id}/`,obj);
        return response;
      },
      editEmployee: async function(id,obj){
        const response = await Axios.patch(`employee/edit_employee/${id}/`,obj);
        return response;
      },
      getCompanyDetails: async function(id){
        const response = await Axios.get(`company/company_details/${id}/`)
        return response;
      },
      getBranchDetails: async function(id){
        const response = await Axios.get(`company/branch_details/${id}/`)
        return response;
      },
      getDepartmentDetails: async function(id){
        const response = await Axios.get(`company/department_details/${id}/`)
        return response;
      },
      getEmployeeDetails: async function(id){
        const response = await Axios.get(`employee/employee_details/${id}/`)
        return response;
      },
}
export default hawlakServices;