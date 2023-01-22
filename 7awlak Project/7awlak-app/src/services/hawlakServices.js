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
        const response = await Axios.post("create_company/",obj)
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
        // console.log(obj,"objdepartment");
        const response =  await Axios.get("company/list_companies/")
        return response;
      },
      getAllDepartments: async function(){
       const response = await Axios.get("company/list_departments/")
       return response;
      },
      getAllBranches: async function(){
        const response = await Axios.get("company/list_branches/")
        return response;
      },
      editCompany: async function(id,obj){
        const response = await Axios.put(`company/company_details/${id}/`,obj);
        return response;
      }
}
export default hawlakServices;