import { useMutation } from "react-query";
import api from "./baseURL";

export const useLoginApi = () => {
  return useMutation((data) => {
    return api.post(`login`, data);
  });
};
