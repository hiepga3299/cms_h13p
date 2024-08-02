import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5055/api";
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
