import axios from "axios";
import * as constant from "./constant";
const endPoint = constant.default.endPoint;

const Axios = axios;

Axios.defaults.baseURL = endPoint;

Axios.defaults.headers["Content-Type"] = "application/json";

Axios.interceptors.request.use(function (request) {
  if (request.url !== "login/") {
    var mykey = localStorage.getItem("key");
    request.headers["Authorization"] = "Token " + mykey;
  }
  return request;
});

export default Axios;
