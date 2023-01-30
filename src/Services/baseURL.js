import axios from "axios";
import { saveUser } from "./saveUser";

const token = saveUser();

const api = axios.create({
  baseURL: "http://10.10.13.16:8000/api/",
  headers: {
    Authorization: "Bearer " + token,
  },
});

export default api;
