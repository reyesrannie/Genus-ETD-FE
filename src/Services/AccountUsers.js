import api from "./baseURL";
import { useQuery } from "react-query";

function createData(
  id,
  code,
  name,
  type,
  mobile_no,
  username,
  company,
  department,
  location,
  scope
) {
  return {
    id,
    code,
    name,
    type,
    mobile_no,
    username,
    company,
    department,
    location,
    scope,
  };
}

export const useGetAllUsers = (status) => {
  return useQuery(["Active Users", status], async () => {
    try {
      const res = await api.get(`user?status=${status}&search`);
      return res.data.result.data;
    } catch (err) {}
  });
};

export const UsersList = () => {
  const dataRows = [];
  const status = "active";
  const { data: users, isLoading, error } = useGetAllUsers(status);
  for (let i = 0; i < users?.length; i++) {
    dataRows.push(
      createData(
        users[i].id,
        users[i].account.code,
        users[i].account.name,
        users[i].type,
        users[i].mobile_no,
        users[i].username,
        users[i].company.name,
        users[i].department.name,
        users[i].location.name
      )
    );
  }

  return dataRows;
};
