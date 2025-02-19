import axios from "axios";
import qs from "qs";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: { 
    "Content-Type": "application/x-www-form-urlencoded",
  },
  transformRequest: [(data) => qs.stringify(data)], 
});

export default api;
