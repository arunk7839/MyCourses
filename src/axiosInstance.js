import axios from "axios";

const axiosInstance = axios.create({
    baseURL:`http://localhost:9000`,
});

// // Add a request interceptor
// axiosInstance.interceptors.request.use(function (config) {
//     config.headers.authorization  = `Bearer ${getToken}`
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

  export default axiosInstance;
