import axios from "axios";

const api = axios.create({
  baseURL: "https://ifplay.herokuapp.com/",
});

export default api;
