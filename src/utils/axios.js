/* eslint-disable prettier/prettier */
const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-type": "application/json",
  },
});
export default axiosInstance;
