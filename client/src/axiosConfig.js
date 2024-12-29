import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5173/api/v1",
  withCredentials: true,
});
export default instance;
