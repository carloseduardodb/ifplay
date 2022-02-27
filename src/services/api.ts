import axios from "axios";

const api = axios.create({
  baseURL: "https://ifplay.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "ifplay.herokuapp.com",
  },
  // baseURL: "http://localhost:3333",
});

export default api;
